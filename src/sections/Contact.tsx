import { Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { contacts } from '../data/contact'

function mapsHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader
            label="Contact"
            heading="Let’s Keep Your Systems Running"
            description="Talk to our team about HVAC maintenance, retrofit, energy-saving solutions, MEP works or project requirements."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {contacts.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.07}>
              <article className="flex h-full flex-col rounded-3xl border border-line bg-light p-6">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-blue uppercase">
                  {card.id === 'office' ? 'Registered Office' : 'Partner'}
                </p>

                <h3 className="font-display mt-2 text-2xl font-extrabold text-ink">
                  {card.title}
                </h3>

                {card.role ? (
                  <p className="mt-1 text-sm text-muted">{card.role}</p>
                ) : null}

                {card.lines.length > 0 ? (
                  <div className="mt-5 flex gap-2 text-sm leading-relaxed text-navy">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" />

                    <p>
                      {card.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                ) : null}

                {card.email ? (
                  <a
                    href={`mailto:${card.email}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm text-navy hover:text-blue"
                  >
                    <Mail className="h-4 w-4 text-blue" />
                    {card.email}
                  </a>
                ) : null}

                {card.phone ? (
                  <a
                    href={card.phoneHref ?? `tel:${card.phone.replace(/\s/g, '')}`}
                    className="mt-2 inline-flex items-center gap-2 text-sm text-navy hover:text-blue"
                  >
                    <Phone className="h-4 w-4 text-blue" />
                    {card.phone}
                  </a>
                ) : null}

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {card.showCall && card.phone ? (
                    <a
                      href={card.phoneHref ?? `tel:${card.phone.replace(/\s/g, '')}`}
                      className="rounded-full bg-navy-dark px-4 py-2 text-xs font-semibold text-white"
                    >
                      Call Us
                    </a>
                  ) : null}

                  {card.showEmail && card.email ? (
                    <a
                      href={`mailto:${card.email}`}
                      className="rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-navy-dark"
                    >
                      Email Us
                    </a>
                  ) : null}

                  <a
                    href={mapsHref(card.mapsQuery)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-navy-dark"
                  >
                    Get Directions
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}