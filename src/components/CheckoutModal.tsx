import { Check, ExternalLink, X } from 'lucide-react'
import { useEffect } from 'react'
import { DROP_CONFIG, type FulfillmentDayId } from '../config/drop'

interface CheckoutModalProps {
  open: boolean
  selectedDay: FulfillmentDayId
  onSelectDay: (day: FulfillmentDayId) => void
  onClose: () => void
}

export function CheckoutModal({
  open,
  selectedDay,
  onSelectDay,
  onClose,
}: CheckoutModalProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  const activeDay =
    DROP_CONFIG.days.find((d) => d.id === selectedDay) ?? DROP_CONFIG.days[0]

  return (
    <div
      id="checkout-preview-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg border hairline-strong bg-hearth p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b hairline pb-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-saffron">
              Stripe Checkout Handoff · Drop {DROP_CONFIG.dropNumber}
            </p>
            <h3
              id="checkout-modal-title"
              className="mt-1 font-serif text-3xl text-alabaster"
            >
              {DROP_CONFIG.dropTitle}
            </h3>
          </div>

          <button
            id="close-checkout-modal-btn"
            type="button"
            onClick={onClose}
            aria-label="Close reservation dialog"
            className="cursor-pointer border hairline p-2 text-ash transition-colors hover:border-alabaster/40 hover:text-alabaster"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Day confirmation */}
        <div className="mt-5">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-ash">
            Selected Fulfillment Day
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2.5">
            {DROP_CONFIG.days.map((day) => {
              const active = day.id === selectedDay
              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => onSelectDay(day.id)}
                  className={`cursor-pointer border px-3.5 py-2.5 text-left transition-colors ${
                    active
                      ? 'border-alabaster/70 bg-hearth-raised text-alabaster'
                      : 'hairline bg-obsidian/60 text-ash hover:text-alabaster'
                  }`}
                >
                  <span className="block text-sm font-medium">{day.fullDate}</span>
                  <span className="font-mono text-[11px] text-parchment-muted">
                    {day.window}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-5 space-y-2.5 border-y hairline py-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-alabaster">1× Weekend Feast Box</span>
            <span className="font-mono text-alabaster">
              ${DROP_CONFIG.boxPriceCad}.00 CAD
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-ash">
            <span>Pickup (NW Calgary) / Courier (NW &amp; Inner SW)</span>
            <span className="font-mono">$0 or +${DROP_CONFIG.deliveryFeeCad}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-ash">
            <span>Optional Upsell: Extra Sourdough + Labneh</span>
            <span className="font-mono">+${DROP_CONFIG.upsellItem.priceCad}</span>
          </div>
        </div>

        {/* Setup Notice for Site Owner */}
        <div className="mt-5 border border-saffron/30 bg-obsidian p-4 text-xs leading-relaxed text-ash">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-saffron">
            Ready to Connect Live Stripe Checkout
          </p>
          <p className="mt-1.5">
            Paste your Stripe Payment Link into{' '}
            <code className="bg-hearth px-1.5 py-0.5 font-mono text-alabaster">
              src/config/drop.ts
            </code>{' '}
            (<code className="font-mono text-alabaster">stripePaymentLinkUrl</code> or
            per-day links) and push to Git. Clicking Reserve will then open Stripe
            Checkout directly for <strong className="text-alabaster">{activeDay.fullDate}</strong>.
          </p>
          <ul className="mt-2.5 space-y-1 text-[11px] text-parchment-muted">
            <li className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-saffron" aria-hidden="true" />
              Hard 25-box inventory cap enforced automatically by Stripe
            </li>
            <li className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-saffron" aria-hidden="true" />
              Webhook triggers Make.com → Google Sheets + confirmation SMS
            </li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <a
            href="#vip-waitlist"
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-2 bg-terracotta px-5 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-alabaster transition-colors hover:bg-terracotta-hover"
          >
            <span>Join VIP Drop List</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer border hairline-strong px-5 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-ash transition-colors hover:text-alabaster"
          >
            Keep Exploring
          </button>
        </div>
      </div>
    </div>
  )
}
