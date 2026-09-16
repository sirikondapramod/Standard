import { CountUp } from '../components/CountUp'
import { stats } from '../data/stats'

export function Stats() {
  return (
    <section className="relative z-10 -mt-6 bg-white" aria-label="Company statistics">
      <div className="section-wrap section-pad">
        <div className="grid divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_50px_rgba(7,26,43,0.08)] sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-5 py-7 text-center">
              <p className="font-display text-3xl font-extrabold tracking-tight text-navy-dark">
                <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
