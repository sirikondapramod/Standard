import { Mail, MapPin, Phone } from 'lucide-react'
import { company, footerLinks } from '../data/site'

export function Footer() {
  return (
    <footer className="bg-navy-dark pb-24 text-white md:pb-10">
      <div className="section-wrap section-pad py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/8 font-display text-sm font-extrabold text-cyan ring-1 ring-white/10">
                SC
              </span>
              <div>
                <p className="font-display text-sm font-extrabold tracking-[0.16em] uppercase">
                  Standard Cooling
                </p>
                <p className="text-[11px] tracking-[0.2em] text-white/55 uppercase">
                  {company.tagline}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
              HVAC, refrigeration, retrofit and energy-saving solutions for commercial and industrial operations in Hyderabad.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">Navigation</p>
            <ul className="mt-5 grid gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-cyan" />
                {company.city}
              </li>
              <li>
                <a href={company.emailHref} className="flex items-center gap-2 hover:text-white">
                  <Mail className="h-4 w-4 text-cyan" />
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.phoneHref} className="flex items-center gap-2 hover:text-white">
                  <Phone className="h-4 w-4 text-cyan" />
                  {company.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="tracking-[0.18em] uppercase">{company.footerEyebrow}</p>
          <p>© 2026 Standard Cooling & Air Conditioning. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
