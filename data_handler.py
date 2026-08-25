import pandas as pd
import numpy as np
import json
from sklearn.ensemble import IsolationForest

# 1. Load the dataset
file_path = "MNREGA_scheme_data_southindianstates_districtwise_2425.xlsx"
df = pd.read_excel(file_path, sheet_name='combine')

# 2. Filter for the latest snapshot (e.g., March) and clean
df_latest = df[df['month'] == 'March'].copy()
df_latest = df_latest.fillna(0)
df_latest = df_latest.drop_duplicates(subset=['state_name', 'district_name'])

# 3. Define AI Engine Features
features = [
    'Total_Exp',
    'Number_of_GPs_with_NIL_exp',
    'percentage_payments_gererated_within_15_days',
    'Total_No_of_Active_Workers',
    'Number_of_Completed_Works'
]

# 4. Run Isolation Forest Anomaly Detection
iso_forest = IsolationForest(contamination=0.05, random_state=42)
df_latest['anomaly_flag'] = iso_forest.fit_predict(df_latest[features])
df_latest['anomaly_score'] = iso_forest.decision_function(df_latest[features])

# Convert scores to a 0-1 risk scale (lower decision function = higher risk)
min_score = df_latest['anomaly_score'].min()
max_score = df_latest['anomaly_score'].max()
df_latest['risk_score'] = 1 - ((df_latest['anomaly_score'] - min_score) / (max_score - min_score))

# Calculate progress percentage
df_latest['progress'] = np.where(
    (df_latest['Number_of_Completed_Works'] + df_latest['Number_of_Ongoing_Works']) > 0,
    (df_latest['Number_of_Completed_Works'] / (df_latest['Number_of_Completed_Works'] + df_latest['Number_of_Ongoing_Works'])) * 100,
    0
).round(1)

# 5. Format the Output for script.js
alerts_list = []
anomalous_districts = df_latest[df_latest['anomaly_flag'] == -1].sort_values(by='risk_score', ascending=False).head(6)

for idx, row in anomalous_districts.iterrows():
    if row['Number_of_GPs_with_NIL_exp'] > 10:
        title = 'High NIL Expenditure GPs'
        detail = f"{row['district_name'].title()} · {row['Number_of_GPs_with_NIL_exp']} GPs with 0 spend"
        action = 'Investigate work allocation and fund flow blockages at Block level.'
    elif row['percentage_payments_gererated_within_15_days'] < 80:
        title = 'Severe Payment Delays'
        detail = f"{row['district_name'].title()} · Only {row['percentage_payments_gererated_within_15_days']}% paid in 15 days"
        action = 'Escalate to State Nodal Officer for immediate FTO clearance.'
    else:
        title = 'Expenditure Anomaly Spike'
        detail = f"{row['district_name'].title()} · ₹{row['Total_Exp']:,.0f}L spent · Isolation Forest flag"
        action = 'Review sudden expenditure spikes against approved works register.'
        
    alerts_list.append({
        'id': f"MNR-ALT-{str(row['district_code']).zfill(3)}",
        'sev': 'high' if row['risk_score'] > 0.8 else 'medium',
        'title': title,
        'detail': detail,
        'model': 'Isolation Forest',
        'confidence': round(row['risk_score'], 2),
        'action': action
    })

works_list = []
for idx, row in df_latest.head(50).iterrows():
    severity = 'high' if row['risk_score'] > 0.8 else 'medium' if row['risk_score'] > 0.5 else 'low'
    works_list.append([
        f"MNR-{str(row['district_code']).zfill(4)}",
        "Rural Employment Gen.",
        row['state_name'].title(),
        row['district_name'].title(),
        "Nodal Agency",
        round(row['Total_Exp'], 2),
        row['progress'],
        round(row['risk_score'], 2),
        severity
    ])

# Map district coordinates for geospatial visualization
district_coords = {
    'Visakhapatanam': (17.7215, 83.2849),
    'Visakhapatnam': (17.7215, 83.2849),
    'West Godavari': (16.7107, 81.0952),
    'Nellore': (14.4426, 79.9865),
    'Kurnool': (15.8281, 78.0373),
    'Eluru': (16.7107, 81.0952),
    'Nandyal': (15.4786, 78.4835),
    'Belagavi': (15.8497, 74.4977),
    'Chitradurga': (14.2230, 76.3980),
    'Bengaluru': (12.9716, 77.5946),
    'Ramanagara': (12.7209, 77.2799),
    'Wayanad': (11.6050, 76.0830),
    'Siddipet': (18.1010, 78.8520),
    'Anantapur': (14.6819, 77.6006),
    'Srikakulam': (18.2969, 83.8968),
    'Cuddalore': (11.7480, 79.7714),
    'Vellore': (12.9165, 79.1325),
    'Villupuram': (11.9401, 79.4861),
    'Tiruvannamalai': (12.2253, 79.0747)
}

cases_list = []
for idx, alert in enumerate(alerts_list[:3]):
    cases_list.append({
        'id': f"MNR-CASE-0{idx+1}",
        'title': f"{alert['detail'].split('·')[0].strip()} Expenditure & Allocation Audit",
        'priority': 'High' if alert['sev'] == 'high' else 'Medium',
        'owner': 'District Magistrate / Collector',
        'status': 'In review',
        'note': alert['action']
    })

hotspots_list = []
for idx, row in df_latest[df_latest['anomaly_flag'] == -1].iterrows():
    d_name = row['district_name'].title()
    if d_name in district_coords:
        lat, lng = district_coords[d_name]
        hotspots_list.append({
            'lat': lat,
            'lng': lng,
            'name': f"{d_name} Cluster",
            'risk': round(float(row['risk_score']), 2),
            'works': int(row['Number_of_Completed_Works'] + row['Number_of_Ongoing_Works'])
        })

# Generate final JSON structure
MNREGA_DATA = {
    "alerts": alerts_list,
    "works": works_list,
    "cases": cases_list,
    "hotspots": hotspots_list
}

with open("mnrega_data.json", "w") as f:
    json.dump(MNREGA_DATA, f, indent=2)

print(json.dumps(MNREGA_DATA, indent=2))