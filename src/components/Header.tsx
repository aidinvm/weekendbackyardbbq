import { ArrowUpRight } from 'lucide-react'
import { DROP_CONFIG } from '../config/drop'

interface HeaderProps {
  onReserveClick: () => void
}

const NAV_LINKS = [
  { label: 'Inside the Box', href: '#anatomy' },
  { label: 'Two-Tier Craft', href: '#two-tier' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Gifting', href: '#corporate-gifting' },
  { label: 'FAQ', href: '#faq' },
]

export function Header({ onReserveClick }: HeaderProps) {
  return (
    <header className="border-b hairline bg-obsidian/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          id="brand-home-link"
          href="#top"
          className="group flex flex-col leading-none focus:outline-none"
        >
          <span className="font-serif text-xl font-medium tracking-[0.04em] text-alabaster sm:text-2xl">
            Weekend Backyard BBQ
          </span>
          <span className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-parchment-muted transition-colors group-hover:text-ash">
            Fire &amp; Flour · Calgary
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-[0.12em] uppercase text-ash transition-colors hover:text-alabaster"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          id="header-reserve-btn"
          type="button"
          onClick={onReserveClick}
          className="inline-flex cursor-pointer items-center gap-2 bg-terracotta px-4 py-2.5 text-xs font-medium tracking-[0.1em] uppercase text-alabaster transition-colors hover:bg-terracotta-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian sm:px-5"
        >
          <span>
            {DROP_CONFIG.isSoldOut ? 'Join VIP List' : `Reserve — $${DROP_CONFIG.boxPriceCad}`}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
