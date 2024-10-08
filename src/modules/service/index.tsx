'use client'
import Image from 'next/image'
import * as Icon from '@/components/Icons'
import { cn } from '@/utils'
import { ChevronRight } from 'lucide-react'

export const Hero = () => {
  return (
    <Image
      src="/service.png"
      alt="banner"
      className="object-cover w-full md:container"
      loading="lazy"
      height={1920}
      width={435}
    />
  )
}

const ReasonItem = ({ title }: { title: string }) => (
  <div className="flex gap-3.5 max-w-full first:mt-0">
    <Icon.CheckIvon />
    <div className="grow shrink my-auto">{title}</div>
  </div>
)
interface Service {
  title: string
}

const servicesq: Service[] = [
  { title: 'Commercial Services' },
  { title: 'Residential Services' },
  { title: 'Industrial Services' },
]

const ServiceCard = ({
  title,
  isActive,
}: {
  title: string
  isActive: boolean
}) => (
  <div
    className={cn(
      'flex flex-col justify-center items-center p-5 cursor-pointer',
      isActive ? 'bg-brand-main' : 'bg-zinc-100',
      !isActive && 'mt-2.5'
    )}
  >
    <div className="flex gap-5 items-center min-h-[25px]">
      <div className="self-stretch my-auto">{title}</div>
      <ChevronRight className="object-contain shrink-0 self-stretch my-auto" />
    </div>
  </div>
)

const services: Service[] = [
  { title: 'Quantity survey' },
  { title: 'Estimations' },
  { title: 'Outdoor/Parking Lot Lighting' },
  { title: 'Outlets, Circuits and Rewiring' },
  { title: 'HID Lighting and Control' },
  { title: 'Lighting Design' },
  { title: 'Bill of Quality' },
  { title: 'Real estate consulation' },
  { title: 'Data/Communications Cabling' },
  { title: 'Ballast/Lamp Replacing' },
]

const ServiceList = () => (
  <div className="flex flex-wrap gap-10 items-start mt-12 max-w-full text-lg font-medium leading-none text-zinc-500 w-[726px] max-md:mt-10">
    <div className="flex flex-col gap-3 grow shrink items-start min-w-[240px] w-[253px]">
      {services.slice(0, 5).map((service, index) => (
        <ReasonItem key={index} title={service.title} />
      ))}
    </div>
    <div className="flex flex-col gap-4 grow shrink items-start min-w-[240px] w-[246px]">
      {services.slice(5).map((service, index) => (
        <ReasonItem key={index} title={service.title} />
      ))}
    </div>
  </div>
)

const Discount = () => (
  <div className="flex flex-col mt-6 max-w-full text-center text-white w-[335px] max-md:mt-10">
    <div className="flex relative flex-col justify-center px-11 py-20 w-full aspect-[0.898] max-md:px-5">
      <Image
        src="/image2.png"
        alt="Background for discount banner"
        width={670}
        height={746}
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center">
        <h4 className="text-xl font-bold leading-8">
          Providing Varity <br /> Electical Services
        </h4>
        <div className="flex flex-col mt-6 max-w-full text-blue-950 w-[249px]">
          <div className="flex flex-col px-10 py-3.5 bg-amber-400 max-md:px-5">
            <div className="self-center text-lg">Discount available</div>
            <div className="mt-1.5 text-xl font-extrabold">
              Rewiring Services
            </div>
          </div>
        </div>
        <button className="mt-6 text-xl font-bold leading-none">
          Click to Get Discout
        </button>
      </div>
    </div>
  </div>
)

export const HowWeWork = () => {
  return (
    <section className="md:container px-2 flex flex-col items-center mt-5 md:mt-[70px]">
      <div className="flex flex-col items-center max-w-full w-[1199px]">
        <div className="flex flex-col items-center max-w-full w-[687px] mt-8">
          <div className="flex flex-col items-center max-w-full text-brand-blue">
            <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-white min-h-[45px]">
              <div className="flex gap-2.5 items-center min-h-[29px]">
                <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]">
                  <Icon.EditIcon />
                </div>
                <span className="self-stretch my-auto">Our Services</span>
              </div>
            </div>
            <h2 className="mt-2.5 text-5xl font-extrabold text-center max-md:text-4xl font-unica">
              How We Works
            </h2>
          </div>
          <p className="mt-5 text-lg text-center text-zinc-500 max-md:max-w-full">
            At the heart of every great space is not just design and materials,
            but the vision to transform an idea into a lasting reality. We
            don&apos;t just build structure- we create enviroment that elevate
            the way you live and work
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col grow shrink items-center min-w-[240px] max-md:w-full w-[268px]">
            <div className="flex flex-col max-w-full text-xl font-bold text-blue-950 w-[335px]">
              {servicesq.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  isActive={index === 0}
                />
              ))}
            </div>
            <Discount />
          </div>
          <div className="flex flex-col items-center justify-center grow shrink min-w-[240px] w-[748px] max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[815px]">
              <div className="flex flex-col w-full">
                <h3 className="text-3xl font-bold text-blue-950 max-md:max-w-full">
                  We can help you with the following services:
                </h3>
                <p className="mt-2.5 text-lg leading-7 text-zinc-500 max-md:max-w-full">
                  Every Space tells a story weather it&apos;s the comfort of a
                  well designed home ot the effecieny of a functional workspace.
                  Our goal is to help you shape that story by offeringservices
                  that bring your bision to the life and solve your unique needs
                </p>
              </div>

              <Image
                src="/servicew.png"
                alt="new"
                className="object-contain mt-8 w-full aspect-[1.62]"
                width={326}
                height={218}
              />
            </div>
            <ServiceList />
          </div>
        </div>
      </div>
    </section>
  )
}
