import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader
            label="Active Work"
            heading="Projects in Progress"
            description="Current commissioning and installation assignments across commercial and industrial sites."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <article className="rounded-3xl border border-line bg-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:bg-white hover:shadow-[0_18px_40px_rgba(7,26,43,0.08)]">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-blue uppercase">
                    {project.code}
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-energy/15 px-3 py-1 text-[11px] font-semibold text-[#0d7a4f]">
                    <span className="h-1.5 w-1.5 rounded-full bg-energy" />
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-2xl font-extrabold text-ink">
                  {project.client}
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5">
                  <div>
                    <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Scope</p>
                    <p className="mt-1 text-sm font-semibold text-navy">{project.scope}</p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.16em] text-muted uppercase">Status</p>
                    <p className="mt-1 text-sm font-semibold text-navy">In progress</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
