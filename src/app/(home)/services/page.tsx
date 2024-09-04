import { ProfessionalServices, ServicesSection } from '@/modules/home'
import { Hero, HowWeWork } from '@/modules/service'
import React from 'react'


const page = () => {
  return (
    <>
      <Hero />
      <ProfessionalServices />
      <ServicesSection />
      <HowWeWork />
    </>
  )
}

export default page
