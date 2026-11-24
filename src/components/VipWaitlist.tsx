import { CheckCircle2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { DROP_CONFIG } from '../config/drop'

function formatCanadianPhone(input: string): string {
  const digits = input.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export function VipWaitlist() {
  const [phone, setPhone] = useState('')
  const [firstName, setFirstName] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle',
  )
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 10) {
      setErrorMessage('Please enter a valid 10-digit Calgary / Canadian mobile number.')
      setStatus('error')
      return
    }

    setErrorMessage('')
    setStatus('submitting')

    try {
      if (DROP_CONFIG.waitlistWebhookUrl) {
        const res = await fetch(DROP_CONFIG.waitlistWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: firstName.trim() || 'VIP Guest',
            phone: `+1${digits}`,
            formattedPhone: formatCanadianPhone(digits),
            source: DROP_CONFIG.domain,
            dropNumber: DROP_CONFIG.dropNumber,
            timestamp: new Date().toISOString(),
          }),
        })
        if (!res.ok) throw new Error('Webhook rejected request')
      } else if (DROP_CONFIG.web3FormsAccessKey) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: DROP_CONFIG.web3FormsAccessKey,
            subject: `VIP Drop List Signup — ${DROP_CONFIG.brandName}`,
            name: firstName.trim() || 'VIP Guest',
            phone: `+1${digits}`,
            message: `VIP SMS Early Access signup from ${DROP_CONFIG.domain}`,
          }),
        })
        if (!res.ok) throw new Error('Web3Forms rejected request')
      } else {
        // Local preview fallback until webhook or Web3Forms key is configured in src/config/drop.ts
        await new Promise((resolve) => window.setTimeout(resolve, 450))
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage(
        'We could not save your number right now. Please try again or text us directly.',
      )
    }
  }

  return (
    <section
      id="vip-waitlist"
      aria-labelledby="vip-heading"
      className="relative overflow-hidden border-b hairline bg-obsidian py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px] ember-glow" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-saffron">
          Tuesday 10:00 AM Private Release
        </p>
        <h2
          id="vip-heading"
          className="mt-3 font-serif text-4xl font-normal tracking-[-0.015em] text-alabaster sm:text-5xl"
        >
          Never Miss a Weekend Drop.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
          VIP list members get the private order link every Tuesday at 10:00 AM—24
          hours before we post publicly. One text per week. Opt out anytime.
        </p>

        {status === 'success' ? (
          <div
            role="status"
            className="mx-auto mt-8 max-w-lg border hairline-strong bg-hearth p-6 text-left"
          >
            <div className="flex items-start gap-3.5">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-saffron"
                aria-hidden="true"
              />
              <div>
                <p className="font-serif text-2xl text-alabaster">
                  You’re on the VIP Drop List.
                </p>
                <p className="mt-1.5 text-sm text-ash">
                  Watch <span className="font-mono text-alabaster">{phone}</span>{' '}
                  Tuesday morning at 10:00 AM MST for the private link before Drop{' '}
                  {String(Number(DROP_CONFIG.dropNumber) + 1).padStart(2, '0')} opens
                  publicly.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form
            id="vip-sms-form"
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-9 max-w-xl"
          >
            <div className="grid gap-3 sm:grid-cols-12">
              <div className="sm:col-span-4">
                <label htmlFor="vip-first-name" className="sr-only">
                  First name (optional)
                </label>
                <input
                  id="vip-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border hairline-strong bg-hearth px-4 py-3.5 text-sm text-alabaster placeholder:text-parchment-muted focus:border-saffron focus:outline-none"
                />
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="vip-mobile-input" className="sr-only">
                  Mobile number
                </label>
                <input
                  id="vip-mobile-input"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  placeholder="(403) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(formatCanadianPhone(e.target.value))}
                  className="w-full border hairline-strong bg-hearth px-4 py-3.5 font-mono text-sm text-alabaster placeholder:text-parchment-muted focus:border-saffron focus:outline-none"
                />
              </div>

              <div className="sm:col-span-4">
                <button
                  id="vip-submit-btn"
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full cursor-pointer bg-terracotta px-5 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase text-alabaster transition-colors hover:bg-terracotta-hover disabled:cursor-wait disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                >
                  {status === 'submitting' ? 'Joining…' : 'Join VIP Drop List'}
                </button>
              </div>
            </div>

            {status === 'error' && errorMessage && (
              <p role="alert" className="mt-3 text-xs text-terracotta">
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
