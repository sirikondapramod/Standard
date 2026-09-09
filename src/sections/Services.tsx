import {
  ArrowUpRight,
  ClipboardCheck,
  Droplets,
  FileText,
  Layers,
  Leaf,
  RefreshCw,
  Search,
  Settings2,
  Siren,
  Snowflake,
  Wind,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import type { ServiceIconName } from '../data/services'
import { services } from '../data/services'

const icons: Record<ServiceIconName, LucideIcon> = {
  clipboard: ClipboardCheck,
  refresh: RefreshCw,
  layers: Layers,
  wrench: Wrench,
  search: Search,
  settings: Settings2,
  pipe: Wind,
  droplet: Droplets,
  file: FileText,
  siren: Siren,
  snowflake: Snowflake,
  leaf: Leaf,
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader
            label="Services"
            heading="Complete HVAC & MEP Solutions"
            description="From preventive maintenance to complex retrofit and project execution, our team supports the complete lifecycle of HVAC systems."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <Reveal key={service.id} delay={(i % 3) * 0.05}>
                <a
                  href="#contact"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:shadow-[0_18px_40px_rgba(7,26,43,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-light text-blue transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-line transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
