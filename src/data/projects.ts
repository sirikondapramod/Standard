export interface ProjectItem {
  id: string
  code: string
  client: string
  scope: string
  status: string
}

export const projects: ProjectItem[] = [
  {
    id: 'amaraja',
    code: 'Project 01',
    client: 'AMARAJA',
    scope: '120 HP VRF — Toshiba',
    status: 'Ongoing',
  },
  {
    id: 'ankura',
    code: 'Project 02',
    client: 'ANKURA HOSPITAL',
    scope: '40 HP VRF — Toshiba',
    status: 'Ongoing',
  },
  {
    id: 'cyient',
    code: 'Project 03',
    client: 'CYIENT',
    scope: '8 HP VRF — Toshiba',
    status: 'Ongoing',
  },
  {
    id: 'kakumanu',
    code: 'Project 04',
    client: 'KAKUMANU SEEDS',
    scope: 'Cold Storage Projects',
    status: 'Ongoing',
  },
  {
    id: 'genpact',
    code: 'Project 05',
    client: 'GENPACT',
    scope: 'Annual Maintenance Contract',
    status: 'Ongoing',
  },
  {
    id: 'cyient-amc',
    code: 'Project 06',
    client: 'CYIENT',
    scope: 'Annual Maintenance Contract',
    status: 'Ongoing',
  },
  {
    id: 'urban-rise',
    code: 'Project 07',
    client: 'URBAN RISE',
    scope: 'Annual Maintenance Contract',
    status: 'Ongoing',
  },
  {
    id: 'garuda-wega',
    code: 'Project 08',
    client: 'GARUDA WEGA',
    scope: 'Annual Maintenance Contract',
    status: 'Ongoing',
  },
  {
    id: 'adithya-precitech',
    code: 'Project 09',
    client: 'ADITHYA PRECITECH',
    scope: '320 HP VRF — Carrier',
    status: 'Ongoing',
  },
]