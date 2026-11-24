import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { DROP_CONFIG } from '../config/drop'

const FAQS = [
  {
    id: 'faq-servings',
    question: `How many people does one $${DROP_CONFIG.boxPriceCad} Weekend Feast Box feed?`,
    answer:
      'Each box feeds 2–3 adults generously (roughly $28–$42 per person): 2 Prime Alberta beef & lamb koobideh skewers, 2 saffron-sumac chicken thigh skewers, a full 12" stone-baked sourdough barbari, two 4 oz glass jars (whipped herb labneh + charred tomato pomegranate ezme), and the complete chef finishing kit. Feeding 3–4? Add the extra $18 sourdough & labneh jar at Stripe checkout.',
  },
  {
    id: 'faq-halal-ahs',
    question: 'Is all meat Halal-certified and where is the food prepared?',
    answer:
      'Yes. We source 100% Halal-certified Alberta beef, lamb, and chicken, and every skewer, loaf, and jar is prepared in our AHS-approved NW Calgary commercial commissary kitchen.',
  },
  {
    id: 'faq-heat',
    question: 'Will my skewers stay hot and my sourdough stay crisp?',
    answer:
      'Yes—that is why we engineered a two-tier box. The lower chamber is foil-insulated around the freshly charred skewers, while the upper chamber isolates the blistered sourdough barbari in breathable parchment so trapped steam never softens the crust.',
  },
  {
    id: 'faq-allergens',
    question: 'What allergens are in Drop 01?',
    answer:
      'Drop 01 contains wheat/gluten (48-hour sourdough barbari), dairy (labneh, chicken yogurt marinade, saffron butter), sesame and nigella seeds, and walnuts (charred tomato ezme). Leave a delivery note at checkout if you prefer the ezme or butter coin omitted.',
  },
  {
    id: 'faq-soldout',
    question: 'What happens once the 25-box cap is reached?',
    answer:
      'Stripe automatically locks checkout after box #25 so we never compromise fire quality or sourdough fermentation. Join the VIP SMS Drop List below to receive the private order link every Tuesday at 10:00 AM—24 hours before public release.',
  },
] as const

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id)

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b hairline bg-hearth py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-saffron">
              Details &amp; Logistics
            </p>
            <h2
              id="faq-heading"
              className="mt-3 font-serif text-3xl font-normal tracking-[-0.015em] text-alabaster sm:text-4xl"
            >
              Common Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              Everything you need to know before claiming your box for{' '}
              {DROP_CONFIG.days[0].shortDate} or {DROP_CONFIG.days[1].shortDate}.
            </p>
          </div>

          <div className="divide-y divide-alabaster/10 border-y hairline lg:col-span-8">
            {FAQS.map((item) => {
              const isOpen = openId === item.id
              return (
                <div key={item.id}>
                  <button
                    id={item.id}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:text-saffron"
                  >
                    <span className="font-serif text-xl text-alabaster sm:text-2xl">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-saffron transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm leading-relaxed text-ash">
                      {item.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
