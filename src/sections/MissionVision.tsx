import { Compass, Eye, Quote } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'

export function MissionVision() {
  return (
    <section className="bg-light py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader label="Purpose" heading="How We Work With Customers" />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Reveal>
            <article className="h-full rounded-3xl border border-line bg-white p-8">
              <Compass className="h-8 w-8 text-blue" />
              <h3 className="font-display mt-6 text-2xl font-extrabold text-ink">Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                To provide high quality, outstanding services and solutions to our customers through
                dedication and excellence.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="h-full rounded-3xl border border-line bg-white p-8">
              <Eye className="h-8 w-8 text-blue" />
              <h3 className="font-display mt-6 text-2xl font-extrabold text-ink">Vision</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                To listen to our customers, understand their needs, and offer products and services
                that best suit their requirements.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article className="relative h-full overflow-hidden rounded-3xl bg-navy-dark p-8 text-white">
              <Quote className="h-8 w-8 text-cyan" />
              <h3 className="font-display mt-6 text-2xl font-extrabold">Philosophy</h3>
              <p className="font-display mt-5 text-xl font-semibold leading-snug text-cyan">
                “Without Service, Sales is handicapped and without Sales, Service is handicapped.”
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                We treat our customers as we wish to be treated. Integrity, truthfulness and fairness
                are the foundation of our credibility.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
