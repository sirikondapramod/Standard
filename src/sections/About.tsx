import { Leaf, ShieldCheck, Users } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { images } from '../data/site'

const features = [
  {
    icon: Users,
    title: 'Trained Professionals',
    text: 'Experienced Sales & Service Engineers supporting projects and maintenance.',
  },
  {
    icon: Leaf,
    title: 'Energy Saving & Retrofit',
    text: 'Retrofit and redesign solutions using energy-efficient products.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Customer Focus',
    text: 'Quality products, services and solutions designed around customer requirements.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-light py-20 sm:py-24">
      <div className="section-wrap section-pad grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl border border-cyan/40" />

            <img
              src={images.about}
              alt="Engineer reviewing industrial plant systems in a mechanical facility"
              className="relative z-10 h-[420px] w-full rounded-3xl object-cover shadow-[0_30px_60px_rgba(7,26,43,0.18)] sm:h-[520px]"
            />

            <div className="absolute right-5 -bottom-6 z-20 max-w-[240px] rounded-2xl bg-navy-dark p-5 text-white shadow-xl">
              <p className="text-[10px] font-semibold tracking-[0.22em] text-cyan uppercase">
                Authorized Channel Partners
              </p>
              <p className="font-display mt-2 text-lg font-bold leading-snug">
                Carrier & Toshiba Products
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeader
            label="About Standard Cooling"
            heading="Project Services & The Retrofit Specialists."
          />

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Standard Cooling & Air Conditioning was incorporated in December 2017 by Naresh
              Sirikonda and Suresh Kelleti. The company delivers HVAC project services,
              maintenance, retrofit solutions and energy-efficient solutions based on customer
              and operational requirements.
            </p>

            <p>
              With trained Sales & Service Engineers, Standard Cooling provides HVAC and
              refrigeration services, MEP works, project execution, retrofit solutions and
              energy-saving solutions. The company is also an authorized channel partner for
              the entire range of Carrier and Toshiba products.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-2xl border border-line bg-white p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-light text-blue">
                  <feature.icon className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="font-display font-bold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}