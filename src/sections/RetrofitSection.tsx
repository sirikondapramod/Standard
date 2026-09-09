import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { images } from '../data/site'

const steps = [
  {
    n: '01',
    title: 'Assess',
    text: 'Understand the existing system and operating requirements.',
  },
  {
    n: '02',
    title: 'Analyze',
    text: 'Identify performance gaps and energy-saving opportunities.',
  },
  {
    n: '03',
    title: 'Retrofit',
    text: 'Upgrade or redesign equipment and systems where required.',
  },
  {
    n: '04',
    title: 'Optimize',
    text: 'Improve system efficiency, reliability and equipment life.',
  },
]

const flow = ['Existing System', 'Assess', 'Analyze', 'Retrofit', 'Optimize', 'Efficient System']

export function RetrofitSection() {
  return (
    <section className="relative overflow-hidden bg-navy-dark py-20 text-white sm:py-24">
      <img
        src={images.retrofit}
        alt="Commercial HVAC ductwork and cooling infrastructure"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,43,0.92),rgba(11,38,61,0.88))]" />
      <div className="grid-overlay absolute inset-0 opacity-40" />

      <div className="section-wrap section-pad relative">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-cyan uppercase">
            Retrofit Specialists
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
            Make Your Existing HVAC System
            <span className="mt-2 block text-cyan">Work Smarter.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/70">
            Standard Cooling specializes in energy-saving solutions through retrofit, efficient
            equipment and redesign of existing HVAC setups based on administration, operational and
            consultant requirements.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/6 p-6">
                <p className="font-display text-sm font-bold text-cyan">{step.n}</p>
                <h3 className="font-display mt-3 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-x-auto">
            <ol className="flex min-w-[640px] items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 md:min-w-0">
              {flow.map((item, i) => (
                <li key={item} className="flex flex-1 items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-2 text-center text-[11px] font-semibold tracking-wide uppercase ${
                      i === 0 || i === flow.length - 1
                        ? 'bg-cyan text-navy-dark'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {item}
                  </span>
                  {i < flow.length - 1 ? (
                    <span className="hidden h-px flex-1 bg-white/20 sm:block" aria-hidden />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8">
            <Button href="#contact" variant="primary">
              Explore Retrofit Solutions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
