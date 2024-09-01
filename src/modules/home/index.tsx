'use client'

import React, { FC, useState } from 'react'
import * as Icon from '@/components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn, shrinkString } from '@/utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules'

const Hero = () => {
  return (
    <section className="flex flex-col w-full bg-stone-300 max-md:max-w-full">
      <div className="flex relative flex-col justify-center items-start w-full max-h-[800px] min-h-[500px] max-md:max-w-full">
        <Image
          src="/hero.png"
          alt="banner"
          className="object-cover absolute inset-0 size-full"
          loading="lazy"
          height={1920}
          width={924}
        />
        <div className="flex relative flex-col container">
          <div className="flex flex-col w-full text-white">
            <div className="flex flex-col justify-center self-start px-4 py-2 text-lg font-medium bg-white bg-opacity-20 min-h-[45px]">
              <div className="flex gap-2.5 items-center min-h-[29px] max-md:max-w-full">
                <Icon.SettingsIcon />
                <div className="self-stretch my-auto text-xs md:text-base">
                  We Provide Electric Services For Industrial Project
                </div>
              </div>
            </div>
            <h1 className="mt-5 md:text-6xl text-2xl md:font-extrabold font-bold max-md:max-w-full w-[62%]">
              We Are Professional Quality Services
            </h1>
          </div>
          <Button asChild className="w-[250px] mt-8 py-4">
            <Link href="/services/?path=services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const WelcomeHeader = () => (
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

const WelcomeSection = () => {
  return (
    <section className="flex flex-wrap gap-10 items-center container max-w-[1200px] md:py-[40px] py-[20px]">
      <Image
        src="/welcome.png"
        width={540}
        height={540}
        alt="hero imaga"
        className="object-contain grow shrink self-stretch my-auto aspect-[0.99] min-w-[240px] w-[432px] max-md:max-w-full"
      />
      <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[492px] max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[600px]">
          <WelcomeHeader />
          <p className="mt-5 text-lg text-zinc-500 max-md:max-w-full">
            Our company offers reliable service and maintenance for a variety of
            systems and facilities. We provide regular inspections, preventative
            maintenance
            <br />
            <br />
            and prompt repairs to ensure optimal performance and longevity of
            your systems,
          </p>
        </div>
        <div className="flex flex-wrap gap-10 items-center mt-10 max-w-full w-[534px]">
          <FeatureList />
        </div>
      </div>
    </section>
  )
}

const features = [
  "We are focused on delivering solutions that will have a long-term impact on our client's success or well-being.",
  "We're  dedicated to providing services or products that contribute to our client's.",
  'part of our responsibility is commitment to forward-thinking and creating value that extends beyond immediate needs',
]

const FeatureList = () => (
  <ul className="flex flex-col grow shrink self-stretch my-auto text-lg min-w-[240px] text-zinc-500 w-[284px]">
    {features.map((feature, index) => (
      <li key={index} className={cn(index > 0 ? 'mt-4' : '')}>
        - {feature}
      </li>
    ))}
  </ul>
)

const ServiceDetails = ({ activeService }: { activeService: string }) => {
  const serviceContent: {
    [key: string]: { title: string; description: string }
  } = {
    Commercial: {
      title: 'Commercial',
      description:
        'Our company provides a comprehensive range of civil engineering services for commercial projects. These include site development, structural design, project management, transportation planning, environmental consulting, and construction oversight. We also specialize in infrastructure design, including roads, bridges, and utilities, ensuring that all our projects meet regulatory standards and are completed on time and within budget.',
    },
    Residential: {
      title: 'Residential',
      description:
        "Our company offers a wide range of civil engineering services for residential projects. These include site planning and development, grading and drainage design, structural engineering for homes, utility design, and construction management. We ensure that all residential projects are designed to meet local building codes, are environmentally sustainable, and are completed on time and within budget. We also provide maintenance services, installations, and project management to ensure all aspects of your project are handled with expertise and care. Whether it's a new build, renovation, or ongoing maintenance, we deliver high-quality results tailored to your needs.",
    },
    Industrial: {
      title: 'Industrial',
      description:
        'Our company provides specialized civil engineering services tailored for industrial projects. This includes comprehensive site development, structural engineering, and facility design for manufacturing plants, warehouses, and other industrial facilities. We also offer both interior and exterior design services, maintenance, and installations, ensuring that all aspects of your industrial project are handled efficiently. Our expertise ensures that your facility is not only functional and durable but also meets all safety and regulatory standards.',
    },
  }

  const { title, description } = serviceContent[activeService]

  return (
    <div className="flex flex-col justify-center px-16 py-14 mt-10 bg-white min-h-[509px] shadow-[0px_20px_38px_rgba(216,216,216,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center min-h-[391px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[562px] max-md:max-w-full">
          <div className="flex flex-col items-start max-w-full w-[562px]">
            <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-zinc-100 min-h-[45px] text-brand-blue">
              <div className="flex gap-2.5 items-center min-h-[29px]">
                <Icon.HouseIcon />
                <div className="self-stretch my-auto font-unica">
                  Based on {title}
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full">
              <h2 className="text-4xl font-extrabold text-brand-blue">
                {title}
              </h2>
              <p className="mt-3.5 text-lg text-zinc-500 max-md:max-w-full">
                {description}
              </p>
            </div>
          </div>

          <Button className="gap-2.5 self-start px-11 pt-5 pb-5 mt-8 text-xl font-semibold">
            Read More
          </Button>
        </div>
        <Image
          src="/serv.png"
          alt="serv"
          className="object-contain self-stretch my-auto aspect-[1.14] min-w-[240px] w-[445px] max-md:max-w-full"
          width={445}
          loading="lazy"
          height={391}
        />
      </div>
    </div>
  )
}

const ServiceCard = ({
  Icon,
  name,
  isActive,
  onClick,
  key,
}: {
  Icon: FC
  name: string
  isActive?: boolean
  onClick: () => void
  key?: number
}) => {
  return (
    <div className="flex flex-col grow shrink w-[177px]">
      <div
        className={cn(
          'flex gap-2 px-8 py-4 max-md:px-5 cursor-pointer',
          isActive ? 'bg-brand-white' : 'border border-solid border-brand-blue'
        )}
        onClick={onClick}
      >
        <div className="shrink-0 w-9 aspect-square">
          <Icon />
        </div>
        <div
          className={cn(
            'grow shrink my-auto',
            isActive ? 'text-brand-main' : 'text-brand-blue'
          )}
        >
          {name}
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    Icon: Icon.CommericalIcon,
    name: 'Commercial',
  },
  {
    Icon: Icon.ResidentialIcon,
    name: 'Residential',
  },
  {
    Icon: Icon.IndustrialIcon,
    name: 'Industrial',
  },
]

const ProfessionalServices = () => {
  const [activeService, setActiveService] = useState<string>('Commercial')

  return (
    <section className="flex flex-col pb-36 max-md:pb-24">
      <div className="flex flex-col items-center px-20 pt-32 w-full bg-amber-400 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex z-10 flex-col items-center mb-0 max-w-full w-[1199px] max-md:mb-2.5">
          <div className="flex flex-col items-center max-w-full text-brand-blue w-[723px]">
            <div className="flex flex-col items-center max-w-full w-[687px]">
              <h1 className="text-5xl font-extrabold max-md:max-w-full max-md:text-4xl">
                Professional Main Services
              </h1>
              <p className="mt-5 text-lg text-center max-md:max-w-full">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
                amet tincidunt.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-start mt-8 w-full text-xl font-semibold whitespace-nowrap">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  isActive={service.name === activeService}
                  onClick={() => setActiveService(service.name)}
                />
              ))}
            </div>
          </div>
          <ServiceDetails activeService={activeService} />
        </div>
      </div>
    </section>
  )
}

const ServicesCard = ({
  Icon,
  title,
  description,
}: {
  Icon: FC
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col grow shrink justify-center py-12 pr-9 pl-9 bg-brand-blue min-w-[240px] w-[306px] max-md:px-5">
      <div className="flex flex-col max-w-full w-[310px]">
        <div className="flex flex-col w-full max-md:items-center">
          <div className="object-contain w-12 aspect-square">
            <Icon />
          </div>
          <div className="flex flex-col mt-5 w-full max-md:text-center">
            <h3 className="text-2xl font-bold text-brand-main">{title}</h3>
            <p className="mt-3 text-lg text-neutral-300">
              {shrinkString({ len: 200, str: description })}
            </p>
          </div>
        </div>
        <button className="mt-8 text-lg font-semibold text-white">
          Read More
        </button>
      </div>
    </div>
  )
}

const servicess = [
  {
    Icon: Icon.AirconIcon,
    title: 'Air condition service',
    description:
      'Our company offers comprehensive air-conditioning services, including installation, maintenance, and repair. We provide tailored solutions to ensure optimal comfort and efficiency for both residential and commercial spaces. Our experienced technicians work with a range of systems, from central air to split units, ensuring high performance and reliability. We are committed to delivering top-notch service and support to keep your environment cool and comfortable throughout the year.',
  },
  {
    Icon: Icon.SubstationIcon,
    title: 'Electrical installation',
    description:
      'Our company provides expert electrical installation services, including the setup of wiring, lighting, and electrical systems for residential, commercial, and industrial projects. We ensure that all installations meet the highest safety standards and regulatory requirements. Our experienced electricians handle everything from system design and planning to installation and testing, delivering reliable and efficient solutions to power your space effectively and safely.',
  },
  {
    Icon: Icon.ServIcon,
    title: 'General Builder',
    description:
      'Our company offers a full range of general building services, including construction, renovation, and remodeling for residential, commercial, and industrial projects. We handle all aspects of building projects, from initial design and planning to construction and final finishes. Our team is skilled in managing complex projects, ensuring high-quality craftsmanship, adherence to building codes, and timely completion. Whether you need new construction, upgrades, or maintenance, we provide comprehensive solutions to meet your building needs.',
  },
  {
    Icon: Icon.LockIcon,
    title: 'Security System',
    description:
      'Our company provides comprehensive security system services, including the design, installation, and maintenance of advanced security solutions. We specialize in integrating state-of-the-art technology such as surveillance cameras, alarm systems, access control systems, and monitoring solutions to enhance the safety and security of residential, commercial, and industrial properties. Our team ensures that your security needs are met with customized solutions that offer peace of mind and reliable protection..',
  },
  {
    Icon: Icon.MaintainaceIcon,
    title: 'Service & maintenance',
    description:
      'Our company offers reliable service and maintenance for a variety of systems and facilities. We provide regular inspections, preventative maintenance, and prompt repairs to ensure optimal performance and longevity of your systems, including HVAC, electrical, plumbing, and structural components. Our skilled team is dedicated to addressing issues efficiently, minimizing downtime, and keeping your property in excellent condition, all while adhering to the highest standards of quality and safety',
  },
  {
    Icon: Icon.HomeIcon,
    title: 'House Extensions',
    description:
      "Our company specializes in house extensions, offering a range of services to expand and enhance your living space. We handle everything from design and planning to construction and finishing touches. Our team works closely with you to understand your needs and vision, ensuring that the extension seamlessly integrates with your existing home. Whether you're adding extra rooms, expanding your kitchen, or creating a new living area, we deliver high-quality craftsmanship and attention to detail to enhance your home's functionality and value.",
  },
]

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center w-full bg-brand-white container">
      <div className="flex flex-col items-center max-w-full w-[1199px]">
        <div className="flex flex-col items-center max-w-full w-[687px]">
          <div className="flex flex-col items-center max-w-full text-brand-blue w-[276px]">
            <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-white min-h-[45px]">
              <div className="flex gap-2.5 items-center min-h-[29px]">
                <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]">
                  <Icon.EditIcon />
                </div>
                <span className="self-stretch my-auto">Our Services</span>
              </div>
            </div>
            <h2 className="mt-2.5 text-5xl font-extrabold text-center max-md:text-4xl font-unica">
              Our Services
            </h2>
          </div>
          <p className="mt-5 text-lg text-center text-zinc-500 max-md:max-w-full">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </p>
        </div>
        <div className="flex flex-col items-center mt-9 w-full max-w-[1199px] max-md:max-w-full">
          <div className="flex flex-wrap gap-6 justify-center items-start w-full">
            {servicess.slice(0, 3).map((service, index) => (
              <ServicesCard key={index} {...service} />
            ))}
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-start mt-7 w-full">
            {servicess.slice(3).map((service, index) => (
              <ServicesCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const StatisticItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex items-start mt-6 max-h-[65px] min-h-[65px] overflow-hidden">
    <div className="flex flex-col w-24 font-extrabold max-w-[23%] text-center whitespace-nowrap text-brand-blue">
      <div className="px-7 py-4 bg-brand-main max-md:px-5">{value}</div>
    </div>
    <div className="flex flex-col justify-center px-6 font-bold text-white border border-white border-solid min-h-[65px] min-w-[240px] w-[304px] max-md:px-5">
      <div className="max-md:pr-5 max-md:text-xl">{label}</div>
    </div>
  </div>
)

const ReasonItem = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <div className="flex flex-wrap justify-center gap-3.5 items-start mt-10 max-md:items-center max-md:text-center">
    <Icon.CheckIvon />
    <div className="flex flex-col grow shrink min-w-[240px] w-[507px] max-md:max-w-full">
      <div className="text-xl font-bold text-brand-blue">{title}</div>
      <div className="mt-1.5 text-lg text-zinc-500 max-md:max-w-full">
        {description}
      </div>
    </div>
  </div>
)

const statisticsData = [
  { value: '3956', label: 'Project Done' },
  { value: '851', label: 'People Working' },
  { value: '265', label: 'Business Partner' },
  { value: '854+', label: 'Happy Customers' },
]

const Statistics = () => (
  <div className="flex relative flex-col justify-center px-5 mb-0 border border-black border-solid bg-brand-blue bg-opacity-70 py-[20px]">
    <div className="flex flex-col w-full max-w-[350px]">
      {statisticsData.map((item, index) => (
        <StatisticItem key={index} {...item} />
      ))}
    </div>
  </div>
)

const reasonsData = [
  {
    title: '35 Years Experiance',
    description:
      'Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium',
  },
  {
    title: 'Excellencee Certificate',
    description:
      'Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium',
  },
  {
    title: 'Affordable Price',
    description:
      'Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium',
  },
]

const Reasons = () => (
  <div className="flex flex-col max-w-full w-[643px] max-md:items-center max-md:text-center">
    <div className="flex flex-col w-full text-brand-blue">
      <div className="flex flex-col justify-center md:self-start px-4 py-2 text-lg font-medium bg-brand-white min-h-[45px]">
        <div className="flex gap-2.5 items-center max-md:justify-center min-h-[29px]">
          <div className="object-contain  my-auto aspect-square w-[22px]">
            <Icon.EditIcon />
          </div>
          <div className="self-stretch my-auto">Why Choose Us</div>
        </div>
      </div>
      <h2 className="mt-2.5 text-5xl max-md:text-xl font-extrabold max-md:max-w-full">
        Few Reasons Why You <br /> Should Choose Us
      </h2>
    </div>
    <div className="flex flex-col max-w-full w-[558px]">
      {reasonsData.map((reason, index) => (
        <ReasonItem key={index} {...reason} />
      ))}
    </div>
  </div>
)

const WhyChooseUs = () => {
  return (
    <main className="flex max-md:flex-col gap-10 items-center justify-center h-full container py-[20px] md:py-[40px] overflow-hidden">
      <section className="flex flex-col self-stretch my-auto text-2xl min-w-[240px] w-[676px] max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-center  w-full">
          <Image
            src="/statimg.png"
            alt="statimg"
            className="object-cover absolute inset-0 size-full max-h-[500px] w-full"
            loading="lazy"
            height={845}
            width={921}
          />
          <Statistics />
        </div>
      </section>
      <section className="flex flex-col grow shrink items-start self-stretch pb-11 my-auto min-w-[240px] w-[836px] max-md:max-w-full">
        <Reasons />
      </section>
    </main>
  )
}

const WorkCard = ({
  image,
  name,
  tags,
}: {
  image: string
  name: string
  tags: string[]
}) => (
  <div className="w-[330px] md:w-[400px] bg-white p-[21px] flex flex-col gap-4 items-center justify-center">
    <Image src={image} alt={name} width={350} height={500} />
    <h3 className="text-[25px] font-unica ">{name}</h3>
    <p className="text-[18px] text-gray-700">
      {tags.map((t) => (
        <span
          key={t}
          className="inline-block px-2 text-sm font-semibold text-gray-700"
        >
          {t}
        </span>
      ))}
    </p>
  </div>
)

const workCardsData = [
  {
    image: '/image.png',
    name: 'Electrical & Maintenance',
    tags: ['Instalation', 'Electric'],
  },
  {
    image: '/image.png',
    name: 'Interior/Exterior Services',
    tags: ['House', 'Office'],
  },
  {
    image: '/image.png',
    name: 'Electrical installation',
    tags: ['Instalation '],
  },
  {
    image: '/image.png',
    name: 'Portfolio Website',
    tags: ['Portfolio', 'Gatsby'],
  },
  {
    image: '/image.png',
    name: 'Project Management Tool',
    tags: ['Project Management', 'React'],
  },
  {
    image: '/image.png',
    name: 'Chat Application',
    tags: ['Real-time', 'Chat'],
  },
  {
    image: '/image.png',
    name: 'Fitness Tracker App',
    tags: ['Fitness', 'Mobile'],
  },
  {
    image: '/image.png',
    name: 'Online Learning Platform',
    tags: ['Learning', 'React'],
  },
]

const RecentWorks = () => {
  return (
    <section className="flex flex-col pb-36 max-md:pb-24">
      <div className="flex flex-col items-center px-20 pt-32 w-full bg-brand-blue max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex z-10 flex-col items-center mb-0 max-w-full w-[1199px] max-md:mb-2.5">
          <div className="flex flex-col items-center max-w-full w-[723px]">
            <div className="flex flex-col items-center max-w-full w-[687px]">
              <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-white min-h-[45px]">
                <div className="flex gap-2.5 items-center min-h-[29px]">
                  <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]">
                    <Icon.EditIcon />
                  </div>
                  <span className="self-stretch my-auto">The Gallery</span>
                </div>
              </div>
              <h2 className="mt-2.5 text-5xl font-extrabold text-center max-md:text-4xl font-unica text-white">
                Check Our Recent Work
              </h2>
            </div>
          </div>
          <div className="my-14 flex items-center justify-between lg:my-20 w-full gap-2">
            <Swiper
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              breakpoints={{
                450: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                650: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              data-testid="swiper"
            >
              {workCardsData.map((card, index) => (
                <SwiperSlide key={index} data-testid="testimonial-card">
                  <WorkCard
                    image={'/Image.png'}
                    name={card.name}
                    tags={card.tags}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export {
  Hero,
  WelcomeSection,
  ProfessionalServices,
  ServicesSection,
  WhyChooseUs,
  RecentWorks,
}
