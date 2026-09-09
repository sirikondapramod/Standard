import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { equipmentCategories } from '../data/equipment'

export function Equipment() {
  const [openId, setOpenId] = useState(equipmentCategories[0]?.id ?? '')

  return (
    <section id="expertise" className="scroll-mt-24 bg-light py-20 sm:py-24">
      <div className="section-wrap section-pad">
        <Reveal>
          <SectionHeader
            label="Equipment Expertise"
            heading="Equipment We Service"
            description="From pumps and air handling units to central plant chillers and commercial refrigeration."
          />
        </Reveal>
        <div className="mt-10 grid gap-3">
          {equipmentCategories.map((category, index) => {
            const open = openId === category.id
            return (
              <Reveal key={category.id} delay={index * 0.03}>
                <div className="overflow-hidden rounded-2xl border border-line bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? '' : category.id)}
                  >
                    <span>
                      <span className="mr-3 font-display text-xs font-bold text-cyan">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-lg font-extrabold text-ink">
                        {category.title}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <ul className="grid gap-2 px-5 pb-5 sm:grid-cols-2 lg:grid-cols-4">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-xl border border-line bg-light px-4 py-3 text-sm text-navy"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
