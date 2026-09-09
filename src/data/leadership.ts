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
    role: 'Sales, Service & Projects',
    description:
      'Naresh Sirikonda brings extensive experience in the HVAC industry and leads the Sales, Service and Projects teams.',
    experience: [
      'Reliance ResQ — 4 Years',
      'Acref Solution Pvt. Ltd. — 7 Years',
      'Saudi Arabia — 3 Years',
    ],
    totalExperience: '19 Years',
  },
  {
    id: 'suresh',
    partnerLabel: 'Partner 02',
    name: 'Suresh Kelleti',
    initials: 'SK',
    role: 'Sales & Projects',
    description:
      'Suresh Kelleti has more than 16 years of experience across leading companies in India and Gulf countries, covering After Market and Projects.',
    experience: ['16+ Years across India and Gulf markets'],
    totalExperience: '16+ Years',
    expertise: [
      'HVAC Projects',
      'Electro-Mechanical Projects',
      'After Market',
      'India & Gulf Markets',
    ],
  },
]
