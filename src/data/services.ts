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
    title: 'Annual Maintenance Contracts',
    description: 'Planned preventive care that keeps HVAC systems reliable through the year.',
    icon: 'clipboard',
  },
  {
    id: 'retrofit',
    title: 'HVAC Retrofit Solutions',
    description: 'Upgrade existing plant to improve efficiency, reliability and equipment life.',
    icon: 'refresh',
  },
  {
    id: 'mep',
    title: 'MEP Works',
    description: 'Mechanical, electrical and plumbing execution aligned to site requirements.',
    icon: 'layers',
  },
  {
    id: 'install',
    title: 'Equipment Installation',
    description: 'Professional installation of HVAC and related cooling equipment.',
    icon: 'wrench',
  },
  {
    id: 'troubleshoot',
    title: 'Troubleshooting',
    description: 'Diagnostic support to identify faults and restore system performance.',
    icon: 'search',
  },
  {
    id: 'overhaul',
    title: 'Overhauling & Maintenance',
    description: 'Component-level overhaul and maintenance for extended equipment life.',
    icon: 'settings',
  },
  {
    id: 'ducting',
    title: 'Ducting & Piping',
    description: 'Fabrication and installation support for air and chilled-water distribution.',
    icon: 'pipe',
  },
  {
    id: 'do-charge',
    title: 'DO & Charge Works',
    description: 'De-oil and charge works executed to restore refrigeration circuit health.',
    icon: 'droplet',
  },
  {
    id: 'boq',
    title: 'BOQ-Based Contracting',
    description: 'Transparent, specification-led contracting based on defined bill of quantities.',
    icon: 'file',
  },
  {
    id: 'emergency',
    title: 'Emergency HVAC Services',
    description: 'Priority response for breakdowns, with 24/7 support when required.',
    icon: 'siren',
  },
  {
    id: 'refrigeration',
    title: 'Refrigeration Services',
    description: 'Service and support for commercial refrigeration systems and equipment.',
    icon: 'snowflake',
  },
  {
    id: 'energy',
    title: 'Energy Saving Solutions',
    description: 'Retrofit and redesign focused on measurable operating efficiency.',
    icon: 'leaf',
  },
]
