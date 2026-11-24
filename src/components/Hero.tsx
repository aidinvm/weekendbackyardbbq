import { ArrowRight, Check, MapPin, ShieldCheck } from 'lucide-react'
import { DROP_CONFIG, type FulfillmentDayId } from '../config/drop'

interface HeroProps {
  selectedDay: FulfillmentDayId
  onSelectDay: (day: FulfillmentDayId) => void
  onReserveClick: () => void
}

export function Hero({ selectedDay, onSelectDay, onReserveClick }: HeroProps) {
  const activeDay =
    DROP_CONFIG.days.find((d) => d.id === selectedDay) ?? DROP_CONFIG.days[0]

  return (
    <section id="top" className="relative overflow-hidden border-b hairline">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] ember-glow" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:pt-20">
        {/* Editorial Headline & Order Controls */}
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="animate-fade-up lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-saffron">
              {DROP_CONFIG.brandName} · Small-Batch Culinary Studio · {DROP_CONFIG.city}
            </p>

            <h1 className="mt-5 font-serif text-[2.75rem] font-normal leading-[1.03] tracking-[-0.02em] text-alabaster sm:text-6xl lg:text-[4.25rem]">
              Real Hardwood Charcoal.
              <br />
              <span className="italic text-alabaster/95">48-Hour Sourdough.</span>
              <br />
              25 Boxes Every Weekend.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
              Prime Alberta beef koobideh, saffron-sumac chicken, and blistered
              sourdough barbari—crafted in small batches and packed in a bespoke
              two-tier box for your Saturday or Sunday table.
            </p>

            {/* Micro-Proof Strip */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t hairline pt-5 text-xs text-ash">
              <span className="inline-flex items-center gap-1.5 text-alabaster">
                <Check className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                {DROP_CONFIG.feedsLabel} ({DROP_CONFIG.perPersonEstimate})
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                100% Halal-Certified
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-saffron" aria-hidden="true" />
                AHS-Approved NW Calgary Kitchen
              </span>
            </div>
          </div>

          {/* Interactive Drop Reservation Card */}
          <div className="animate-fade-up-delay-1 lg:col-span-5">
            <div className="border hairline-strong bg-hearth p-6 sm:p-7">
              <div className="flex items-baseline justify-between border-b hairline pb-4">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-saffron">
                    Drop {DROP_CONFIG.dropNumber} Allocation
                  </p>
                  <p className="mt-1 font-serif text-2xl text-alabaster">
                    Weekend Feast Box
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-2xl font-medium text-alabaster">
                    ${DROP_CONFIG.boxPriceCad}
                    <span className="ml-1 text-xs font-normal text-ash">CAD</span>
                  </p>
                  <p className="text-[11px] text-parchment-muted">No tax surprises</p>
                </div>
              </div>

              {/* Day Selector */}
              <div className="mt-5">
                <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-ash">
                  1. Select Weekend Fulfillment Day
                </p>
                <div
                  role="radiogroup"
                  aria-label="Select weekend fulfillment day"
                  className="mt-2.5 grid grid-cols-2 gap-2.5"
                >
                  {DROP_CONFIG.days.map((day) => {
                    const isSelected = day.id === selectedDay
                    const isDisabled = Boolean(day.soldOut || DROP_CONFIG.isSoldOut)
                    return (
                      <button
                        key={day.id}
                        id={`select-day-${day.id}`}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        disabled={isDisabled}
                        onClick={() => onSelectDay(day.id)}
                        className={`cursor-pointer border px-3.5 py-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                          isSelected
                            ? 'border-alabaster/70 bg-hearth-raised text-alabaster'
                            : 'hairline bg-obsidian/60 text-ash hover:border-alabaster/30 hover:text-alabaster'
                        } ${isDisabled ? 'cursor-not-allowed opacity-45' : ''}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{day.label}</span>
                          <span className="font-mono text-[11px] text-saffron">
                            {day.soldOut ? 'FULL' : day.shortDate}
                          </span>
                        </div>
                        <p className="mt-1 font-mono text-[11px] text-parchment-muted">
                          {day.window}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Fulfillment Transparency */}
              <div className="mt-4 space-y-1.5 border-t hairline pt-4 text-xs text-ash">
                <div className="flex items-center justify-between">
                  <span>NW Calgary Commissary Pickup</span>
                  <span className="font-mono text-alabaster">$0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>NW &amp; Inner-City SW Courier</span>
                  <span className="font-mono text-alabaster">
                    +${DROP_CONFIG.deliveryFeeCad}
                  </span>
                </div>
                <p className="pt-1 text-[11px] text-parchment-muted">
                  Choose pickup or courier delivery + optional $18 extra sourdough &amp;
                  labneh at checkout.
                </p>
              </div>

              {/* Primary CTA */}
              <button
                id="hero-reserve-cta"
                type="button"
                onClick={onReserveClick}
                className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2.5 bg-terracotta px-6 py-4 text-sm font-medium tracking-[0.08em] uppercase text-alabaster transition-colors hover:bg-terracotta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-hearth"
              >
                <span>
                  {DROP_CONFIG.isSoldOut
                    ? 'Join VIP Waitlist for Drop 02'
                    : `Reserve Your Weekend Box — $${DROP_CONFIG.boxPriceCad} CAD`}
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <p className="mt-3 text-center font-mono text-[11px] text-parchment-muted">
                {DROP_CONFIG.isSoldOut
                  ? 'Drop 01 is completely spoken for.'
                  : `Selected: ${activeDay.fullDate} · Hard cap of ${DROP_CONFIG.totalBoxCap} boxes via Stripe`}
              </p>
            </div>
          </div>
        </div>

        {/* Full-Bleed Framed Studio Hero Visual */}
        <figure className="animate-fade-up-delay-2 mt-12 sm:mt-14">
          <div className="group relative overflow-hidden border hairline bg-hearth">
            <img
              src="/images/hero-feast-box.jpg"
              alt="Open matte-black two-tier Weekend Feast Box on dark slate featuring charred Alberta beef koobideh skewers, saffron-sumac chicken skewers, blistered sesame sourdough barbari, glass jars of whipped herb labneh and charred tomato ezme, saffron butter coin, smoked sea salt vial, pickled red onions, and fresh herbs"
              className="editorial-photo aspect-[16/9] w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-2 px-5 py-4 font-mono text-[11px] tracking-[0.14em] uppercase text-alabaster/90 sm:px-7">
              <span>DROP {DROP_CONFIG.dropNumber} // MATTE-BLACK TWO-TIER FEAST BOX</span>
              <span className="text-alabaster/70">
                4 SKEWERS · 12&quot; SOURDOUGH · 2 GLASS JARS · CHEF FINISHING KIT
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}
