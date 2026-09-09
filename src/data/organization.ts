export interface OrgNode {
  id: string
  title: string
  detail: string
}

export const orgLeads: OrgNode[] = [
  { id: 'naresh', title: 'Naresh Sirikonda', detail: 'Operations Lead' },
  { id: 'suresh', title: 'Suresh Kelleti', detail: 'Sales & Projects' },
]

export const orgBranches: OrgNode[] = [
  { id: 'sales', title: 'Sales', detail: '1 Employee' },
  { id: 'design', title: 'Project Design', detail: '1 Employee' },
  { id: 'equipment', title: 'Equipment / Service / Project', detail: '2 Project Engineers' },
  { id: 'technical', title: 'Technical Team', detail: 'Technicians + 5 Trainee Technicians' },
  { id: 'service', title: 'Service', detail: '4 Trainee Technicians' },
  { id: 'safety', title: 'Safety', detail: '1 Safety Engineer' },
]
