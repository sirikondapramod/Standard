import { Gauge, ShieldCheck, Timer } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { images } from '../data/site'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Quality Products',
    text: 'Quality products, services and solutions selected around customer requirements.',
  },
  {
    icon: Gauge,
    title: 'Maximum Efficiency',
    text: 'Solutions focused on longer equipment life and maximum system efficiency.',
  },
  {
    icon: Timer,
    title: '4-Hour Response',
    text: 'Committed service response time of four hours for service requirements.',
  },
]

export function Quality() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 text-white sm:py-24">
      <img
        src={images.quality}
        alt="Technical facility with industrial cooling and plant equipment"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-navy-dark/80" />
      <div className="section-wrap section-pad relative">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-cyan uppercase">Quality</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            Quality Without Compromise
          </h2>
          <p className="mt-5 max-w-2xl text-white/70">
            Our goal is to provide quality products, services and solutions that help extend equipment
life, maximize system efficiency and deliver dependable performance for our customers.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <pillar.icon className="h-7 w-7 text-energy" />
                <h3 className="font-display mt-5 text-lg font-bold tracking-wide uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
