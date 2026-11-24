import { DROP_CONFIG } from '../config/drop'

const STEPS = [
  {
    number: '01',
    timing: 'MON – THU 8:00 PM',
    title: 'Claim Before Thursday 8 PM',
    body: 'Choose Saturday or Sunday fulfillment and lock in your numbered box online. Once all 25 boxes are spoken for, checkout closes automatically.',
  },
  {
    number: '02',
    timing: 'FRIDAY MORNING',
    title: '48-Hour Craft Prep',
    body: 'We source exact Alberta meats with zero waste, steep our 24-hour Iranian saffron & yogurt marinade, and cold-ferment the sourdough barbari dough.',
  },
  {
    number: '03',
    timing: 'SAT / SUN · 4:30 – 6:30 PM',
    title: 'Hot Off the Fire',
    body: 'Pick up warm from our NW Calgary commercial kitchen window ($0) or get flat-rate doorstep delivery ($8) across NW & Inner-City SW Calgary.',
  },
] as const

export function WeekendRhythm() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="border-b hairline bg-hearth py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-saffron">
            Weekly Drop Rhythm
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-[-0.015em] text-alabaster sm:text-5xl"
          >
            How the Weekend Drop Works
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ash sm:text-base">
            Every box is spoken for before we light the lump charcoal. That means zero
            sitting heat lamps, zero reheated leftovers, and peak Alberta ingredients.
          </p>
        </div>

        {/* 3-Column Stepper */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="relative border-t hairline-strong pt-7"
            >
              <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase">
                <span className="text-saffron">STEP {step.number}</span>
                <span className="text-parchment-muted">{step.timing}</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl font-normal text-alabaster">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">{step.body}</p>
            </article>
          ))}
        </div>

        {/* Fulfillment & Delivery Coverage Transparency */}
        <div className="mt-12 grid gap-6 border hairline bg-obsidian p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:border-r lg:hairline lg:pr-8">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-saffron">
              Fulfillment Options (Selected at Checkout)
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-medium text-alabaster">
                    NW Calgary Commissary Pickup
                  </p>
                  <span className="font-mono text-sm text-saffron">$0 CAD</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ash">
                  Sat &amp; Sun, 4:30 – 6:00 PM. Exact NW Calgary pickup door &amp;
                  parking instructions arrive in your confirmation email &amp; SMS.
                </p>
              </div>
              <div className="border-t hairline pt-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-medium text-alabaster">
                    Weekend Doorstep Courier
                  </p>
                  <span className="font-mono text-sm text-alabaster">
                    ${DROP_CONFIG.deliveryFeeCad} CAD
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ash">
                  Sat &amp; Sun, 4:30 – 6:30 PM. Hand-delivered warm in insulated
                  carriers across NW &amp; Inner-City SW Calgary.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-2">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-ash">
              Included Flat-Rate Courier Zone (NW &amp; Inner-City SW)
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {DROP_CONFIG.deliveryNeighborhoods.map((hood) => (
                <span
                  key={hood}
                  className="border hairline bg-hearth px-3 py-1.5 text-xs text-alabaster/90"
                >
                  {hood}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-parchment-muted">
              Outside these neighbourhoods? Choose free NW pickup or text us for
              multi-box courier availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
