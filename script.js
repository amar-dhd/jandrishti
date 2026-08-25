const MPLADS_DATA = {
    alerts: [
        { id: 'IA-001', sev: 'high', title: 'Vendor collusion pattern', detail: 'Malkajgiri · GNN score 0.98 · 28 works', model: 'GraphSAGE', confidence: .98, action: 'Inspect network and verify procurement relationships.' },
        { id: 'FIN-207', sev: 'high', title: 'Cost overrun cluster', detail: '7 works exceed illustrative baseline by >40%', model: 'Isolation Forest + Rules', confidence: .93, action: 'Review estimates, revisions, and payment chronology.' },
        { id: 'GEO-118', sev: 'medium', title: 'GeoHash duplicate', detail: 'Two works share suspiciously similar coordinates', model: 'Geospatial rule', confidence: .89, action: 'Request field verification with geo-tagged evidence.' },
        { id: 'SC-034', sev: 'medium', title: 'SC/ST allocation shortfall', detail: 'Illustrative gap of 18% in one state snapshot', model: 'Compliance rule', confidence: .91, action: 'Review category allocation and sanction records.' },
        { id: 'DEL-019', sev: 'medium', title: 'Sanction delay >45 days', detail: '12 works in Hyderabad district', model: 'Temporal anomaly', confidence: .84, action: 'Escalate ageing cases to nodal authority.' },
        { id: 'FC-009', sev: 'low', title: 'Utilization forecast shortfall', detail: 'Illustrative forecast below target trajectory', model: 'Forecasting', confidence: .76, action: 'Monitor next reporting cycle.' }
    ],
    works: [
        ['UP-0441', 'Community Hall', 'Uttar Pradesh', 'Sitapur', 'M/s Vijay Const', 84.2, 42, .94, 'high'],
        ['UP-0512', 'Road Repair', 'Uttar Pradesh', 'Sitapur', 'M/s Sahu Infra', 62.5, 68, .76, 'medium'],
        ['TS-2041', 'Drinking Water Point', 'Telangana', 'Malkajgiri', 'M/s Delta Works', 48.1, 18, .98, 'high'],
        ['WB-1188', 'Community Centre', 'West Bengal', 'Bolpur', 'M/s Eastern Build', 93.4, 51, .82, 'medium'],
        ['DL-0772', 'Drainage Improvement', 'Delhi', 'South West', 'M/s Metro Civils', 55.9, 89, .39, 'low'],
        ['RJ-2290', 'Village Road', 'Rajasthan', 'Jaipur', 'M/s Aravalli Infra', 71.4, 36, .91, 'high'],
        ['TN-0318', 'School Renovation', 'Tamil Nadu', 'Chennai South', 'M/s Coastal Infra', 44.8, 74, .68, 'medium'],
        ['MH-9011', 'Primary Health Centre', 'Maharashtra', 'Mumbai West', 'M/s Western Works', 88.2, 93, .34, 'low']
    ],
    cases: [
        { id: 'CASE-104', title: 'UP vendor concentration review', priority: 'High', owner: 'District Authority', status: 'In review', note: 'Verify repeated vendor-award patterns across linked works.' },
        { id: 'CASE-098', title: 'SC/ST allocation compliance check', priority: 'Medium', owner: 'State Nodal', status: 'Assigned', note: 'Reconcile illustrative allocation with sanction ledger.' },
        { id: 'CASE-091', title: 'Geo duplicate field verification', priority: 'Medium', owner: 'Field Team', status: 'Awaiting evidence', note: 'Collect geo-tagged photo and location confirmation.' }
    ],
    hotspots: [
        { lat: 26.8467, lng: 80.9462, name: 'Lucknow Ring', risk: .95, works: 41 },
        { lat: 19.0760, lng: 72.8777, name: 'Mumbai West Ring', risk: .88, works: 23 },
        { lat: 25.5941, lng: 85.1376, name: 'Patna Cluster', risk: .97, works: 52 },
        { lat: 13.0827, lng: 80.2707, name: 'Chennai South Ring', risk: .81, works: 19 },
        { lat: 26.9124, lng: 75.7873, name: 'Jaipur Ring', risk: .93, works: 37 }
    ]
};

const MNREGA_DATA = {
    alerts: [
        { id: "MNR-ALT-1504", sev: "high", title: "Expenditure Anomaly Spike", detail: "Belagavi · ₹45,543L spent · Isolation Forest flag", model: "Isolation Forest", confidence: 1.0, action: "Review sudden expenditure spikes against approved works register." },
        { id: "MNR-ALT-3640", sev: "high", title: "High NIL Expenditure GPs", detail: "Siddipet · 20 GPs with 0 spend", model: "Isolation Forest", confidence: 1.0, action: "Investigate work allocation and fund flow blockages at Block level." },
        { id: "MNR-ALT-1603", sev: "high", title: "Expenditure Anomaly Spike", detail: "Wayanad · ₹19,070L spent · Isolation Forest flag", model: "Isolation Forest", confidence: 0.99, action: "Review sudden expenditure spikes against approved works register." },
        { id: "MNR-ALT-1510", sev: "high", title: "Expenditure Anomaly Spike", detail: "Chitradurga · ₹36,788L spent · Isolation Forest flag", model: "Isolation Forest", confidence: 0.97, action: "Review sudden expenditure spikes against approved works register." },
        { id: "MNR-ALT-1502", sev: "high", title: "Expenditure Anomaly Spike", detail: "Bengaluru · ₹397L spent · Isolation Forest flag", model: "Isolation Forest", confidence: 0.91, action: "Review sudden expenditure spikes against approved works register." },
        { id: "MNR-ALT-1529", sev: "high", title: "Expenditure Anomaly Spike", detail: "Ramanagara · ₹23,148L spent · Isolation Forest flag", model: "Isolation Forest", confidence: 0.91, action: "Review sudden expenditure spikes against approved works register." }
    ],
    works: [
        ["MNR-0203", "Rural Employment Gen.", "Andhra Pradesh", "Visakhapatnam", "Nodal Agency", 5654.99, 31.6, 0.27, "low"],
        ["MNR-0205", "Rural Employment Gen.", "Andhra Pradesh", "West Godavari", "Nodal Agency", 14696.09, 25.6, 0.27, "low"],
        ["MNR-0209", "Rural Employment Gen.", "Andhra Pradesh", "Nellore", "Nodal Agency", 33793.04, 26.6, 0.19, "low"],
        ["MNR-0213", "Rural Employment Gen.", "Andhra Pradesh", "Kurnool", "Nodal Agency", 32834.94, 19.4, 0.48, "low"],
        ["MNR-0217", "Rural Employment Gen.", "Andhra Pradesh", "Eluru", "Nodal Agency", 37366.57, 21.9, 0.50, "low"],
        ["MNR-0221", "Rural Employment Gen.", "Andhra Pradesh", "Nandyal", "Nodal Agency", 25053.56, 25.6, 0.19, "low"],
        ["MNR-0223", "Rural Employment Gen.", "Andhra Pradesh", "Annamayya", "Nodal Agency", 29404.32, 34.1, 0.06, "low"],
        ["MNR-0224", "Rural Employment Gen.", "Andhra Pradesh", "Tirupati", "Nodal Agency", 30942.50, 29.7, 0.16, "low"],
        ["MNR-0225", "Rural Employment Gen.", "Andhra Pradesh", "Parvathipuram Manyam", "Nodal Agency", 44396.86, 22.3, 0.22, "low"],
        ["MNR-0210", "Rural Employment Gen.", "Andhra Pradesh", "Chittoor", "Nodal Agency", 31231.49, 23.4, 0.10, "low"],
        ["MNR-0219", "Rural Employment Gen.", "Andhra Pradesh", "Bapatla", "Nodal Agency", 21913.82, 28.9, 0.12, "low"],
        ["MNR-0226", "Rural Employment Gen.", "Andhra Pradesh", "Kakinada", "Nodal Agency", 22971.14, 30.2, 0.03, "low"],
        ["MNR-0204", "Rural Employment Gen.", "Andhra Pradesh", "East Godavari", "Nodal Agency", 18250.96, 31.9, 0.02, "low"],
        ["MNR-0212", "Rural Employment Gen.", "Andhra Pradesh", "Anantapur", "Nodal Agency", 40958.89, 20.4, 0.21, "low"],
        ["MNR-0214", "Rural Employment Gen.", "Andhra Pradesh", "Alluri Sitharama Raju", "Nodal Agency", 73056.99, 24.6, 0.75, "medium"],
        ["MNR-0216", "Rural Employment Gen.", "Andhra Pradesh", "Konaseema", "Nodal Agency", 21256.34, 27.6, 0.00, "low"],
        ["MNR-0222", "Rural Employment Gen.", "Andhra Pradesh", "Sri Sathya Sai", "Nodal Agency", 36065.52, 27.7, 0.14, "low"],
        ["MNR-0201", "Rural Employment Gen.", "Andhra Pradesh", "Srikakulam", "Nodal Agency", 60653.44, 30.8, 0.59, "medium"],
        ["MNR-0211", "Rural Employment Gen.", "Andhra Pradesh", "Y.S.R", "Nodal Agency", 30096.13, 25.2, 0.13, "low"],
        ["MNR-0220", "Rural Employment Gen.", "Andhra Pradesh", "Palnadu", "Nodal Agency", 23103.91, 20.7, 0.37, "low"],
        ["MNR-1504", "Rural Employment Gen.", "Karnataka", "Belagavi", "Block Agency", 45543.00, 42.1, 0.98, "high"],
        ["MNR-1510", "Rural Employment Gen.", "Karnataka", "Chitradurga", "Block Agency", 36788.00, 38.5, 0.97, "high"],
        ["MNR-1502", "Rural Employment Gen.", "Karnataka", "Bengaluru", "Block Agency", 397.00, 55.0, 0.91, "high"],
        ["MNR-1529", "Rural Employment Gen.", "Karnataka", "Ramanagara", "Block Agency", 23148.00, 47.3, 0.91, "high"],
        ["MNR-1603", "Rural Employment Gen.", "Kerala", "Wayanad", "Panchayat Exec", 19070.00, 61.2, 0.99, "high"],
        ["MNR-3640", "Rural Employment Gen.", "Telangana", "Siddipet", "Block Agency", 12450.00, 18.2, 1.00, "high"]
    ],
    cases: [
        { id: 'MNR-CASE-01', title: 'Belagavi Expenditure Surge Audit', priority: 'High', owner: 'District Collector', status: 'In review', note: 'Verify sudden jump in wage disbursements vs physical assets created.' },
        { id: 'MNR-CASE-02', title: 'Siddipet NIL Expenditure GP Review', priority: 'High', owner: 'Block Development Officer', status: 'Assigned', note: 'Audit 20 Gram Panchayats reporting zero expenditure despite labor demand.' },
        { id: 'MNR-CASE-03', title: 'Wayanad Wage Delay Verification', priority: 'Medium', owner: 'State Nodal Officer', status: 'In review', note: 'Reconcile FTO clearance delays with bank credit logs.' }
    ],
    hotspots: [
        { lat: 15.8497, lng: 74.4977, name: 'Belagavi Cluster', risk: .98, works: 48 },
        { lat: 11.6050, lng: 76.0830, name: 'Wayanad Zone', risk: .95, works: 36 },
        { lat: 14.2230, lng: 76.3980, name: 'Chitradurga Cluster', risk: .92, works: 42 },
        { lat: 18.1010, lng: 78.8520, name: 'Siddipet Zone', risk: .89, works: 29 },
        { lat: 17.7215, lng: 83.2849, name: 'Visakhapatnam Zone', risk: .72, works: 31 }
    ]
};

// Dynamic Scheme Registry
const REGISTERED_SCHEMES = {
    mplads: {
        id: 'mplads',
        name: 'MPLADS',
        title: 'National MPLADS Risk Intelligence',
        subtitle: 'MPLADS Oversight &middot; Advanced Prototype',
        footer: 'JanDrishti Advanced Prototype &middot; SIH/MPLADS concept &middot; Synthetic / illustrative data &middot; Not for production use',
        kpis: [
            { label: 'Total Works', val: '12,847', sub: '↑ 3.0% from last quarter' },
            { label: 'Avg Risk Score', val: '0.67', sub: '2,104 works above high-risk threshold' },
            { label: 'Funds Disbursed', val: '₹18,942 Cr', sub: '22% unspent in illustrative last-FY snapshot' },
            { label: 'SC/ST Compliance', val: '78%', sub: 'Illustrative gap in 12 states' }
        ],
        trendLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        trendData1: [62, 64, 66, 65, 68, 69, 67, 71],
        trendLabel1: 'Utilization %',
        trendData2: [52, 55, 57, 61, 60, 64, 67, 67],
        trendLabel2: 'Avg risk ×100',
        signalLabels: ['GNN / graph', 'Rules', 'Anomaly / forecast'],
        signalData: [47, 31, 22],
        data: MPLADS_DATA
    },
    mnrega: {
        id: 'mnrega',
        name: 'MNREGA',
        title: 'National MNREGA Risk Intelligence',
        subtitle: 'MNREGA Oversight &middot; Advanced Prototype',
        footer: 'JanDrishti Advanced Prototype &middot; MNREGA District Anomaly Analysis &middot; South Indian States Dataset &middot; FY 24-25',
        kpis: [
            { label: 'Districts Monitored', val: '50', sub: 'South Indian District Dataset (FY 24-25)' },
            { label: 'Avg Anomaly Score', val: '0.34', sub: '6 districts flagged high-risk' },
            { label: 'Total Expenditure', val: '₹10,50,078L', sub: 'Isolation Forest expenditure audit' },
            { label: '15-Day Payment SLA', val: '92%', sub: 'Timely wage credit compliance' }
        ],
        trendLabels: ['Q1 FY24', 'Q2 FY24', 'Q3 FY24', 'Q4 FY24', 'Q1 FY25', 'Q2 FY25'],
        trendData1: [420, 480, 510, 690, 740, 810],
        trendLabel1: 'Wage Exp (₹ Cr)',
        trendData2: [12, 14, 18, 26, 22, 28],
        trendLabel2: 'Anomaly Rate %',
        signalLabels: ['Isolation Forest Anomaly', 'Payment SLA Rules', 'Geo/Vendor Graph'],
        signalData: [52, 28, 20],
        data: MNREGA_DATA
    },
    pmay: {
        id: 'pmay',
        name: 'PMAY Housing',
        title: 'National PMAY Housing Risk Intelligence',
        subtitle: 'PMAY Rural Housing Oversight &middot; Advanced Prototype',
        footer: 'JanDrishti Advanced Prototype &middot; Pradhan Mantri Awas Yojana Rural Audit &middot; FY 24-25',
        kpis: [
            { label: 'Houses Sanctioned', val: '48,210', sub: 'Target: 50,000 units' },
            { label: 'Geo-Tag Audit Risk', val: '0.41', sub: '342 suspicious location tags' },
            { label: 'DBT Disbursed', val: '₹6,420 Cr', sub: 'Direct Benefit Transfer logs' },
            { label: 'Stage 3 Milestone SLA', val: '87%', sub: 'Roofing inspection compliance' }
        ],
        trendLabels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1 (New)', 'Q2 (New)'],
        trendData1: [110, 140, 190, 240, 290, 350],
        trendLabel1: 'DBT Credit (₹ Cr)',
        trendData2: [15, 11, 18, 22, 16, 19],
        trendLabel2: 'Geo Mismatch %',
        signalLabels: ['Geo-Tag Duplication', 'DBT Delay Anomaly', 'Beneficiary Audit'],
        signalData: [45, 35, 20],
        data: createPMAYData()
    },
    jjm: {
        id: 'jjm',
        name: 'Jal Jeevan Mission',
        title: 'National Jal Jeevan Mission Risk Intelligence',
        subtitle: 'Jal Jeevan Tap Water Infrastructure Oversight &middot; Advanced Prototype',
        footer: 'JanDrishti Advanced Prototype &middot; Har Ghar Jal Infrastructure Audit &middot; FY 24-25',
        kpis: [
            { label: 'Tap Connections', val: '84,910', sub: 'FHTC Installation Progress' },
            { label: 'Quality Anomaly Risk', val: '0.38', sub: '128 pipeline cost variance flags' },
            { label: 'Expenditure Sanctioned', val: '₹9,840 Cr', sub: 'Water grid pipeline funds' },
            { label: 'Water Quality Testing', val: '94%', sub: 'Lab test verification rate' }
        ],
        trendLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        trendData1: [72, 75, 78, 81, 84, 86, 88, 91],
        trendLabel1: 'Coverage %',
        trendData2: [8, 9, 12, 15, 11, 14, 10, 13],
        trendLabel2: 'Cost Overrun %',
        signalLabels: ['Pipeline Overrun ML', 'Water Quality Rules', 'Contractor Graph'],
        signalData: [40, 40, 20],
        data: createJJMData()
    }
};

function createPMAYData() {
    return {
        alerts: [
            { id: "PMAY-ALT-101", sev: "high", title: "Geo-Tag Coordinate Clashing", detail: "Dharmapuri · 18 house sanctions share identical GPS coordinates", model: "Geospatial Rule", confidence: 0.96, action: "Request physical site audit with geo-verification photo." },
            { id: "PMAY-ALT-102", sev: "high", title: "DBT Payment Delay Spike", detail: "Visakhapatnam · 42 beneficiaries awaiting Stage 2 credit >60 days", model: "Isolation Forest", confidence: 0.91, action: "Escalate to District Housing Nodal Officer." },
            { id: "PMAY-ALT-103", sev: "medium", title: "Cost Revision Threshold Exceeded", detail: "Belagavi · 12 units flagged for unexpected material cost revision", model: "Rule Engine", confidence: 0.85, action: "Review sanction estimates against PWD rate card." }
        ],
        works: [
            ["PMAY-0101", "Rural Housing Unit", "Tamil Nadu", "Dharmapuri", "State Housing Corp", 1.20, 85.0, 0.96, "high"],
            ["PMAY-0102", "Rural Housing Unit", "Andhra Pradesh", "Visakhapatnam", "District Housing Soc", 1.50, 45.0, 0.91, "high"],
            ["PMAY-0103", "Rural Housing Unit", "Karnataka", "Belagavi", "Block Panchayat", 1.35, 60.0, 0.85, "medium"],
            ["PMAY-0104", "Rural Housing Unit", "Kerala", "Wayanad", "Panchayat Exec", 1.40, 90.0, 0.22, "low"],
            ["PMAY-0105", "Rural Housing Unit", "Telangana", "Siddipet", "State Housing Corp", 1.25, 75.0, 0.18, "low"]
        ],
        cases: [
            { id: 'PMAY-CASE-01', title: 'Dharmapuri GPS Coordinate Verification', priority: 'High', owner: 'District Housing Officer', status: 'In review', note: 'Verify duplicate geotags across 18 sanctioned housing units.' }
        ],
        hotspots: [
            { lat: 12.121, lng: 78.158, name: 'Dharmapuri Housing Cluster', risk: .96, works: 18 },
            { lat: 17.7215, lng: 83.2849, name: 'Visakhapatnam Housing Zone', risk: .91, works: 42 }
        ]
    };
}

function createJJMData() {
    return {
        alerts: [
            { id: "JJM-ALT-201", sev: "high", title: "Pipeline Rate Card Overrun", detail: "Kurnool · ₹2,450L spent on HDPE pipes vs ₹1,800L benchmark", model: "Isolation Forest", confidence: 0.97, action: "Audit procurement tenders and supplier invoices." },
            { id: "JJM-ALT-202", sev: "high", title: "Water Quality Lab Failure Cluster", detail: "Chitradurga · 14 village supply points failed turbidity SLA", model: "Compliance Rule", confidence: 0.93, action: "Inspect filtration units and trigger re-sampling." }
        ],
        works: [
            ["JJM-0201", "Piped Water Network", "Andhra Pradesh", "Kurnool", "Rural Water Agency", 2450.00, 72.0, 0.97, "high"],
            ["JJM-0202", "Filtration Plant", "Karnataka", "Chitradurga", "JJM Nodal Agency", 1850.00, 65.0, 0.93, "high"],
            ["JJM-0203", "FHTC Household Tap", "Tamil Nadu", "Vellore", "Panchayat Infra", 920.00, 88.0, 0.35, "low"],
            ["JJM-0204", "Overhead Reservoir", "Telangana", "Siddipet", "Water Board", 3100.00, 92.0, 0.21, "low"]
        ],
        cases: [
            { id: 'JJM-CASE-01', title: 'Kurnool Pipe Procurement Overrun Audit', priority: 'High', owner: 'Executive Engineer RWS', status: 'In review', note: 'Audit tender rate cards and supplier billings.' }
        ],
        hotspots: [
            { lat: 15.8281, lng: 78.0373, name: 'Kurnool Water Grid', risk: .97, works: 34 },
            { lat: 14.2230, lng: 76.3980, name: 'Chitradurga Filter Zone', risk: .93, works: 28 }
        ]
    };
}

function createRandomSchemeData(schemeName) {
    const cleanName = schemeName.trim();
    const prefix = cleanName.substring(0, 3).toUpperCase();
    return {
        id: prefix.toLowerCase(),
        name: cleanName,
        title: `National ${cleanName} Risk Intelligence`,
        subtitle: `${cleanName} Oversight &middot; Dynamically Generated Scheme`,
        footer: `JanDrishti Advanced Prototype &middot; ${cleanName} Automated Intelligence Audit`,
        kpis: [
            { label: 'Sanctioned Projects', val: (Math.floor(Math.random() * 25000) + 12000).toLocaleString(), sub: '↑ Dynamic Ingestion Active' },
            { label: 'Avg Risk Score', val: (Math.random() * 0.4 + 0.3).toFixed(2), sub: 'Isolation Forest Anomaly Check' },
            { label: 'Disbursed Outlay', val: `₹${(Math.floor(Math.random() * 15000) + 4000).toLocaleString()} Cr`, sub: 'Fund Clearance Tracker' },
            { label: 'Execution SLA', val: `${Math.floor(Math.random() * 15) + 80}%`, sub: 'Milestone Compliance Rate' }
        ],
        trendLabels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1 (New)', 'Q2 (New)'],
        trendData1: [50, 65, 80, 110, 140, 180],
        trendLabel1: 'Execution Outlay (Cr)',
        trendData2: [14, 18, 22, 19, 25, 21],
        trendLabel2: 'Anomaly Score %',
        signalLabels: ['Isolation Forest', 'Compliance Rules', 'Geo/Vendor Graph'],
        signalData: [45, 35, 20],
        data: {
            alerts: [
                { id: `${prefix}-ALT-01`, sev: "high", title: "Cost Revision Variance Spike", detail: "District Audit · High variance flagged by Isolation Forest", model: "Isolation Forest", confidence: 0.95, action: "Verify project sanctions against approved rate card." },
                { id: `${prefix}-ALT-02`, sev: "high", title: "Sanction SLA Delay", detail: "State Nodal · Sanction pending >45 days", model: "Compliance Rule", confidence: 0.91, action: "Escalate to District Collector." }
            ],
            works: [
                [`${prefix}-001`, `${cleanName} Infrastructure`, "Karnataka", "Belagavi", "Executing Agency", 1250.0, 65.0, 0.95, "high"],
                [`${prefix}-002`, `${cleanName} Work Component`, "Andhra Pradesh", "Visakhapatnam", "Nodal Agency", 840.0, 80.0, 0.35, "low"],
                [`${prefix}-003`, `${cleanName} Field Unit`, "Telangana", "Siddipet", "Block Authority", 620.0, 92.0, 0.22, "low"]
            ],
            cases: [
                { id: `${prefix}-CASE-01`, title: `${cleanName} Sanction Variance Audit`, priority: 'High', owner: 'State Nodal Officer', status: 'In review', note: 'Verify sudden cost revisions and labor logs.' }
            ],
            hotspots: [
                { lat: 15.8497, lng: 74.4977, name: 'Belagavi Cluster', risk: .95, works: 24 },
                { lat: 17.7215, lng: 83.2849, name: 'Visakhapatnam Cluster', risk: .35, works: 12 }
            ]
        }
    };
}

let DATA = MPLADS_DATA;
let currentSchemeKey = 'mplads';
let currentSection = 'dashboard', currentRole = 'ministry', selectedRecord = null, charts = {}, map, mapLayer;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

function toast(msg, type = 'info') {
    const container = $('#toast');
    if (!container) return;
    const t = document.createElement('div');
    t.className = 'alert ' + (type === 'error' ? 'alert-error' : type === 'success' ? 'alert-success' : 'alert-info') + ' shadow-2xl text-sm';
    t.innerHTML = '<span>' + msg + '</span>';
    container.appendChild(t);
    setTimeout(() => t.remove(), 3200);
}

function updateDashboardKPIs(schemeKey) {
    const schemeObj = REGISTERED_SCHEMES[schemeKey] || REGISTERED_SCHEMES['mplads'];
    const title = $('#dashboardTitle');
    const subtitle = $('#headerSubtitle');
    const footer = $('#footerText');

    document.title = `JanDrishti — ${schemeObj.name} Oversight | Risk Intelligence Platform`;
    if (title) title.textContent = schemeObj.title;
    if (subtitle) subtitle.innerHTML = schemeObj.subtitle;
    if (footer) footer.innerHTML = schemeObj.footer;

    const kpis = schemeObj.kpis;
    for (let i = 0; i < 4; i++) {
        if (kpis[i]) {
            if ($(`#kpiLabel${i}`)) $(`#kpiLabel${i}`).textContent = kpis[i].label;
            if ($(`#kpiVal${i}`)) $(`#kpiVal${i}`).textContent = kpis[i].val;
            if ($(`#kpiSub${i}`)) $(`#kpiSub${i}`).textContent = kpis[i].sub;
        }
    }
}

function showSection(id) {
    currentSection = id;
    $$('.app-section').forEach(s => s.classList.add('hidden-view'));
    $('#section-' + id)?.classList.remove('hidden-view');
    $$('.nav-item').forEach(b => b.classList.toggle('nav-active', b.dataset.section === id));
    
    if (id === 'map') initMap();
    if (id === 'network') setTimeout(() => renderNetwork(currentSchemeKey), 60);
}

function riskBadge(s) {
    return `<span class="badge ${s === 'high' ? 'badge-risk-high' : s === 'medium' ? 'badge-risk-med' : 'badge-risk-low'}">${s.toUpperCase()}</span>`;
}

function renderSignals() {
    const el = $('#topSignals');
    if (!el || !DATA || !DATA.alerts) return;
    el.innerHTML = DATA.alerts.slice(0, 4).map(a => `<button class="text-left p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-red-500/30" onclick="openAlert('${a.id}')"><div class="flex items-center justify-between gap-2">${riskBadge(a.sev)}<span class="text-[10px] text-slate-600">${a.id}</span></div><div class="font-semibold text-sm mt-2">${a.title}</div><div class="text-xs text-slate-500 mt-1">${a.detail}</div><div class="text-xs mt-3 text-slate-400"><span class="text-cyan-300">${a.model}</span> · ${(a.confidence * 100).toFixed(0)}% confidence</div></button>`).join('');
}

function renderAlerts() {
    const el = $('#alertGrid');
    if (!el || !DATA || !DATA.alerts) return;
    const q = ($('#alertSearch')?.value || '').toLowerCase(), f = $('#riskFilter')?.value || 'all';
    const rows = DATA.alerts.filter(a => (f === 'all' || a.sev === f) && (`${a.id} ${a.title} ${a.detail}`).toLowerCase().includes(q));
    el.innerHTML = rows.map(a => `<article class="card-panel rounded-2xl p-5 card-hover"><div class="flex justify-between items-start gap-3"><div>${riskBadge(a.sev)}<h3 class="font-bold mt-3">${a.title}</h3><p class="text-sm text-slate-400 mt-1">${a.detail}</p></div><span class="text-xs font-mono text-slate-500">${a.id}</span></div><div class="grid md:grid-cols-3 gap-3 mt-4 text-xs"><div class="rounded-xl bg-slate-900/60 p-3"><div class="text-slate-500">Model</div><div class="mt-1 text-slate-200">${a.model}</div></div><div class="rounded-xl bg-slate-900/60 p-3"><div class="text-slate-500">Confidence</div><div class="mt-1 text-slate-200">${(a.confidence * 100).toFixed(0)}%</div></div><div class="rounded-xl bg-slate-900/60 p-3"><div class="text-slate-500">Recommended action</div><div class="mt-1 text-slate-200">${a.action}</div></div></div><div class="flex justify-end mt-4"><button class="btn btn-xs bg-red-700 border-0" onclick="openAlert('${a.id}')">Inspect signal</button></div></article>`).join('');
}

function renderWorks() {
    const el = $('#worksBody');
    if (!el || !DATA || !DATA.works) return;
    const q = ($('#workSearch')?.value || '').toLowerCase(), f = $('#workRisk')?.value || 'all';
    const rows = DATA.works.filter(w => (f === 'all' || w[8] === f) && w.slice(0, 5).join(' ').toLowerCase().includes(q));
    el.innerHTML = rows.map(w => `<tr class="hover:bg-white/[.02]"><td>${w[0]}</td><td class="font-semibold">${w[1]}</td><td>${w[2]}</td><td>${w[3]}</td><td>${w[4]}</td><td>₹${w[5]}</td><td><div class="flex items-center gap-2"><div class="w-20 progressbar"><span style="width:${w[6]}%;background:${w[6] < 40 ? '#ef4444' : w[6] < 70 ? '#f59e0b' : '#22c55e'}"></span></div><span>${w[6]}%</span></div></td><td>${riskBadge(w[8])}</td><td><button class="btn btn-xs btn-outline border-slate-700" onclick="inspectWork('${w[0]}')">Inspect</button></td></tr>`).join('');
}

function openAlert(id) {
    if (!DATA || !DATA.alerts) return;
    const a = DATA.alerts.find(x => x.id === id);
    if (!a) return;
    selectedRecord = { type: 'alert', data: a };
    $('#inspectTitle').textContent = `${a.id} · ${a.title}`;
    $('#inspectBody').innerHTML = `<div class="grid md:grid-cols-3 gap-3"><div class="card-panel rounded-xl p-4"><div class="text-xs text-slate-500">Severity</div><div class="mt-2">${riskBadge(a.sev)}</div></div><div class="card-panel rounded-xl p-4"><div class="text-xs text-slate-500">Model</div><div class="mt-2 font-semibold">${a.model}</div></div><div class="card-panel rounded-xl p-4"><div class="text-xs text-slate-500">Confidence</div><div class="mt-2 font-semibold">${(a.confidence * 100).toFixed(0)}%</div></div></div><div class="mt-4 card-panel rounded-xl p-4"><div class="text-xs text-slate-500">Signal explanation</div><p class="mt-2 text-sm leading-6">${a.detail}. The prototype recommends human review rather than automatic enforcement.</p></div><div class="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm"><span class="text-slate-500">Suggested action:</span> ${a.action}</div>`;
    $('#createCaseFromModal').onclick = () => createCaseFrom(a.title + ' · ' + a.id);
    inspectModal.showModal();
}

function inspectWork(id) {
    if (!DATA || !DATA.works) return;
    const w = DATA.works.find(x => x[0] === id);
    if (!w) return;
    selectedRecord = { type: 'work', data: w };
    $('#inspectTitle').textContent = `${w[0]} · ${w[1]}`;
    $('#inspectBody').innerHTML = `<div class="grid grid-cols-2 md:grid-cols-4 gap-3">${[['State', w[2]], ['District', w[3]], ['Vendor/Agency', w[4]], ['Risk', w[7].toFixed(2)]].map(x => `<div class="card-panel rounded-xl p-4"><div class="text-xs text-slate-500">${x[0]}</div><div class="mt-2 font-semibold">${x[1]}</div></div>`).join('')}</div><div class="mt-4 card-panel rounded-xl p-4"><div class="flex justify-between text-sm"><span>Progress / Completion</span><b>${w[6]}%</b></div><div class="progressbar mt-2"><span style="width:${w[6]}%;background:${w[6] < 40 ? '#ef4444' : w[6] < 70 ? '#f59e0b' : '#22c55e'}"></span></div><p class="text-xs text-slate-500 mt-3">Illustrative work record. Use field evidence and source ledgers before taking action.</p></div>`;
    $('#createCaseFromModal').onclick = () => createCaseFrom(`Review ${w[0]} · ${w[1]}`);
    inspectModal.showModal();
}

function createCaseFrom(title) {
    $('#caseTitle').value = title;
    inspectModal.close();
    caseModal.showModal();
}

function renderCases() {
    const el = $('#caseGrid');
    if (!el || !DATA || !DATA.cases) return;
    el.innerHTML = DATA.cases.map((c, i) => `<article class="card-panel rounded-2xl p-5"><div class="flex items-start justify-between"><div>${riskBadge(c.priority.toLowerCase())}<h3 class="font-bold mt-3">${c.title}</h3></div><span class="text-[10px] font-mono text-slate-500">${c.id}</span></div><p class="text-xs text-slate-500 mt-2">${c.note}</p><div class="mt-4 pt-4 border-t border-slate-800 text-xs flex justify-between"><span>${c.owner}</span><span class="text-cyan-300">${c.status}</span></div><button class="btn btn-xs btn-outline border-slate-700 mt-3 w-full" onclick="toast('Case ${c.id} opened')">Open case</button></article>`).join('');
}

function initCharts(schemeKey = 'mplads') {
    const schemeObj = REGISTERED_SCHEMES[schemeKey] || REGISTERED_SCHEMES['mplads'];
    const common = {
        responsive: true,
        plugins: { legend: { labels: { color: '#a8b4c7' } } },
        scales: {
            x: { ticks: { color: '#718096' }, grid: { color: 'rgba(148,163,184,.07)' } },
            y: { ticks: { color: '#718096' }, grid: { color: 'rgba(148,163,184,.07)' } }
        }
    };

    if (charts.trend) charts.trend.destroy();
    
    charts.trend = new Chart($('#trendChart'), {
        type: 'line',
        data: {
            labels: schemeObj.trendLabels,
            datasets: [
                { label: schemeObj.trendLabel1, data: schemeObj.trendData1, borderColor: '#22d3ee', backgroundColor: 'rgba(34,211,238,.08)', fill: true, tension: .35 },
                { label: schemeObj.trendLabel2, data: schemeObj.trendData2, borderColor: '#ef4444', tension: .35 }
            ]
        },
        options: { ...common }
    });

    if (charts.signal) charts.signal.destroy();
    
    charts.signal = new Chart($('#signalChart'), {
        type: 'doughnut',
        data: {
            labels: schemeObj.signalLabels,
            datasets: [{ data: schemeObj.signalData, backgroundColor: ['#ef4444', '#f59e0b', '#22d3ee'], borderColor: '#0e1727' }]
        },
        options: { responsive: true, cutout: '66%', plugins: { legend: { position: 'bottom', labels: { color: '#a8b4c7', boxWidth: 12 } } } }
    });
}

function initMap() {
    if (map) {
        map.invalidateSize();
        if (mapLayer) mapLayer.clearLayers();
    } else {
        const mapEl = $('#map');
        if (!mapEl) return;
        map = L.map('map').setView([15.8497, 76.4977], 5);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '© OpenStreetMap © CARTO' }).addTo(map);
        mapLayer = L.layerGroup().addTo(map);
    }

    if (!mapLayer || !DATA || !DATA.hotspots) return;

    DATA.hotspots.forEach(h => {
        const color = h.risk > .9 ? '#ef4444' : h.risk > .8 ? '#f59e0b' : '#22c55e';
        L.circleMarker([h.lat, h.lng], { radius: 11 + h.risk * 8, color, fillColor: color, fillOpacity: .28, weight: 2 }).addTo(mapLayer).bindPopup(`<b>${h.name}</b><br>Risk: ${(h.risk * 100).toFixed(0)}%<br>Linked works: ${h.works}`);
    });

    if (DATA.hotspots.length > 0 && $('#fitMap')) {
        $('#fitMap').onclick = () => map.fitBounds(DATA.hotspots.map(h => [h.lat, h.lng]), { padding: [30, 30] });
    }
    if ($('#mapStats')) {
        $('#mapStats').innerHTML = DATA.hotspots.map(h => `<div class="card-panel rounded-xl p-3"><div class="text-xs text-slate-500">${h.name}</div><div class="font-bold text-red-300 mt-1">${(h.risk * 100).toFixed(0)}%</div><div class="text-[10px] text-slate-600">${h.works} linked works</div></div>`).join('');
    }
}

function renderNetwork(schemeKey = 'mplads') {
    const el = $('#network');
    if (!el) return;
    el.innerHTML = '';
    const w = el.clientWidth || 900, h = 560;
    const svg = d3.select(el).append('svg').attr('width', '100%').attr('height', h).attr('viewBox', `0 0 ${w} ${h}`);
    
    let nodes, links, color;
    if (schemeKey === 'mnrega' || schemeKey === 'pmay') {
        nodes = [
            { id: 'GP-Belagavi', group: 'GramPanchayat' },
            { id: 'GP-Siddipet', group: 'GramPanchayat' },
            { id: 'SEC-01', group: 'Secretary' },
            { id: 'SEC-02', group: 'Secretary' },
            { id: 'SEC-03', group: 'Secretary' },
            { id: 'SUP-01', group: 'Supplier' },
            { id: 'SUP-02', group: 'Supplier' },
            { id: 'SUP-03', group: 'Supplier' },
            { id: 'SUP-04', group: 'Supplier' }
        ];
        links = [
            ['GP-Belagavi', 'SEC-01'], ['GP-Belagavi', 'SEC-02'], ['GP-Siddipet', 'SEC-03'],
            ['SEC-01', 'SUP-01'], ['SEC-01', 'SUP-02'], ['SEC-02', 'SUP-03'], ['SEC-03', 'SUP-04'],
            ['SUP-01', 'SUP-03']
        ].map(([source, target], i) => ({ source, target, suspicious: i > 5 }));
        color = { GramPanchayat: '#ef4444', Secretary: '#60a5fa', Supplier: '#22c55e' };
    } else {
        nodes = [
            { id: 'MP-01', group: 'MP' }, { id: 'MP-02', group: 'MP' },
            { id: 'IA-01', group: 'IA' }, { id: 'IA-02', group: 'IA' }, { id: 'IA-03', group: 'IA' },
            { id: 'V-01', group: 'Vendor' }, { id: 'V-02', group: 'Vendor' }, { id: 'V-03', group: 'Vendor' },
            { id: 'V-04', group: 'Vendor' }, { id: 'V-05', group: 'Vendor' }, { id: 'V-06', group: 'Vendor' }
        ];
        links = [
            ['MP-01', 'IA-01'], ['MP-01', 'IA-02'], ['MP-02', 'IA-03'],
            ['IA-01', 'V-01'], ['IA-01', 'V-02'], ['IA-02', 'V-03'], ['IA-03', 'V-04'],
            ['IA-03', 'V-05'], ['IA-02', 'V-06'], ['V-01', 'V-03'], ['V-05', 'V-06']
        ].map(([source, target], i) => ({ source, target, suspicious: i > 8 }));
        color = { MP: '#ef4444', IA: '#60a5fa', Vendor: '#22c55e' };
    }

    const sim = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(105))
        .force('charge', d3.forceManyBody().strength(-360))
        .force('center', d3.forceCenter(w / 2, h / 2))
        .force('collision', d3.forceCollide(28));

    const link = svg.append('g').selectAll('line').data(links).join('line')
        .attr('stroke', d => d.suspicious ? '#ef4444' : '#475569')
        .attr('stroke-width', d => d.suspicious ? 3 : 1.5)
        .attr('stroke-dasharray', d => d.suspicious ? '5,4' : null);

    const node = svg.append('g').selectAll('g').data(nodes).join('g')
        .style('cursor', 'pointer')
        .on('click', (e, d) => {
            e.stopPropagation();
            $('#entityPanel').innerHTML = `<div class="chip inline-block">${d.group}</div><div class="text-lg font-bold mt-2">${d.id}</div><div class="text-xs text-slate-500 mt-1">Connected to <b class="text-slate-300">${links.filter(l => l.source.id === d.id || l.target.id === d.id).length}</b> relationships in this network graph.</div>`;
        });

    node.append('circle').attr('r', 11).attr('fill', d => color[d.group] || '#60a5fa').attr('stroke', '#e2e8f0').attr('stroke-opacity', .18).attr('stroke-width', 2);
    node.append('text').text(d => d.id).attr('dx', 15).attr('dy', 4).attr('class', 'node-label');
    
    sim.on('tick', () => {
        link.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    if ($('#networkAnimate')) $('#networkAnimate').onclick = () => { sim.alpha(1).restart(); toast('Network simulation restarted'); };
    if ($('#networkReset')) $('#networkReset').onclick = () => { sim.alpha(1).restart(); svg.selectAll('g').attr('transform', d => d && d.x ? `translate(${d.x},${d.y})` : null); };
}

async function loadExternalMNREGAData() {
    try {
        const res = await fetch('mnrega_data.json');
        if (res.ok) {
            const externalData = await res.json();
            if (externalData && externalData.works && externalData.works.length > 0) {
                Object.assign(MNREGA_DATA, externalData);
                REGISTERED_SCHEMES['mnrega'].data = MNREGA_DATA;
                const currentScheme = $('#schemeSelect') ? $('#schemeSelect').value : 'mplads';
                if (currentScheme === 'mnrega') {
                    switchScheme('mnrega');
                }
            }
        }
    } catch (e) {
        // Fallback if fetch is unavailable
    }
}

function switchScheme(schemeKey) {
    if (schemeKey === 'custom') {
        const inputName = prompt("Enter custom scheme name (e.g., PMGSY Roads, PM-KISAN, Ayushman Bharat):", "PM-KISAN Scheme");
        if (inputName && inputName.trim() !== "") {
            const newObj = createRandomSchemeData(inputName.trim());
            REGISTERED_SCHEMES[newObj.id] = newObj;
            
            const selectEl = $('#schemeSelect');
            if (selectEl) {
                const opt = document.createElement('option');
                opt.value = newObj.id;
                opt.textContent = `${newObj.name} (Custom)`;
                opt.selected = true;
                selectEl.appendChild(opt);
            }
            schemeKey = newObj.id;
        } else {
            $('#schemeSelect').value = currentSchemeKey;
            return;
        }
    }

    currentSchemeKey = REGISTERED_SCHEMES[schemeKey] ? schemeKey : 'mplads';
    const schemeObj = REGISTERED_SCHEMES[currentSchemeKey];
    DATA = schemeObj.data;

    updateDashboardKPIs(currentSchemeKey);
    renderSignals();
    renderAlerts();
    renderWorks();
    renderCases();
    initCharts(currentSchemeKey);
    if (currentSection === 'network') renderNetwork(currentSchemeKey);
    if (currentSection === 'map') initMap();
}

window.onload = () => {
    const schemeDropdown = document.getElementById('schemeSelect');
    const initialScheme = schemeDropdown ? schemeDropdown.value : 'mplads';

    if (schemeDropdown) {
        schemeDropdown.addEventListener('change', function(e) {
            const selectedScheme = e.target.value;
            switchScheme(selectedScheme);
            const schemeName = REGISTERED_SCHEMES[selectedScheme] ? REGISTERED_SCHEMES[selectedScheme].name : 'Selected Scheme';
            toast('Switched to ' + schemeName + ' Database');
        });
    }

    switchScheme(initialScheme);
    showSection('dashboard');
    loadExternalMNREGAData();

    $$('.nav-item').forEach(b => b.onclick = () => showSection(b.dataset.section)); 
    $$('[data-go]').forEach(b => b.onclick = () => showSection(b.dataset.go));
    if ($('#mobileMenu')) $('#mobileMenu').onclick = () => $('#sidebar').classList.toggle('hidden');
    if ($('#alertsBtn')) $('#alertsBtn').onclick = () => showSection('alerts');
    if ($('#themeBtn')) $('#themeBtn').onclick = () => { document.documentElement.classList.toggle('contrast'); toast('Accent mode toggled'); };
    if ($('#alertSearch')) $('#alertSearch').oninput = renderAlerts; 
    if ($('#riskFilter')) $('#riskFilter').onchange = renderAlerts; 
    if ($('#workSearch')) $('#workSearch').oninput = renderWorks; 
    if ($('#workRisk')) $('#workRisk').onchange = renderWorks;
};