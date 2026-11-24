import { Mail, MessageSquare } from 'lucide-react'
import { DROP_CONFIG } from '../config/drop'

export function CorporateGifting() {
  const mailtoSubject = encodeURIComponent(
    `Multi-Box Group Order Inquiry (4+ Boxes) — ${DROP_CONFIG.brandName}`,
  )
  const mailtoBody = encodeURIComponent(
    `Hi Weekend Backyard BBQ team,\n\nI'd like to book a multi-box order (4+ boxes) for:\n- Preferred Date (Sat/Sun): \n- Number of Boxes: \n- Custom Wax-Sealed Card Message / Branding: \n- Pickup or Delivery Address(es): \n\nThanks!`,
  )
  const smsBody = encodeURIComponent(
    `Hi! I'd like to inquire about a 4+ box group / realtor closing gift order for this weekend.`,
  )

  return (
    <section
      id="corporate-gifting"
      aria-labelledby="corporate-heading"
      className="border-b hairline bg-obsidian py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border hairline-strong bg-hearth p-7 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-saffron">
                Realtor Closing Gifts · Executive Hosting · Private Tables
              </p>
              <h2
                id="corporate-heading"
                className="mt-3 font-serif text-3xl font-normal leading-tight tracking-[-0.015em] text-alabaster sm:text-5xl"
              >
                Sending Closing Gifts or Hosting a Weekend Gathering?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ash sm:text-base">
                Order 4+ boxes for Saturday or Sunday delivery and we’ll include
                custom-branded, wax-sealed cotton tasting cards for your clients,
                partners, or dinner guests—delivered directly to one address or split
                across Calgary drop-offs.
              </p>
              <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase text-parchment-muted">
                RESERVE MULTI-BOX ORDERS BY WEDNESDAY 5:00 PM FOR CUSTOM CARDS
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5">
              <a
                id="corporate-email-cta"
                href={`mailto:${DROP_CONFIG.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="inline-flex items-center justify-center gap-2.5 bg-alabaster px-6 py-4 text-xs font-semibold tracking-[0.12em] uppercase text-obsidian transition-colors hover:bg-alabaster/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-alabaster"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Book a Multi-Box Group Order</span>
              </a>

              <a
                id="corporate-sms-cta"
                href={`sms:${DROP_CONFIG.contactPhoneHref}?&body=${smsBody}`}
                className="inline-flex items-center justify-center gap-2.5 border hairline-strong bg-obsidian px-6 py-3.5 text-xs font-medium tracking-[0.12em] uppercase text-alabaster transition-colors hover:border-alabaster/45 hover:bg-hearth-raised focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                <MessageSquare className="h-4 w-4 text-saffron" aria-hidden="true" />
                <span>Text Kitchen Concierge · {DROP_CONFIG.contactPhoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
