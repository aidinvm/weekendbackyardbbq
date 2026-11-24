import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DROP_CONFIG, type FulfillmentDayId } from '../config/drop'

interface MobileStickyBarProps {
  selectedDay: FulfillmentDayId
  onReserveClick: () => void
}

export function MobileStickyBar({
  selectedDay,
  onReserveClick,
}: MobileStickyBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  const activeDay =
    DROP_CONFIG.days.find((d) => d.id === selectedDay) ?? DROP_CONFIG.days[0]

  return (
    <div
      id="mobile-sticky-reserve"
      className="fixed inset-x-0 bottom-0 z-40 border-t hairline-strong bg-obsidian/95 px-4 py-3 backdrop-blur-md md:hidden"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-saffron">
            Drop {DROP_CONFIG.dropNumber} · {activeDay.shortDate}
          </p>
          <p className="font-serif text-lg leading-tight text-alabaster">
            ${DROP_CONFIG.boxPriceCad} CAD{' '}
            <span className="font-sans text-xs text-ash">· Feeds 2–3</span>
          </p>
        </div>

        <button
          id="mobile-sticky-reserve-btn"
          type="button"
          onClick={onReserveClick}
          className="inline-flex cursor-pointer items-center gap-2 bg-terracotta px-4 py-3 text-xs font-semibold tracking-[0.1em] uppercase text-alabaster transition-colors hover:bg-terracotta-hover"
        >
          <span>{DROP_CONFIG.isSoldOut ? 'Join VIP' : 'Reserve Box'}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
