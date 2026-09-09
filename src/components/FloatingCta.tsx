import { Mail, MessageSquare, Phone } from 'lucide-react'
import { company } from '../data/site'

export function FloatingCta() {
  return (
    <>
      <a
        href="#contact"
        className="group fixed right-6 bottom-6 z-40 hidden items-center gap-3 rounded-full border border-white/10 bg-navy-dark px-5 py-3 text-white shadow-[0_16px_40px_rgba(7,26,43,0.35)] md:inline-flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan/15 text-cyan">
          <MessageSquare className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[11px] text-white/55">Need HVAC Support?</span>
          <span className="text-sm font-semibold">Contact Us →</span>
        </span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-navy-dark px-3 py-2.5 text-xs font-semibold text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
          <a
            href={company.emailHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line px-3 py-2.5 text-xs font-semibold text-navy-dark"
          >
            <Mail className="h-3.5 w-3.5" />
            Email
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan px-3 py-2.5 text-xs font-semibold text-navy-dark"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  )
}
