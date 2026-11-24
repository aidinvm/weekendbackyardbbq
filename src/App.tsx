import { useState } from 'react'
import { BoxAnatomy } from './components/BoxAnatomy'
import { CheckoutModal } from './components/CheckoutModal'
import { CorporateGifting } from './components/CorporateGifting'
import { CraftPillars } from './components/CraftPillars'
import { FaqSection } from './components/FaqSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileStickyBar } from './components/MobileStickyBar'
import { ScarcityBar } from './components/ScarcityBar'
import { TwoTierCraft } from './components/TwoTierCraft'
import { VipWaitlist } from './components/VipWaitlist'
import { WeekendRhythm } from './components/WeekendRhythm'
import {
  DROP_CONFIG,
  getCheckoutUrlForDay,
  type FulfillmentDayId,
} from './config/drop'

export default function App() {
  const [selectedDay, setSelectedDay] = useState<FulfillmentDayId>('saturday')
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false)

  function handleReserveClick() {
    if (DROP_CONFIG.isSoldOut) {
      document.getElementById('vip-waitlist')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    const checkoutUrl = getCheckoutUrlForDay(selectedDay)
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank', 'noopener,noreferrer')
      return
    }

    setCheckoutModalOpen(true)
  }

  return (
    <div className="slate-grain min-h-screen bg-obsidian text-alabaster">
      <ScarcityBar />
      <Header onReserveClick={handleReserveClick} />

      <main>
        <Hero
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          onReserveClick={handleReserveClick}
        />
        <CraftPillars />
        <BoxAnatomy onReserveClick={handleReserveClick} />
        <TwoTierCraft />
        <WeekendRhythm />
        <CorporateGifting />
        <FaqSection />
        <VipWaitlist />
      </main>

      <Footer />
      <MobileStickyBar
        selectedDay={selectedDay}
        onReserveClick={handleReserveClick}
      />
      <CheckoutModal
        open={checkoutModalOpen}
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
        onClose={() => setCheckoutModalOpen(false)}
      />
    </div>
  )
}
