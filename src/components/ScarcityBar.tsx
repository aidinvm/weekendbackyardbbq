import { useEffect, useState } from 'react'
import { DROP_CONFIG } from '../config/drop'

interface CountdownState {
  days: number
  hours: number
  minutes: number
  seconds: number
  expired: boolean
}

function getTimeRemaining(targetIso: string): CountdownState {
  const diff = new Date(targetIso).getTime() - Date.now()
  if (Number.isNaN(diff) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, expired: false }
}

const pad = (n: number) => String(n).padStart(2, '0')

export function ScarcityBar() {
  const [remaining, setRemaining] = useState<CountdownState>(() =>
    getTimeRemaining(DROP_CONFIG.cutoffIso),
  )

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemaining(getTimeRemaining(DROP_CONFIG.cutoffIso))
    }, 1000)
    return () => window.clearInterval(interval)
  }, [])

  const closed = DROP_CONFIG.isSoldOut || remaining.expired

  return (
    <div
      id="scarcity-bar"
      role="region"
      aria-label="Current drop status"
      className="sticky top-0 z-50 border-b hairline bg-[#131210]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2.5 text-[11px] tracking-[0.14em] uppercase font-mono sm:px-6">
        <div className="flex items-center gap-3 text-alabaster">
          <span className="text-saffron font-medium">
            CALGARY DROP {DROP_CONFIG.dropNumber}
          </span>
          <span className="text-parchment-muted" aria-hidden="true">
            //
          </span>
          <span>
            {closed
              ? 'SOLD OUT — JOIN VIP FOR NEXT DROP'
              : `${DROP_CONFIG.totalBoxCap} BOXES ONLY — CUTOFF: ${DROP_CONFIG.cutoffLabel}`}
          </span>
        </div>

        {!closed ? (
          <div className="hidden items-center gap-2 text-ash md:flex" aria-live="polite">
            <span className="text-parchment-muted">CLOSES IN</span>
            <span className="text-alabaster tabular-nums">
              {remaining.days}D : {pad(remaining.hours)}H : {pad(remaining.minutes)}M :{' '}
              {pad(remaining.seconds)}S
            </span>
          </div>
        ) : (
          <a
            href="#vip-waitlist"
            className="text-terracotta hover:text-terracotta-hover underline underline-offset-4 transition-colors"
          >
            GET TUESDAY EARLY ACCESS
          </a>
        )}
      </div>
    </div>
  )
}
