export interface ContactCard {
  id: string
  title: string
  role?: string
  lines: string[]
  email?: string
  phone?: string
  phoneHref?: string
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
    mapsQuery:
      'https://maps.app.goo.gl/8MnyrnGWo5opC4NLA',
    showCall: false,
    showEmail: true,
  },
  {
    id: 'naresh',
    title: 'Naresh Sirikonda',
    role: 'Operations Lead',
    lines: [],
    phone: '+91 9849198700',
    phoneHref: 'tel:+919849198700',
    mapsQuery:
      'https://maps.app.goo.gl/8MnyrnGWo5opC4NLA',
    showCall: true,
    showEmail: false,
  },
  {
    id: 'suresh',
    title: 'Suresh Kelleti',
    role: 'Project Design / Sales & Projects',
    lines: [],
    phone: '+91 9177269771',
    phoneHref: 'tel:+919177269771',
    mapsQuery:
      'https://maps.app.goo.gl/8MnyrnGWo5opC4NLA',
    showCall: true,
    showEmail: false,
  },
]