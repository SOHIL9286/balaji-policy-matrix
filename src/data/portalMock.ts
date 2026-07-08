export const policies = [
  {
    id: 'P-10001',
    type: 'Car Insurance',
    company: 'ICICI Lombard',
    vehicle: 'TN01AB1234',
    customer: 'Ramesh K',
    issueDate: '2023-07-01',
    expiryDate: '2024-07-01',
    premium: 12500,
    status: 'Active',
  },
  {
    id: 'P-10002',
    type: 'Two-wheeler Insurance',
    company: 'HDFC ERGO',
    vehicle: 'TN02XY9876',
    customer: 'Meena P',
    issueDate: '2022-10-10',
    expiryDate: '2023-10-10',
    premium: 3200,
    status: 'Expired',
  },
]

export const claims = [
  { id: 'C-9001', policyId: 'P-10001', company: 'ICICI Lombard', status: 'Survey Scheduled' },
]

export const documents = [
  { id: 'D-1', policyId: 'P-10001', type: 'Policy PDF', name: 'policy-P-10001.pdf' },
]
