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
    id: 'naresh',
    title: 'Naresh Sirikonda',
    role: 'Sales, Service & Projects',
    lines: [
      'Plot No. 11, H.No. 1-29-39',
      'Maha Mataji Nagar, Bhavana Colony',
      'New Bowenpally',
      'Hyderabad – 500011',
    ],
    mapsQuery:
      'Plot No. 11, H.No. 1-29-39, Maha Mataji Nagar, Bhavana Colony, New Bowenpally, Hyderabad 500011',
    showCall: false,
    showEmail: false,
  },
  {
    id: 'suresh',
    title: 'Suresh Kelleti',
    role: 'Sales & Projects',
    lines: [
      'H.No. 2-3-734 A 5 12 13',
      'Shankar Nagar, Amberpet',
      'Hyderabad, Telangana – 500013',
    ],
    email: 'coolingstandard@gmail.com',
    phone: '+91 9849198700',
    mapsQuery:
      'H.No. 2-3-734 A 5 12 13, Shankar Nagar, Amberpet, Hyderabad, Telangana 500013',
    showCall: true,
    showEmail: true,
  },
  {
    id: 'office',
    title: 'Standard Cooling & Air Conditioning',
    role: 'Hyderabad Registered Office',
    lines: [
      '2-3-734 A 5 12 13',
      'Shankar Nagar, Amberpet',
      'Hyderabad, Telangana – 500013',
    ],
    email: 'coolingstandard@gmail.com',
    phone: '+91 9849198700',
    mapsQuery:
      '2-3-734 A 5 12 13, Shankar Nagar, Amberpet, Hyderabad, Telangana 500013',
    showCall: true,
    showEmail: true,
  },
]
