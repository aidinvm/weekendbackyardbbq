/**
 * WEEKLY DROP CONFIGURATION — SINGLE SOURCE OF TRUTH
 * --------------------------------------------------
 * Update this file once per week (60 seconds), commit, and push to Git.
 * Vercel automatically deploys your updated drop to weekendbackyardbbq.com.
 */

export type FulfillmentDayId = 'saturday' | 'sunday'

export interface FulfillmentDay {
  id: FulfillmentDayId
  label: string
  shortDate: string
  fullDate: string
  window: string
  /**
   * Optional per-day Stripe Payment Link (Recommended to prevent Saturday overload).
   * If left empty, falls back to DROP_CONFIG.stripePaymentLinkUrl.
   */
  stripePaymentLinkUrl: string
  soldOut?: boolean
}

export const DROP_CONFIG = {
  brandName: 'Weekend Backyard BBQ',
  studioSubtitle: 'Fire & Flour · Small-Batch Culinary Studio',
  domain: 'weekendbackyardbbq.com',
  city: 'Calgary, AB',

  // Active Drop Identity
  dropNumber: '01',
  dropTitle: 'Weekend Feast Box (Drop 01)',
  totalBoxCap: 25,
  isSoldOut: false, // Flip to `true` + push to Git to instantly lock checkout & switch to VIP Waitlist mode

  // Pricing (CAD)
  boxPriceCad: 85,
  feedsLabel: 'Feeds 2–3 Generously',
  perPersonEstimate: '$28–$42 / person',
  pickupFeeCad: 0,
  deliveryFeeCad: 8,
  upsellItem: {
    name: 'Extra 12" Sourdough Barbari + 4 oz Whipped Herb Labneh Jar',
    priceCad: 18,
    note: 'Addable in one click inside Stripe Checkout',
  },

  // Order Cutoff (Thursday 8:00 PM Calgary MST = UTC-07:00)
  cutoffLabel: 'THURSDAY 8:00 PM MST',
  cutoffIso: '2026-11-26T20:00:00-07:00',

  // Fulfillment Windows
  pickupSummary: 'Free Pickup — NW Calgary Commissary (4:30–6:00 PM)',
  deliverySummary: 'Weekend Courier — NW & Inner-City SW Calgary (4:30–6:30 PM)',
  deliveryNeighborhoods: [
    'Kensington & Hillhurst',
    'Briar Hill & West Hillhurst',
    'Brentwood & Varsity',
    'University District',
    'Bridgeland & Crescent Heights',
    'Beltline & Mission',
    'Mount Royal & Bankview',
    'Marda Loop & Altadore',
  ],

  /**
   * STRIPE PAYMENT LINK(S)
   * Paste your live Stripe Payment Link URL here (e.g. "https://buy.stripe.com/xxxxxxxx").
   * While empty, clicking "Reserve Your Weekend Box" opens an interactive Checkout Preview
   * so you can review the experience before going live.
   */
  stripePaymentLinkUrl: '',

  days: [
    {
      id: 'saturday',
      label: 'Saturday',
      shortDate: 'Nov 28',
      fullDate: 'Saturday, Nov 28',
      window: '4:30 – 6:30 PM',
      stripePaymentLinkUrl: '', // Optional: paste a dedicated Saturday cap link (e.g. 12 boxes)
      soldOut: false,
    },
    {
      id: 'sunday',
      label: 'Sunday',
      shortDate: 'Nov 29',
      fullDate: 'Sunday, Nov 29',
      window: '4:30 – 6:30 PM',
      stripePaymentLinkUrl: '', // Optional: paste a dedicated Sunday cap link (e.g. 13 boxes)
      soldOut: false,
    },
  ] as FulfillmentDay[],

  /**
   * VIP SMS WAITLIST CONNECTOR (Zero-Backend)
   * Option A (Web3Forms): Paste your Web3Forms access key (free at web3forms.com).
   * Option B (Make.com / Zapier Webhook): Paste your webhook URL to append directly to Google Sheets (`VIP_SMS_List`).
   */
  waitlistWebhookUrl: '',
  web3FormsAccessKey: '',

  /**
   * CORPORATE / REALTOR GIFTING DIRECT CONTACT
   * Replace with your real phone number & email before pushing live.
   */
  contactEmail: 'orders@weekendbackyardbbq.com',
  contactPhoneDisplay: '(403) 555-0194',
  contactPhoneHref: '+14035550194',
  instagramHandle: '@weekendbackyardbbq',
} as const

export function getCheckoutUrlForDay(dayId: FulfillmentDayId): string {
  const day = DROP_CONFIG.days.find((d) => d.id === dayId)
  return (day?.stripePaymentLinkUrl || DROP_CONFIG.stripePaymentLinkUrl).trim()
}
