export type ServiceCategoryItem = {
  slug: string
  label: string
}

export type ServiceCategory = {
  key: 'insurance' | 'finance' | 'rto'
  title: string
  items: ServiceCategoryItem[]
}

export type ServiceDetail = {
  slug: string
  title: string
  desc: string
  hero: string
  features: string[]
  details: string[]
  note?: string
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: 'insurance',
    title: 'Insurance',
    items: [
      { slug: 'car-insurance', label: 'Car Insurance' },
      { slug: 'bike-insurance', label: 'Bike Insurance' },
      { slug: 'health-insurance', label: 'Health Insurance' },
      { slug: 'life-insurance', label: 'Life Insurance' },
      { slug: 'commercial-vehicle-insurance', label: 'Commercial Vehicle Insurance' },
      { slug: 'personal-accident-insurance', label: 'Personal Accident Insurance' },
      { slug: 'travel-insurance', label: 'Travel Insurance' },
    ],
  },
  {
    key: 'finance',
    title: 'Finance',
    items: [
      { slug: 'vehicle-finance', label: 'Vehicle Finance' },
      { slug: 'vehicle', label: 'Vehicle' },
      { slug: 'home-loan', label: 'Home Loan' },
      { slug: 'business-loan', label: 'Business Loan' },
    ],
  },
  {
    key: 'rto',
    title: 'RTO Services',
    items: [
      { slug: 'driving-licence', label: 'Driving Licence' },
      { slug: 'learning-licence', label: 'Learning Licence' },
      { slug: 'rc-transfer', label: 'RC Transfer' },
      { slug: 'hypothecation', label: 'Hypothecation' },
      { slug: 'noc', label: 'NOC' },
      { slug: 'fitness', label: 'Fitness' },
      { slug: 'permit', label: 'Permit' },
      { slug: 'tax', label: 'Tax' },
    ],
  },
]

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'car-insurance': {
    slug: 'car-insurance',
    title: 'Car Insurance',
    desc: 'Comprehensive car insurance solutions including third-party, own-damage and add-ons tailored for your vehicle.',
    hero: 'Protect your car with flexible coverage, fast claims, and personalised support across every journey.',
    features: [
      'Third-party and comprehensive coverage options',
      'Zero depreciation, roadside assistance, and engine protection add-ons',
      'Easy renewals, transfer support, and no-hassle claim guidance',
    ],
    details: [
      'Choose the right policy for sedans, SUVs, and luxury cars with transparent premium options.',
      'Get help selecting add-ons and understanding policy terms before you buy.',
      'Renew online or through our team for uninterrupted protection and claim readiness.',
    ],
    note: 'Our car insurance solutions are built for safety, convenience, and premium service at every step.',
  },
  'bike-insurance': {
    slug: 'bike-insurance',
    title: 'Bike Insurance',
    desc: 'Affordable two-wheeler insurance plans with quick approvals, roadside support, and claim assistance.',
    hero: 'Secure your bike with tailored policies designed for commuters, riders, and weekend explorers.',
    features: [
      'Comprehensive and third-party cover for scooters, bikes, and mopeds',
      'Cashless garage and fast claim support across the network',
      'Flexible add-ons like zero depreciation and personal accident cover',
    ],
    details: [
      'We help you compare the best bike insurance options from top insurers.',
      'Get fast renewal and transfer support when you upgrade or switch vehicles.',
      'Enjoy premium care with dedicated guidance through every claim.',
    ],
  },
  'health-insurance': {
    slug: 'health-insurance',
    title: 'Health Insurance',
    desc: 'Family floater and individual health plans with cashless network hospitals and long-term care options.',
    hero: 'Protect your family with health policies that prioritise care, cashless service, and wellness support.',
    features: [
      'Wide hospital network with cashless admission',
      'Cover for inpatient treatment, surgery, maternity, and critical illness',
      'Renewal benefits, no-claim bonuses, and wellness support programs',
    ],
    details: [
      'Compare plans for individuals, families, seniors, and corporate groups.',
      'Understand waiting periods, sub-limits, and co-pay so you choose the right cover.',
      'Benefit from health advice and claim support throughout the policy year.',
    ],
  },
  'life-insurance': {
    slug: 'life-insurance',
    title: 'Life Insurance',
    desc: 'Term, endowment and investment-linked life policies built to protect your family’s future.',
    hero: 'Create financial security with life insurance plans designed for protection, wealth creation, and peace of mind.',
    features: [
      'Term cover with high protection at affordable premiums',
      'Savings and investment-linked plans for long-term goals',
      'Flexible riders for critical illness, disability, and income protection',
    ],
    details: [
      'We help you choose between term, ULIP, endowment, and retirement plans.',
      'Get support that explains policy benefits, exclusions, and legacy planning.',
      'Manage renewals, premium payments, and policy service through one trusted partner.',
    ],
  },
  'personal-accident-insurance': {
    slug: 'personal-accident-insurance',
    title: 'Personal Accident Insurance',
    desc: 'Financial protection against accidental injury, disability, and death with customizable cover levels.',
    hero: 'Stay prepared with accident coverage that preserves your income and protects your family’s well-being.',
    features: [
      'Accidental death and permanent disability cover',
      'Hospitalisation and medical expense reimbursement',
      'Daily cash benefit and accidental medical support',
    ],
    details: [
      'Choose the right sum insured and benefit structure for your lifestyle.',
      'Add coverage for travel accidents, workplace incidents, and family members.',
      'Access quick support to file claims and receive payouts without delay.',
    ],
  },
  'commercial-vehicle-insurance': {
    slug: 'commercial-vehicle-insurance',
    title: 'Commercial Vehicle Insurance',
    desc: 'Coverage for commercial fleets, goods carriers and public transport vehicles with liability and damage protection.',
    hero: 'Keep your business moving with commercial vehicle insurance built for fleet owners and professional operators.',
    features: [
      'Fleet-level policies for trucks, tempos, taxis, and delivery vehicles',
      'Goods-in-transit cover, third-party liability, and own-damage protection',
      'Fleet management support and hassle-free claim handling',
    ],
    details: [
      'Get tailored packages for cargo, passenger, and service vehicles.',
      'Manage renewals and policy documentation for multiple vehicles at once.',
      'Keep drivers and cargo protected with strong support through every journey.',
    ],
  },
  'vehicle-finance': {
    slug: 'vehicle-finance',
    title: 'Vehicle Finance',
    desc: 'Competitive finance packages for new and used vehicles with flexible terms and transparent approvals.',
    hero: 'Drive home faster with vehicle finance solutions designed to match your budget and repayment goals.',
    features: [
      'Low-interest auto loans for cars, bikes, and commercial vehicles',
      'Flexible tenures, down payment options, and easy documentation',
      'Fast application support and pre-approval guidance',
    ],
    details: [
      'Compare lender offers and choose a plan that fits your monthly cash flow.',
      'Understand loan structure, EMI schedule, and foreclosure options.',
      'Receive ongoing support for disbursal, documentation, and loan closure.',
    ],
  },
  'vehicle': {
    slug: 'vehicle',
    title: 'Vehicle Finance',
    desc: 'Premium vehicle finance support for new and used auto purchases with transparent terms and fast approvals.',
    hero: 'Finance your next vehicle with tailored EMI plans, trusted lenders, and premium guidance.',
    features: [
      'Personalised loan options for cars, bikes, and commercial vehicles',
      'Competitive rates, flexible repayment schedules, and minimal paperwork',
      'Dedicated support from application through disbursal',
    ],
    details: [
      'Receive expert help choosing between lenders and financing structures.',
      'Access support for pre-approvals, documentation, and after-sale service.',
      'Manage your loan with confidence using clear terms and transparent reporting.',
    ],
  },
  'travel-insurance': {
    slug: 'travel-insurance',
    title: 'Travel Insurance',
    desc: 'Short-term plans for domestic and international travel coverage.',
    hero: 'Travel with confidence knowing medical, baggage, and trip delay protection are covered.',
    features: [
      'Emergency medical cover for domestic and international trips',
      'Baggage loss, trip cancellation, and delay protection',
      'Flexible duration policies for solo and family travel',
    ],
    details: [
      'Choose a plan that matches your destination and travel needs.',
      'Access fast assistance while you are away from home.',
      'Enjoy simple claims support for medical and travel-related incidents.',
    ],
  },
  'home-loan': {
    slug: 'home-loan',
    title: 'Home Loan',
    desc: 'Assistance with home financing options and documentation support.',
    hero: 'Unlock home ownership with trusted loan advice and competitive financing.',
    features: [
      'Low-interest home loan options for purchase and construction',
      'Guidance on eligibility, documents, and lender selection',
      'Support through approval and disbursement stages',
    ],
    details: [
      'Compare home loan offers to find the best rate and tenure.',
      'Get help with documentation, income evaluation, and application preparation.',
      'Stay informed through the full loan process until disbursal.',
    ],
  },
  'business-loan': {
    slug: 'business-loan',
    title: 'Business Loan',
    desc: 'Custom business loan solutions for working capital and expansion.',
    hero: 'Fund your business growth with tailored loan support for capital, expansion, and cash flow.',
    features: [
      'Working capital, term loan, and equipment financing',
      'Flexible repayment options for startups and established businesses',
      'Application support and lender negotiation help',
    ],
    details: [
      'Choose the right loan type for your business requirement.',
      'Understand collateral, tenure, and interest structure clearly.',
      'Receive expert guidance through approval and disbursal.',
    ],
  },
  'driving-licence': {
    slug: 'driving-licence',
    title: 'Driving Licence',
    desc: 'Assistance with application, testing and renewals.',
    hero: 'Get licensed quickly with expert guidance for applications, tests, and renewals.',
    features: [
      'Full support through application and document submission',
      'Help preparing for tests and renewals',
      'Tracking of approvals and certificate delivery',
    ],
    details: [
      'Navigate the licence process with clarity and fast support.',
      'Keep all documents in order and stay ready for appointments.',
      'Renew and replace licences seamlessly through our service.',
    ],
  },
  'learning-licence': {
    slug: 'learning-licence',
    title: 'Learning Licence',
    desc: 'Apply for or renew your learner licence with expert guidance.',
    hero: 'Start driving with confidence by getting your learner licence fast and accurately.',
    features: [
      'Application support and document review',
      'Exam preparation and interview guidance',
      'Renewal assistance when your licence is expiring',
    ],
    details: [
      'Understand the licence process and eligibility requirements.',
      'Keep form submissions and supporting documents organised.',
      'Receive status updates until your licence is issued.',
    ],
  },
  'rc-transfer': {
    slug: 'rc-transfer',
    title: 'RC Transfer',
    desc: 'Smooth transfer of vehicle registration between owners.',
    hero: 'Transfer your vehicle registration quickly with reliable documentation and support.',
    features: [
      'Paperwork assistance for fresh and used vehicle transfers',
      'Inspection coordination and document verification',
      'Follow-up until transfer is complete',
    ],
    details: [
      'Move ownership smoothly with minimal paperwork stress.',
      'Ensure all transfer requirements are met for your state.',
      'Let our team track approvals and delivery for you.',
    ],
  },
  'hypothecation': {
    slug: 'hypothecation',
    title: 'Hypothecation',
    desc: 'Manage hypothecation and loan closure documentation.',
    hero: 'Resolve loan liens and hypothecation records with structured guidance and clear communication.',
    features: [
      'Loan closure support and hypothecation removal help',
      'Document preparation for lien release',
      'Coordination with banks and RTO offices',
    ],
    details: [
      'Get clarity on loan closure requirements and timelines.',
      'Avoid common delays with proper paperwork and follow-up.',
      'Receive support until your hypothecation records are cleared.',
    ],
  },
  'noc': {
    slug: 'noc',
    title: 'NOC',
    desc: 'Obtain No Objection Certificates (NOC) for vehicle transfers and loans.',
    hero: 'Secure your NOC with fast, compliant processing for transfers, sales, and vehicle loans.',
    features: [
      'NOC assistance for loans, transfers, and regional moves',
      'Document verification and submission support',
      'Follow-up until NOC is issued',
    ],
    details: [
      'Understand NOC requirements for your lender and RTO.',
      'Receive full support for paperwork and application submission.',
      'Track issuance and get updates through completion.',
    ],
  },
  'fitness': {
    slug: 'fitness',
    title: 'Fitness',
    desc: 'Vehicle fitness certificate processing for commercial vehicles.',
    hero: 'Maintain compliance with commercial vehicle fitness certification and renewal support.',
    features: [
      'Fitness certificate applications for commercial vehicles',
      'Testing coordination and document submission',
      'Renewal reminders and follow-up support',
    ],
    details: [
      'Prepare your vehicle for fitness evaluation with expert guidance.',
      'Keep certificates valid through timely renewals.',
      'Stay compliant with regulatory requirements effortlessly.',
    ],
  },
  'permit': {
    slug: 'permit',
    title: 'Permit',
    desc: 'Apply for commercial permits and route permits.',
    hero: 'Get commercial permits in place with efficient application support and local compliance expertise.',
    features: [
      'Route and goods permits for commercial vehicles',
      'Documentation and filing support',
      'Renewal and modification assistance',
    ],
    details: [
      'Choose the right permit based on your vehicle and cargo.',
      'Prepare documents and submit applications accurately.',
      'Track approvals and renewals with consistent updates.',
    ],
  },
  'tax': {
    slug: 'tax',
    title: 'Tax',
    desc: 'Assistance with vehicle tax calculations and payments.',
    hero: 'Manage vehicle tax obligations easily with expert support and accurate calculations.',
    features: [
      'Tax calculation and payment support for all vehicle classes',
      'Renewal assistance and reminder services',
      'Clarification on penalties, exemptions, and schedules',
    ],
    details: [
      'Understand your tax liability for personal and commercial vehicles.',
      'Get help filing payments and maintaining records.',
      'Stay compliant with state regulations and deadlines.',
    ],
  },
}
