import { ProfessionalServices, ServicesSection } from '@/modules/home'
import { Hero, HowWeWork } from '@/modules/service'
import React from 'react'
import How from '@/modules/service/card'

const page = () => {
  return (
    <>
      <Hero />
      <ProfessionalServices />
      <ServicesSection />
      <HowWeWork />
      {/* <How /> */}
    </>
  )
}

export default page
