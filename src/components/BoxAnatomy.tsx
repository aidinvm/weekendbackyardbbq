import { Plus } from 'lucide-react'
import { DROP_CONFIG } from '../config/drop'

interface BoxItem {
  number: string
  category: string
  name: string
  portion: string
  description: string
}

const BOX_ITEMS: BoxItem[] = [
  {
    number: '01',
    category: 'Live Charcoal',
    name: 'Prime Alberta Beef & Lamb Koobideh',
    portion: '2 Skewers',
    description:
      'Hand-minced Alberta AAA chuck and lamb shoulder folded with grated sweet onion and cracked black pepper, seared rapidly over 100% lump hardwood charcoal.',
  },
  {
    number: '02',
    category: '24-Hour Marinade',
    name: 'Saffron & Sumac Chicken Thighs',
    portion: '2 Skewers',
    description:
      'Boneless thighs steeped for 24 hours in strained yogurt, steeped Iranian saffron, and sour-orange juice, blistered over live fire until caramelized.',
  },
  {
    number: '03',
    category: 'Deck Oven',
    name: '48-Hour Cold-Fermented Sourdough Barbari',
    portion: '12" Flatbread',
    description:
      'Stone-baked artisan flatbread encrusted with toasted white sesame and black nigella seeds—isolated in breathable parchment so the crust stays crisp.',
  },
  {
    number: '04',
    category: 'Pantry Jar',
    name: 'Whipped Roasted Garlic & Herb Labneh',
    portion: '4 oz Glass Jar',
    description:
      'Thick, tangy house-strained yogurt whipped silky with sweet confit garlic, fresh tarragon, garden mint, and a finish of cold-pressed olive oil.',
  },
  {
    number: '05',
    category: 'Pantry Jar',
    name: 'Charred Tomato & Pomegranate Ezme',
    portion: '4 oz Glass Jar',
    description:
      'Ember-roasted vine tomatoes hand-chopped with toasted walnuts, tart pomegranate molasses, and warm Aleppo pepper heat.',
  },
  {
    number: '06',
    category: 'Tabletop Finish',
    name: 'Chef Finishing Kit',
    portion: '4 Components',
    description:
      'Steeped saffron compound butter coin, corked glass vial of smoked flaky sea salt, quick-pickled magenta red onions, and a crisp fresh herb bundle.',
  },
]

interface BoxAnatomyProps {
  onReserveClick: () => void
}

export function BoxAnatomy({ onReserveClick }: BoxAnatomyProps) {
  return (
    <section
      id="anatomy"
      aria-labelledby="anatomy-heading"
      className="border-b hairline bg-hearth py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 border-b hairline pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-saffron">
              Anatomy of the Box
            </p>
            <h2
              id="anatomy-heading"
              className="mt-3 font-serif text-3xl font-normal tracking-[-0.015em] text-alabaster sm:text-5xl"
            >
              What’s Inside Drop {DROP_CONFIG.dropNumber}{' '}
              <span className="italic text-ash">(${DROP_CONFIG.boxPriceCad} CAD)</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-ash md:text-right">
            <p className="text-alabaster">{DROP_CONFIG.feedsLabel}</p>
            <p className="mt-1 text-parchment-muted">
              Approx. {DROP_CONFIG.perPersonEstimate} · Zero prep, zero grill cleanup
            </p>
          </div>
        </div>

        {/* 6-Item Editorial Menu Ledger Grid */}
        <div className="mt-10 grid gap-px bg-alabaster/10 sm:grid-cols-2 lg:grid-cols-3">
          {BOX_ITEMS.map((item) => (
            <article
              key={item.number}
              className="flex flex-col justify-between bg-hearth p-6 transition-colors hover:bg-hearth-raised sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase">
                  <span className="text-saffron">
                    {item.number} · {item.category}
                  </span>
                  <span className="text-alabaster/80">{item.portion}</span>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-normal leading-snug text-alabaster">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ash">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Optional Checkout Add-On Strip */}
        <div className="mt-8 flex flex-col justify-between gap-5 border hairline-strong bg-obsidian p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border hairline text-saffron">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-saffron">
                Optional Checkout Add-On · Feeding 3–4?
              </p>
              <p className="mt-1 font-serif text-2xl text-alabaster">
                {DROP_CONFIG.upsellItem.name}{' '}
                <span className="font-mono text-base text-saffron">
                  +${DROP_CONFIG.upsellItem.priceCad} CAD
                </span>
              </p>
              <p className="mt-1 text-xs text-ash">{DROP_CONFIG.upsellItem.note}</p>
            </div>
          </div>

          <button
            id="anatomy-reserve-btn"
            type="button"
            onClick={onReserveClick}
            className="shrink-0 cursor-pointer border border-alabaster/30 bg-transparent px-5 py-3 text-xs font-medium tracking-[0.12em] uppercase text-alabaster transition-colors hover:border-terracotta hover:bg-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            {DROP_CONFIG.isSoldOut ? 'Join Waitlist' : 'Claim Your Box'}
          </button>
        </div>
      </div>
    </section>
  )
}
