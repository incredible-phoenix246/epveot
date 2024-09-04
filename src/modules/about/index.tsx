'use client'
import React from 'react'
import Image from 'next/image'
import * as Icon from '@/components/Icons'

export const Hero = () => {
  return (
    <Image
      src="/aboutbg.png"
      alt="banner"
      className="object-cover w-full md:container"
      loading="lazy"
      height={1920}
      width={435}
    />
  )
}

export const WelcomeHeader = () => (
  <header className="flex flex-col max-w-full text-brand-blue w-[515px]">
    <div className="flex flex-col justify-center self-start px-4 py-2 text-lg font-medium bg-zinc-100 min-h-[45px]">
      <div className="flex gap-2.5 items-center min-h-[29px]">
        <Icon.HatIcon />
        <span className="self-stretch my-auto font-unica">Welcome EPVEOT</span>
      </div>
    </div>
    <h1 className="mt-2.5 text-5xl font-extrabold max-md:max-w-full max-md:text-4xl">
      We Provide Your Future
    </h1>
  </header>
)

const ReasonItem = ({ text }: { text: string }) => (
  <div className="flex gap-3.5 max-w-full">
    <Icon.CheckIvon />
    <div className="grow shrink my-auto">{text}</div>
  </div>
)

const features = [
  {
    text: 'We provide 24/7 service',
  },
  {
    text: 'Qualified Agents',
  },
  {
    text: 'Greate Technology',
  },
  {
    text: '35 Years Experiance',
  },
]

export const AboutUs = () => {
  return (
    <main className="flex max-md:flex-col px-4 md:container items-start mt-5">
      <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[492px] max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[600px]">
          <WelcomeHeader />
          <p className="mt-5 text-lg text-zinc-500 max-md:max-w-full">
            We&apos;re Commited to Quality Proactively envisined multimeda based
            exptis and cross media growth strategies seamlessly visualized
            quality a intellectual capitals withouts superiors collaboration
            ideas sharing holistically pontificated installed base portals after
            maintainable products.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 items-start self-stretch text-lg text-blue-950 max-md:max-w-full max-md:my-5">
          <div className="flex flex-col min-w-[240px] w-[252px]">
            <ReasonItem {...features[0]} />
            <div className="mt-5">
              <ReasonItem {...features[1]} />
            </div>
          </div>
          <div className="flex flex-col w-[219px]">
            <ReasonItem {...features[2]} />
            <div className="mt-5">
              <ReasonItem {...features[3]} />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 max-w-full w-[420px] max-md:mt-10">
          <div className="flex gap-5 items-center">
            <div className="self-stretch my-auto text-4xl leading-none text-gray-800">
              ERNEST
            </div>
            <div className="flex shrink-0 self-stretch my-auto w-px bg-stone-300 h-[53px]" />
            <div className="flex flex-col self-stretch my-auto rounded-none w-[163px]">
              <div className="text-xl max-md:text-base font-extrabold text-blue-950 max-md:mr-2">
                ERNEST CHIBUKE
              </div>
              <div className="mt-2 text-base font-medium text-amber-400">
                Founder of Epveot
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 items-center mt-5 w-full max-w-[516px] max-md:max-w-full">
          <a
            href="#about"
            className="px-3 rounded-md py-3 text-base font-semibold text-center bg-amber-400 text-blue-950 max-md:px-5"
          >
            More About Us
          </a>
          <div className="flex flex-col grow shrink self-stretch min-w-[240px] w-[247px]">
            <p className="text-base text-blue-950">
              For Emergency Fixing or Appointment
            </p>
            <a
              href="tel:+031234567890"
              className="text-2xl font-extrabold leading-loose text-amber-400"
            >
              (+234) 8059149897
            </a>
          </div>
        </div>
      </div>
      <Image
        src="/welcome.png"
        width={540}
        height={540}
        alt="hero imaga"
        className="object-contain grow shrink self-stretch my-auto aspect-[0.99] min-w-[240px] w-[432px] max-md:max-w-full"
      />
    </main>
  )
}
