import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { teamGroups } from '../data/team'

export function Team() {
  return (
    <section className="bg-light py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader label="Team" heading="People Behind the Service" />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 4) * 0.05}>
              <article className="rounded-2xl border border-line bg-white p-5">
                <p className="text-xs tracking-[0.18em] text-blue uppercase">{group.detail}</p>
                <h3 className="font-display mt-2 text-lg font-extrabold text-ink">{group.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <blockquote className="mt-12 rounded-3xl border border-line bg-white p-8 sm:p-10">
            <p className="font-display text-2xl font-extrabold tracking-tight text-navy-dark sm:text-3xl">
              Customer Service Is Our Main Concern
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              We carefully choose our technicians to provide courteous and knowledgeable service. Our
              team works together to solve unique and difficult problems and maintain a competitive
              edge in the service industry.
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
