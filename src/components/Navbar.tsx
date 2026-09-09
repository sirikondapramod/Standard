import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { company, navLinks } from '../data/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-line/80 bg-white/95 shadow-[0_10px_30px_rgba(7,26,43,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="section-wrap section-pad flex h-[76px] items-center justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display text-sm font-extrabold tracking-tight ${
              scrolled || open ? 'bg-navy-dark text-cyan' : 'bg-white/10 text-cyan ring-1 ring-white/20'
            }`}
          >
            SC
          </span>
          <span className="min-w-0">
            <span
              className={`block truncate font-display text-[13px] font-extrabold tracking-[0.12em] uppercase sm:text-sm ${
                scrolled || open ? 'text-navy-dark' : 'text-white'
              }`}
            >
              Standard Cooling
            </span>
            <span
              className={`block text-[10px] tracking-[0.18em] uppercase ${
                scrolled || open ? 'text-muted' : 'text-white/70'
              }`}
            >
              {company.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide transition-colors ${
                scrolled ? 'text-navy/80 hover:text-blue' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 md:inline-flex ${
              scrolled
                ? 'bg-navy-dark text-white hover:bg-blue'
                : 'bg-cyan text-navy-dark hover:bg-white'
            }`}
          >
            Get in Touch
          </a>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-lg xl:hidden ${
              scrolled || open ? 'text-navy-dark' : 'text-white'
            }`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`xl:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[100svh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
        hidden={!open}
        aria-hidden={!open}
      >
        <nav className="section-wrap section-pad flex flex-col gap-1 pb-8" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-dark hover:bg-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy-dark px-5 py-3 text-sm font-semibold text-white"
          >
            Get in Touch
          </a>
          <a
            href={company.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-navy-dark"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  )
}
