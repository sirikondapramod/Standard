export interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  display?: string
}

export const stats: StatItem[] = [
  { value: 2017, label: 'Established' },
  { value: 19, suffix: '+', label: 'Years Experience — Naresh Sirikonda' },
  { value: 16, suffix: '+', label: 'Years Experience — Suresh Kelleti' },
  { value: 4, suffix: ' Hours', label: 'Service Response Commitment' },
  { value: 24, suffix: '/7', label: 'Emergency Service' },
]
