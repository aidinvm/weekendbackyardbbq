# Deploying `weekendbackyardbbq.com` via Git & Vercel

This project is a zero-backend **Vite + React + TypeScript + Tailwind CSS v4** static site engineered for instant Git → Vercel deployment (just like `esinnov.com`).

---

## 1. Configure Your Live Drop (`src/config/drop.ts`)

Open `src/config/drop.ts` — every weekly setting lives in this single file:

1. **Stripe Payment Links:**
   - **Recommended (prevents Saturday overload):** Create two Stripe Payment Links in Stripe Dashboard:
     - `Weekend Feast Box — Saturday Nov 28` (Inventory Cap: `12`) → paste into `days[0].stripePaymentLinkUrl`
     - `Weekend Feast Box — Sunday Nov 29` (Inventory Cap: `13`) → paste into `days[1].stripePaymentLinkUrl`
   - **Alternative (single shared link):** Create one Payment Link with Inventory Cap `25` and a custom `Preferred Weekend Day` dropdown (`Saturday (Nov 28)` / `Sunday (Nov 29)`) → paste into `stripePaymentLinkUrl`.
   - Enable the **$18 Extra Sourdough Barbari + Labneh Jar** Cross-sell/Upsell, `$0 NW Calgary Pickup`, and `$8 NW & Inner-City SW Delivery` shipping rates in Stripe.
2. **VIP SMS Waitlist Form:**
   - Paste your **Make.com Webhook URL** into `waitlistWebhookUrl` (to append straight to your `VIP_SMS_List` Google Sheet tab), **or** paste a free **Web3Forms Access Key** into `web3FormsAccessKey`.
3. **Contact Info:**
   - Update `contactEmail`, `contactPhoneDisplay`, and `contactPhoneHref` for Corporate & Realtor 4+ box orders.

---

## 2. Push to GitHub & Deploy on Vercel

From your local terminal (or once GitHub is connected):

```bash
# 1. Create a new empty repository on GitHub (e.g. weekend-backyard-bbq)
# 2. Add the remote and push
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/weekend-backyard-bbq.git
git branch -M main
git push -u origin main
```

Then in **Vercel**:
1. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → select `weekend-backyard-bbq`.
2. Framework Preset is auto-detected as **Vite** (`npm run build` → `dist`). Click **Deploy**.
3. Go to **Project Settings → Domains** → add `weekendbackyardbbq.com` and `www.weekendbackyardbbq.com`.
4. Update DNS records at your domain registrar (`A` record `@` → `76.76.21.21`, `CNAME` `www` → `cname.vercel-dns.com`, or follow Vercel's exact prompt).

---

## 3. 60-Second Weekly Drop Workflow

- **When Drop 01 Sells Out Early:** Set `isSoldOut: true` in `src/config/drop.ts`, commit, and `git push`. Vercel redeploys in ~15 seconds, automatically locking CTAs into VIP Waitlist mode.
- **Launching Drop 02:** Update `dropNumber: '02'`, `cutoffIso`, `days` dates, and fresh Stripe Payment Link URLs in `src/config/drop.ts`, set `isSoldOut: false`, commit, and `git push`.
