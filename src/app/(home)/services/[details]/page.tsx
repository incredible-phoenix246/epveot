import React from 'react'
import { Hero, HowWeWork } from '@/modules/service'
import Image from 'next/image'
import ElectricalServices from './new'
import { TeamSection } from '../../team'
const page = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center w-full px-1 md:container py-20">
        <ElectricalServices />
      </div>
      <TeamSection />
    </>
  )
}

export default page
