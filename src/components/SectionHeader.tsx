interface SectionHeaderProps {
  label: string
  heading: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  heading,
  description,
  light = false,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div
        className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className={`h-px w-8 ${light ? 'bg-cyan' : 'bg-blue'}`} />
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${light ? 'text-cyan' : 'text-blue'}`}
        >
          {label}
        </p>
      </div>
      <h2
        className={`font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.6rem] ${light ? 'text-white' : 'text-ink'}`}
      >
        {heading}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-white/75' : 'text-muted'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
