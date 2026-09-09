import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../components/Button'
import { company, images } from '../data/site'

const cards = [
  { value: '2017', label: 'Established' },
  { value: '19+', label: 'Years Partner Experience' },
  { value: '4 Hours', label: 'Service Response Commitment' },
  { value: '24/7', label: 'Emergency Support' },
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative min-h-[100svh] scroll-mt-0 overflow-hidden bg-navy-dark text-white">
      <img
        src={images.hero}
        alt="Industrial mechanical room with commercial piping and HVAC infrastructure"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(7,26,43,0.94)_0%,rgba(11,38,61,0.82)_48%,rgba(7,26,43,0.72)_100%)]" />
      <div className="grid-overlay absolute inset-0 opacity-70" />
      <div className="noise-overlay absolute inset-0 opacity-20 mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-dark to-transparent" />

      <div className="section-wrap section-pad relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 lg:justify-center lg:pb-24 lg:pt-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[11px] font-semibold tracking-[0.32em] text-cyan uppercase"
        >
          {company.eyebrow}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display mt-5 max-w-4xl text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl lg:text-[5.4rem]"
        >
          THE RETROFIT
          <span className="mt-2 block text-cyan">SPECIALISTS</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-display mt-6 max-w-xl text-xl font-semibold text-white/90 sm:text-2xl"
        >
          Engineering Better Cooling.
          <span className="block">Delivering Greater Efficiency.</span>
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
        >
          Standard Cooling & Air Conditioning delivers dependable HVAC, refrigeration, retrofit and
          energy-saving solutions designed around the operational needs of modern businesses.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="#services" variant="primary">
            Explore Our Services
          </Button>
          <Button href="#contact" variant="secondary">
            Talk to Our Team
          </Button>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.article
              key={card.label}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65 + i * 0.08 }}
              className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-md sm:px-5"
            >
              <p className="font-display text-xl font-extrabold text-cyan sm:text-2xl">{card.value}</p>
              <p className="mt-1 text-[11px] leading-snug text-white/70 sm:text-xs">{card.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
