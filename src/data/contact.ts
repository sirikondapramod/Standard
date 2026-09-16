export interface ContactCard {
  id: string
  title: string
  role?: string
  lines: string[]
  email?: string
  phone?: string
  mapsQuery: string
  showCall: boolean
  showEmail: boolean
}

export const contacts: ContactCard[] = [
  {
    id: 'office',
    title: 'Standard Cooling & Air Conditioning',
    role: 'Hyderabad Registered Office',
    lines: [
      '18/3 PRAKASH NAGAR',
      'BEGUMPET',
      'Hyderabad, Telangana – 500016',
    ],
    email: 'coolingstandard@gmail.com',
    phone: '+91 9849198700',
    mapsQuery:
      '18/3 PRAKASH NAGAR, BEGUMPET, Hyderabad, Telangana 500016',
    showCall: true,
    showEmail: true,
  },
]