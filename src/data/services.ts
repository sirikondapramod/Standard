export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: ServiceIconName
}

export type ServiceIconName =
  | 'clipboard'
  | 'refresh'
  | 'layers'
  | 'wrench'
  | 'search'
  | 'settings'
  | 'pipe'
  | 'droplet'
  | 'file'
  | 'siren'
  | 'snowflake'
  | 'leaf'

export const services: ServiceItem[] = [
  {
    id: 'amc',
    title: 'AMC & HVAC Maintenance',
    description:
      'Annual maintenance, preventive care and service support for air conditioning and refrigeration systems.',
    icon: 'clipboard',
  },
  {
    id: 'retrofit',
    title: 'HVAC Retrofit & Energy Solutions',
    description:
      'Retrofit and redesign of existing HVAC systems using energy-efficient products to improve system efficiency.',
    icon: 'refresh',
  },
  {
    id: 'mep',
    title: 'MEP Works',
    description:
      'MEP works executed according to customer and consultant specifications, covering multiple equipment and system requirements.',
    icon: 'layers',
  },
  {
    id: 'install',
    title: 'HVAC Installation & Commissioning',
    description:
      'Ducting, piping, installation, D.O. & charge and BOQ-based contracting with or without material supply.',
    icon: 'wrench',
  },
  {
    id: 'troubleshoot',
    title: 'Troubleshooting & Breakdown Service',
    description:
      'Troubleshooting and corrective maintenance for HVAC, refrigeration, controls, fans, pumps and related equipment.',
    icon: 'search',
  },
  {
    id: 'overhaul',
    title: 'Equipment Overhauling',
    description:
      'Overhauling and maintenance support for pumps, chillers, HVAC machinery and other mechanical equipment.',
    icon: 'settings',
  },
  {
    id: 'ducting',
    title: 'Ducting & Piping',
    description:
      'Ducting and piping works for HVAC installations, including fresh-air, exhaust and air distribution systems.',
    icon: 'pipe',
  },
  {
    id: 'do-charge',
    title: 'D.O. & Charge Services',
    description:
      'D.O. & charge services for air conditioning and refrigeration machinery as part of installation and maintenance.',
    icon: 'droplet',
  },
  {
    id: 'boq',
    title: 'BOQ & Project Contracting',
    description:
      'Project execution and BOQ-based contracting with or without material supply according to customer requirements.',
    icon: 'file',
  },
  {
    id: 'emergency',
    title: '24-Hour Emergency Service',
    description:
      'Emergency HVAC and refrigeration support for breakdowns and critical service requirements.',
    icon: 'siren',
  },
  {
    id: 'refrigeration',
    title: 'Refrigeration Services',
    description:
      'Service support for commercial refrigeration, cold storage and equipment including coolers, freezers and ice makers.',
    icon: 'snowflake',
  },
  {
    id: 'energy',
    title: 'Energy Saving Solutions',
    description:
      'Energy-saving solutions through retrofit, efficient equipment selection and redesign of existing systems.',
    icon: 'leaf',
  },
]