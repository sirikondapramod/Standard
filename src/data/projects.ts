export interface ProjectItem {
  id: string
  code: string
  client: string
  scope: string
  status: string
}

export const projects: ProjectItem[] = [
  {
    id: 'tcs',
    code: 'Project 01',
    client: 'TCS — Raja Pushpa',
    scope: '17 TR × 4 Units',
    status: 'Commissioning Activity Ongoing',
  },
  {
    id: 'amara',
    code: 'Project 02',
    client: 'Amara Raja',
    scope: '120 HP VRF Project',
    status: 'Installation Ongoing',
  },
  {
    id: 'kavri',
    code: 'Project 03',
    client: 'Kavri Seeds',
    scope: '42 kW Cooling Systems',
    status: 'Installation Ongoing',
  },
  {
    id: 'drl',
    code: 'Project 04',
    client: "Dr. Reddy's Laboratories",
    scope: '2 In-Row Machines',
    status: 'Installation Ongoing',
  },
]
