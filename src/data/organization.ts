export interface OrgNode {
  id: string
  title: string
  detail: string
}

export const orgLeads: OrgNode[] = [
  {
    id: 'naresh',
    title: 'Naresh Sirikonda',
    detail: 'Operations Lead — Hyderabad Registered Office',
  },
  {
    id: 'suresh',
    title: 'Suresh Kelleti',
    detail: 'Project Design / Sales & Projects',
  },
]

export const orgBranches: OrgNode[] = [
  {
    id: 'design',
    title: 'Project Design',
    detail: '2 Employees',
  },
  {
    id: 'equipment',
    title: 'Equipment Service / Project Sales',
    detail: '2 Employees',
  },
  {
    id: 'project-engineers',
    title: 'Project Engineers',
    detail: '2',
  },
  {
    id: 'technicians',
    title: 'Technicians',
    detail: '10',
  },
  {
    id: 'trainee-technicians',
    title: 'Trainee Technicians',
    detail: '8',
  },
]