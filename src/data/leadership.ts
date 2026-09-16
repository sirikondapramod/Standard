export interface Leader {
  id: string
  partnerLabel: string
  name: string
  initials: string
  role: string
  description: string
  experience: string[]
  totalExperience: string
  expertise?: string[]
}

export const leaders: Leader[] = [
  {
    id: 'naresh',
    partnerLabel: 'Partner 01',
    name: 'Naresh Sirikonda',
    initials: 'NS',
    role: 'Operations Lead — Sales, Service & Projects',
    description:
      'Naresh Sirikonda has extensive experience in the HVAC industry and leads Sales, Service and Projects operations from the Hyderabad registered office.',
    experience: [
      'Reliance ResQ — 4 Years',
      'Acref Solution Pvt. Ltd. — 7 Years',
      'Saudi Arabia — 3 Years',
    ],
    totalExperience: 'Extensive HVAC Industry Experience',
    expertise: [
      'Sales',
      'Service',
      'Projects',
      'HVAC Operations',
    ],
  },
  {
    id: 'suresh',
    partnerLabel: 'Partner 02',
    name: 'Suresh Kelleti',
    initials: 'SK',
    role: 'Project Design, Sales & Projects',
    description:
      'Suresh Kelleti has worked with leading companies in India and Gulf countries and has extensive experience in HVAC and Electro-Mechanical projects.',
    experience: [
      '16+ Years across India and Gulf markets',
      'HVAC Project Execution',
      'Electro-Mechanical Projects',
    ],
    totalExperience: '16+ Years',
    expertise: [
      'HVAC Projects',
      'Electro-Mechanical Projects',
      'Project Design',
      'Sales & Projects',
      'India & Gulf Markets',
    ],
  },
]