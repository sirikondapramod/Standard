import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'light'
  className?: string
  arrow?: boolean
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  arrow = true,
}: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan'

  const styles = {
    primary:
      'bg-cyan text-navy-dark hover:bg-white hover:shadow-[0_12px_30px_rgba(25,181,254,0.28)]',
    secondary:
      'border border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-cyan hover:bg-white/15',
    ghost:
      'border border-line bg-white text-ink hover:border-blue hover:text-blue',
    light:
      'bg-white text-navy-dark hover:bg-cyan',
  } as const

  return (
    <a href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      {arrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </a>
  )
}
