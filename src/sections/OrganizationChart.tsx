import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { orgBranches, orgLeads } from '../data/organization'

export function OrganizationChart() {
  return (
    <section id="organization" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader
            label="Structure"
            heading="Our Organization"
            description="Hyderabad registered office, with operations spanning sales, projects, technical service and safety."
          />
        </Reveal>

        <Reveal>
          <div className="mt-12 hidden lg:block">
            <div className="flex justify-center gap-8">
              {orgLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="w-[280px] rounded-2xl border border-cyan/30 bg-navy-dark px-6 py-5 text-center text-white"
                >
                  <p className="font-display text-lg font-extrabold">{lead.title}</p>
                  <p className="mt-1 text-sm text-cyan">{lead.detail}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto h-10 w-px bg-line" />
            <div className="mx-auto h-px w-[86%] bg-line" />
            <div className="grid grid-cols-6">
              {orgBranches.map((branch) => (
                <div key={branch.id} className="flex flex-col items-center">
                  <div className="h-8 w-px bg-line" />
                  <div className="mx-2 rounded-2xl border border-line bg-light px-3 py-4 text-center">
                    <p className="font-display text-sm font-bold text-ink">{branch.title}</p>
                    <p className="mt-2 text-xs text-muted">{branch.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:hidden">
          {orgLeads.map((lead) => (
            <article key={lead.id} className="rounded-2xl bg-navy-dark px-5 py-4 text-white">
              <p className="font-display font-extrabold">{lead.title}</p>
              <p className="text-sm text-cyan">{lead.detail}</p>
            </article>
          ))}
          {orgBranches.map((branch) => (
            <article key={branch.id} className="rounded-2xl border border-line bg-light px-5 py-4">
              <p className="font-display font-bold text-ink">{branch.title}</p>
              <p className="mt-1 text-sm text-muted">{branch.detail}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">Hyderabad Registered Office</p>
      </div>
    </section>
  )
}
