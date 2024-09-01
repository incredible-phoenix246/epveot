import React from 'react'
import {
  Hero,
  WelcomeSection,
  ProfessionalServices,
  ServicesSection,
  WhyChooseUs,
  RecentWorks,
} from '@/modules/home'

const page = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ProfessionalServices />
      <ServicesSection />
      <WhyChooseUs />
      <RecentWorks />
    </>
  )
}

export default page
