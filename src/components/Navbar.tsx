import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { company, navLinks } from '../data/site'
import logo from '../assets/logo.png'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur-md transition-all duration-500 ${
        scrolled || open
          ? 'shadow-[0_10px_30px_rgba(7,26,43,0.08)]'
          : 'shadow-none'
      }`}
    >
      <div className="section-wrap section-pad flex h-[76px] items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex min-w-0 shrink-0 items-center"
          aria-label="Standard Cooling & Air Conditioning - Home"
        >
          <img
            src={logo}
            alt="Standard Cooling & Air Conditioning"
            className="h-14 w-auto max-w-[220px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-navy/80 transition-colors hover:text-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA and Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Get in Touch */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-navy-dark px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue md:inline-flex"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-dark lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open
            ? 'max-h-[100svh] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
        hidden={!open}
        aria-hidden={!open}
      >
        <nav
          className="section-wrap section-pad flex flex-col gap-1 pb-8"
          aria-label="Mobile"
        >
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

          {/* Mobile Get in Touch */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy-dark px-5 py-3 text-sm font-semibold text-white"
          >
            Get in Touch
          </a>

          {/* Mobile Call Now */}
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