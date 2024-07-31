import React from 'react'
import BenefitsSection from './Components/Sections/BenefitsSection'
import ExclusiveBar from './Components/Sections/ExclusiveBar'
import HighlightSection from './Components/Sections/HighlightSection'
import HeroSection from './Components/Sections/HeroSection'
import Footer from './Components/Sections/Footer'
import TestimonialSection from './Components/Sections/TestimonialSection'
import ServiceSection from './Components/Sections/ServiceSection'
import SubscriptionPlan from './Components/Sections/SubcriptionPlan'
import AboutUsSection from './Components/Sections/AboutUsSection'
import Navbar from './Components/Sections/Navbar'
import Facts from './Components/Sections/Facts'

const App = () => {
  return (
    <div className='bg-black'>
      <ExclusiveBar />
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <Facts />
      <ServiceSection />
      <SubscriptionPlan />
      <BenefitsSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default App
