import { Clock3, Siren, Users } from 'lucide-react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { images } from '../data/site'

const features = [
  { icon: Clock3, title: '4-Hour Response Commitment' },
  { icon: Siren, title: '24/7 Emergency Service' },
  { icon: Users, title: 'Trained Sales & Service Engineers' },
]

export function ServicePromise() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <img
        src={images.promise}
        alt="HVAC technician working on commercial cooling equipment"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-navy-dark/78" />
      <div className="section-wrap section-pad relative">
        <Reveal>
          <h2 className="font-display max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            When Your HVAC System Stops, Your Business Shouldn’t.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            We provide scheduled maintenance, service support and 24-hour emergency assistance,
  backed by trained Sales & Service Engineers and a committed four-hour service response.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2.5"
            >
              <feature.icon className="h-4 w-4 text-cyan" />
              <span className="text-sm font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="#contact" variant="primary">
            Request Service
          </Button>
        </div>
      </div>
    </section>
  )
}
