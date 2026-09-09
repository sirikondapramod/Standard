import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { clients } from '../data/clients'

export function Clients() {
  return (
    <section id="clients" className="scroll-mt-24 bg-light py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader
            label="Clientele"
            heading="Trusted by Leading Organizations"
            description="Selected organizations served through HVAC services and solutions."
          />
        </Reveal>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-4">
          {clients.map((client, i) => (
            <Reveal key={client.name} delay={(i % 4) * 0.04} className="min-w-[220px] shrink-0 md:min-w-0">
              <article className="flex h-full min-h-[120px] flex-col justify-between rounded-2xl border border-line bg-white p-5">
                <p className="font-display text-lg font-extrabold tracking-tight text-navy-dark">
                  {client.name}
                </p>
                <p className="mt-4 text-xs tracking-[0.16em] text-muted uppercase">{client.city}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
