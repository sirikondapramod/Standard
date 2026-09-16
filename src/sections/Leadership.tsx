import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { leaders } from '../data/leadership'

export function Leadership() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader
            label="Our Partners"
            heading="Leadership That Understands HVAC"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {leaders.map((leader, i) => (
            <Reveal key={leader.id} delay={i * 0.08}>
              <article className="group h-full rounded-3xl border border-line bg-light p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(7,26,43,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy-dark font-display text-xl font-extrabold text-cyan">
                    {leader.initials}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase">
                      {leader.partnerLabel}
                    </p>
                    <h3 className="font-display mt-1 text-2xl font-extrabold text-ink">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-muted">{leader.role}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {leader.description}
                </p>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-navy uppercase">
                    Experience
                  </p>

                  <ul className="mt-3 space-y-1.5 text-sm text-ink">
                    {leader.experience.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <p className="mt-4 inline-flex rounded-full bg-navy-dark px-3 py-1 text-xs font-semibold text-cyan">
                    Total Experience: {leader.totalExperience}
                  </p>

                  {leader.expertise ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {leader.expertise.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line bg-white px-3 py-1 text-xs text-navy"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}