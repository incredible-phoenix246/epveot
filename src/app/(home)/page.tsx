import React from 'react'
import {
  Hero,
  WelcomeSection,
  ProfessionalServices,
  ServicesSection,
  WhyChooseUs,
  RecentWorks,
  TestimonialSection,
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
      <TestimonialSection />
    </>
  )
}

export default page
