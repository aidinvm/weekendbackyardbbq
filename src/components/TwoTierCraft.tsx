export function TwoTierCraft() {
  return (
    <section
      id="two-tier"
      aria-labelledby="two-tier-heading"
      className="border-b hairline bg-obsidian py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Photography */}
          <figure className="lg:col-span-6">
            <div className="group overflow-hidden border hairline bg-hearth">
              <img
                src="/images/wax-sealed-box.jpg"
                alt="Two stacked matte-black architectural food boxes tied with natural twine and sealed with a terracotta wax seal over a thick cream tasting card on dark slate"
                loading="lazy"
                className="editorial-photo aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] tracking-[0.14em] uppercase text-parchment-muted">
              <span>NUMBERED BOX · WAX-SEALED TO ORDER</span>
              <span>THERMAL-SEPARATED CHAMBERS</span>
            </figcaption>
          </figure>

          {/* Editorial Architecture Breakdown */}
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-saffron">
              Engineered for Calgary Evenings
            </p>
            <h2
              id="two-tier-heading"
              className="mt-3 font-serif text-3xl font-normal leading-tight tracking-[-0.015em] text-alabaster sm:text-5xl"
            >
              Hot Skewers.
              <br />
              <span className="italic">Never Soggy Sourdough.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ash sm:text-base">
              Most takeout ruins great bread in five minutes of trapped steam. Our
              bespoke two-tier matte-black box physically separates live heat from
              stone-baked crust so your table tastes like it just came off the coals.
            </p>

            <div className="mt-8 space-y-6 border-t hairline pt-7">
              <div className="grid gap-1 sm:grid-cols-12 sm:gap-4">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-saffron sm:col-span-4">
                  Tier 01 · Lower
                </span>
                <div className="sm:col-span-8">
                  <h3 className="font-serif text-xl text-alabaster">
                    Insulated Fire Chamber
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ash">
                    Foil-lined thermal base locks in live-charcoal heat so your
                    koobideh and saffron chicken arrive steaming hot—even on a -15°C
                    Calgary evening.
                  </p>
                </div>
              </div>

              <div className="grid gap-1 border-t hairline pt-6 sm:grid-cols-12 sm:gap-4">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-saffron sm:col-span-4">
                  Tier 02 · Upper
                </span>
                <div className="sm:col-span-8">
                  <h3 className="font-serif text-xl text-alabaster">
                    Breathable Crust &amp; Pantry Chamber
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ash">
                    Unbleached parchment isolates the 48-hour sourdough barbari from
                    moisture while keeping glass jars of labneh, ezme, and fresh herbs
                    bright and cool.
                  </p>
                </div>
              </div>

              <div className="grid gap-1 border-t hairline pt-6 sm:grid-cols-12 sm:gap-4">
                <span className="font-mono text-xs tracking-[0.14em] uppercase text-saffron sm:col-span-4">
                  At Your Table
                </span>
                <div className="sm:col-span-8">
                  <h3 className="font-serif text-xl text-alabaster">
                    The 60-Second Finishing Ritual
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ash">
                    Break the wax seal, melt the saffron butter coin directly across
                    the hot skewers, pinch smoked flaky sea salt from the corked vial,
                    and tear warm barbari straight through the jars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
