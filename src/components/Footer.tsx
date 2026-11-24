import { DROP_CONFIG } from '../config/drop'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-obsidian pb-24 pt-12 md:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 border-b hairline pb-10 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-2xl text-alabaster">
              {DROP_CONFIG.brandName}
            </p>
            <p className="mt-1.5 font-mono text-[11px] tracking-[0.18em] uppercase text-parchment-muted">
              {DROP_CONFIG.studioSubtitle} · {DROP_CONFIG.city}
            </p>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-ash">
              Prepared fresh every Saturday &amp; Sunday in an AHS-approved NW Calgary
              commercial kitchen using 100% Halal-certified Alberta meats and 100% lump
              hardwood charcoal.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-ash">
            <a
              href={`mailto:${DROP_CONFIG.contactEmail}`}
              className="transition-colors hover:text-alabaster"
            >
              {DROP_CONFIG.contactEmail}
            </a>
            <a
              href={`sms:${DROP_CONFIG.contactPhoneHref}`}
              className="transition-colors hover:text-alabaster"
            >
              {DROP_CONFIG.contactPhoneDisplay}
            </a>
            <a href="#anatomy" className="transition-colors hover:text-alabaster">
              Drop {DROP_CONFIG.dropNumber} Menu
            </a>
            <a href="#vip-waitlist" className="transition-colors hover:text-alabaster">
              VIP SMS List
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-2 font-mono text-[11px] text-parchment-muted sm:flex-row">
          <p>
            © {CURRENT_YEAR} {DROP_CONFIG.brandName} ({DROP_CONFIG.domain}).
            All rights reserved.
          </p>
          <p>CALGARY, ALBERTA · 25 BOXES PER WEEKEND</p>
        </div>
      </div>
    </footer>
  )
}
