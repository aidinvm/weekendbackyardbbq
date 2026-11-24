const PILLARS = [
  {
    index: '01',
    title: '100% Lump Hardwood Fire',
    caption:
      'Hand-minced Alberta chuck & lamb shoulder seared on wide flat stainless blades over glowing lump charcoal—never gas, never strip-mall broilers.',
    spec: 'LIVE EMBER SEAR · ZERO GAS',
    image: '/images/charcoal-skewers.jpg',
    alt: 'Beef koobideh and saffron chicken skewers searing on wide stainless steel blades over glowing red-hot lump hardwood charcoal embers',
  },
  {
    index: '02',
    title: '48-Hour Cold Sourdough',
    caption:
      'Long-fermented artisan barbari dough retarded cold for two full days, then stone-baked until blistered with toasted white sesame and black nigella.',
    spec: '48H FERMENT · STONE-BAKED',
    image: '/images/sourdough-barbari.jpg',
    alt: 'Freshly stone-baked golden blistered sourdough barbari flatbread coated in toasted sesame and black nigella seeds on unbleached parchment',
  },
  {
    index: '03',
    title: 'Glass Jars & Table Ritual',
    caption:
      'Whipped garlic-herb labneh and charred tomato pomegranate ezme packed in reusable 4 oz glass jars alongside saffron compound butter and smoked flaky sea salt.',
    spec: 'REUSABLE GLASS · SMALL BATCH',
    image: '/images/jars-finishing-kit.jpg',
    alt: 'Two 4 oz glass jars of whipped herb labneh and charred tomato walnut pomegranate ezme beside saffron compound butter, corked smoked sea salt vial, and pickled red onions',
  },
] as const

export function CraftPillars() {
  return (
    <section
      aria-labelledby="craft-pillars-heading"
      className="border-b hairline bg-obsidian py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-saffron">
              Fire &amp; Flour Philosophy
            </p>
            <h2
              id="craft-pillars-heading"
              className="mt-3 font-serif text-3xl font-normal tracking-[-0.015em] text-alabaster sm:text-5xl"
            >
              A Private Backyard Fire,
              <span className="italic"> Boxed for Your Table.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ash">
            We cook one focused menu per weekend so every skewer hits live charcoal
            minutes before handoff and every loaf leaves the deck oven crisp.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article key={pillar.index} className="group flex flex-col">
              <div className="overflow-hidden border hairline bg-hearth">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  loading="lazy"
                  className="editorial-photo aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase">
                <span className="text-saffron">{pillar.index}</span>
                <span className="text-parchment-muted">{pillar.spec}</span>
              </div>
              <h3 className="mt-2.5 font-serif text-2xl font-normal text-alabaster">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">
                {pillar.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
