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
import useMediaQuery from '@/hooks/use-media-query'

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
}: {
  Icon: FC
  name: string
  isActive?: boolean
  onClick: () => void
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
                Good buildings come from good people, and all problems are
                solved by good design.
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
        <Link href="/services/2">
          <button className="mt-8 text-lg font-semibold text-white">
            Read More
          </button>
        </Link>
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
            Building with precision, driven by passion. Your vision, our
            expertise, crafted to perfection.
          </p>
        </div>
        <div className="flex flex-col items-center mt-9 w-full max-w-[1199px] max-md:max-w-full">
          <div className="flex flex-wrap gap-6 justify-center items-start w-full">
            {servicess.slice(0, 3).map((service, index) => (
              <ServicesCard key={service.title} {...service} />
            ))}
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-start mt-7 w-full">
            {servicess.slice(3).map((service, index) => (
              <ServicesCard key={service.title} {...service} />
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
      <div className="mt-1.5 text-base text-zinc-500 max-md:max-w-full">
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
    <div className="flex flex-col w-full max-w-[320px]">
      {statisticsData.map((item, index) => (
        <StatisticItem key={index} {...item} />
      ))}
    </div>
  </div>
)

const reasonsData = [
  {
    title: '7 Years Experiance',
    description:
      'Choosing our company means partnering with a team that has consistently delivered excellent results for over 7 years. Our extensive experience has allowed us to refine our processes and build a reputation for quality, reliability, and customer satisfaction. We pride ourselves on our commitment to exceeding client expectations, whether through innovative solutions, meticulous craftsmanship, or exceptional service. Our track record speaks to our dedication and expertise, making us a trusted choice for your project.',
  },
  {
    title: 'Certificate earned ',
    description:
      "Our company is distinguished by its commitment to excellence, as evidenced by the certifications we have earned over the years. These certifications, including [specific certifications relevant to your industry], attest to our adherence to industry standards and best practices. They reflect our team's expertise, our dedication to quality, and our commitment to staying current with the latest advancements and regulations. These credentials ensure that you receive top-notch service and confidence in the integrity of our work.",
  },
  {
    title: 'Affordable Price',
    description:
      'Our company offers competitive pricing while maintaining the highest standards of quality. We understand that value is important, so we strive to deliver cost-effective solutions that meet your needs and budget. We provide detailed, transparent estimates and work with you to ensure there are no surprises throughout the project. Our goal is to offer exceptional service and results that provide long-term value and satisfaction for your investment.',
  },
]

const Reasons = () => (
  <div className="flex flex-col max-w-full w-[643px] max-md:items-center max-md:text-center">
    <div className="flex flex-col w-full text-brand-blue">
      <div className="flex flex-col justify-center md:self-start px-4 py-2 text-lg font-medium bg-white min-h-[45px]">
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
    <main className="flex max-md:flex-col gap-10 container py-[20px] md:py-[40px] overflow-hidden">
      <section className="flex flex-col my-auto text-2xl min-w-[240px] w-[676px] max-md:max-w-full">
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
    <Image
      src={image}
      alt={name}
      width={350}
      height={500}
      className="max-h-[400px] object-cover min-h-[400px]"
    />
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
    image: '/eletriic.jpg',
    name: 'Electrical & Maintenance',
    tags: ['Instalation', 'Electric'],
  },
  {
    image: '/interiri.jpg',
    name: 'Interior & Exterior Services',
    tags: ['House', 'Office'],
  },
  {
    image: '/ark.jpeg',
    name: 'Architectural Design',
    tags: ['Architectural Design'],
  },
  {
    image: '/plumbing.jpg',
    name: 'Plumbing service',
    tags: ['Plumbing'],
  },
  {
    image: '/construction.jpg',
    name: 'Site Work',
    tags: ['Site Work', 'Construction'],
  },
  {
    image: '/form-work.jpg',
    name: 'Form work',
    tags: ['Form work'],
  },
  {
    image: '/building-design.jpg',
    name: 'Building design',
    tags: ['Design', 'Building'],
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
                    image={card.image}
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

const TestominialCard = ({
  name,
  image = '/test.png',
  loc = 'Kano, Nigeria',
  test,
}: {
  name: string
  image?: string
  loc?: string
  test: string
}) => {
  const { isMobile } = useMediaQuery()
  return (
    <article className="flex flex-col justify-center p-2 md:p-10 mt-6 w-full bg-white border border-solid border-zinc-300 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-[300px] md:w-[503px]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex gap-2 items-center">
                <div
                  className={cn(
                    'object-contain my-auto aspect-square',
                    isMobile ? ' w-[40px]' : ' w-[70px]'
                  )}
                >
                  <div
                    className={cn(
                      'rounded-full bg-brand-blue text-brand-white aspect-square items-center justify-center flex font-semibold text-[26px]',
                      isMobile ? 'w-[40px]' : 'w-[70px]'
                    )}
                  >
                    {name.charAt(0)}
                  </div>
                </div>
                <div
                  className={cn(
                    'flex flex-col my-auto',
                    isMobile ? 'w-[170px]' : 'w-[200px]'
                  )}
                >
                  <h3 className="text-xl max-md:text-base font-bold text-blue-950 line-clamp-1">
                    {name}
                  </h3>
                  <p className="mt-1 text-base text-zinc-500 line-clamp-2">
                    {loc}
                  </p>
                </div>
              </div>
              <div
                className={cn(
                  'object-contain my-auto aspect-square',
                  isMobile ? 'w-[35px]' : 'w-[55px]'
                )}
              >
                <Icon.Quote />
              </div>
            </div>
            <hr className="mt-5 w-full min-h-0 border border-solid border-zinc-300" />
          </div>
          <blockquote className="mt-4 max-md:text-sm text-base tracking-wider leading-8 text-zinc-500 max-md:max-w-full">
            <span className="italic">{test}</span>
          </blockquote>
        </div>
      </div>
    </article>
  )
}

const testimonials = [
  {
    name: 'Dr. Shide Sunday',
    loc: 'Nigeria Police Academy Wudil - Kano',
    test: 'I know Engineer Earnest through a 500 capacity Ultra-Modern project he handled for Nigeria Police Academy Chaplaincy. Earnest began and completed the project in less than 2 months. Apart from the supervisory role he played as the engineer that managed the project; he also practically participated in almost all the work (Masonry, Ironwork, Carpentry, Painting, and Electrical work). He practically joined the workforce mostly to achieve his usual daily targets when he was not comfortable with the labor speed. He is young and worked across day and night without any sign of incapacitation. I therefore recommend him for your building projects, irrespective of the standard and the time frame required to accomplish the project.',
  },
  {
    name: 'Rev. (Dr.) Emmanuel Bernard',
    loc: 'Resident Pastor, ASPC English Assembly, Kano',
    test: 'I have had the pleasure of knowing Engineer Earnest through his exceptional work on a 500-capacity ultra-modern project for the Nigeria Police Academy Chaplaincy. His ability to begin and complete this significant project in under two months is a testament to his dedication and expertise. Beyond his role as the supervising engineer, Earnest actively participated in various aspects of the construction, including masonry, ironwork, carpentry, painting, and electrical work. He frequently joined the labor force to ensure daily targets were met, especially when the pace of work was not up to his high standards. Earnest’s commitment is further demonstrated by his relentless work ethic, often working day and night without showing any signs of fatigue or incapacity. I strongly recommend Engineer Earnest for any building projects, regardless of the required standards or time constraints.',
  },
  {
    name: 'Pastor Olushola Ibidun',
    loc: 'Ag. Chaplain Protestant Chaplaincy, Nigeria Police Academy, Wudil - Kano',
    test: 'Engineer Ernest did his youth service with the Works department of the Nigeria Police Academy. In the course of his service, he became very noticeable to me as the Acting Chaplain of the Protestant Chaplaincy due to his commitment to Chapel activities. It was not difficult therefore to reckon with his suitability when the need to include a 500-seater capacity auditorium to the existing one arose. We sought for and got his release from the Director of works in Police Academy to help us with the design and construction of the 500 capacity auditorium. His proficiency saw the auditorium delivered within two months from design to completion. Engineer Ernest motivated all the workers at every stage through his direct participation, thereby eliminating any possible delay. With this experience, I can confidently vouch for his competency, motivational ability, and strength for great accomplishment in his chosen career of building engineering. Whosoever engages Engineer Ernest has got the right choice for his/her building construction.',
  },
  {
    name: 'Mattias j',
    loc: 'Electrical Engr Amc awka',
    test: "I've worked closely with [Engr Ernest] at Epveot Construction Company, and I  can confidently say that their work as a building engineer is nothing short of exceptional. Their innovative approach to problem-solving and their ability to manage even the most challenging projects with ease is impressive. [Engr. Ernest] is not only technically proficient but also brings a collaborative spirit to every project, ensuring that the team is always aligned and focused on delivering high-quality results. Epveot Construction stands out in the industry, and a significant part of that is due to [Friend's Name]'s outstanding contributions.",
  },
  {
    name: 'Orawusi Obiora',
    loc: 'D.C works at the police academy wudil',
    test: "I've had the privilege of seeing firsthand the incredible work that Engr Ernest has done as a building engineer at Epveot Construction Company. Their dedication  to excellence is truly remarkable. The projects they've led are a testament to their expertise, with every detail meticulously planned and executed. Whether it's ensuring structural integrity, optimizing designs, or managing complex constructions, [Engr Ernest] consistently delivers results that exceed expectations. Epveot Construction is fortunate to have such a skilled and passionate professional on their team.",
  },
]

const TestimonialSection = () => {
  return (
    <section className="flex max-md:flex-col w-full items-center justify-center">
      <section className="flex flex-col max-w-[581px] items-center justify-center">
        <header className="flex p-3  flex-col w-full items-start">
          <div className="flex flex-col text-blue-950">
            <div className="flex flex-col text-brand-blue">
              <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-[#F4F4F4] min-h-[45px]">
                <div className="flex gap-2.5 items-center min-h-[29px]">
                  <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]">
                    <Icon.EditIcon />
                  </div>
                  <span className="self-stretch my-auto">Our Testimonial</span>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-2.5 text-5xl font-semibold text-start max-md:text-4xl font-unica">
            Customers Says
          </h2>
        </header>
        <div className="mt-2 flex w-full items-center justify-center h-full max-md:max-w-[350px]">
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={3000}
            data-testid="swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestominialCard
                  key={index}
                  name={testimonial.name}
                  loc={testimonial.loc}
                  test={testimonial.test}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <section className="flex flex-col justify-center px-11 py-12 mt-8 w-full bg-amber-400 text-blue-950 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-start w-full max-md:max-w-full">
            <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-zinc-100 min-h-[45px]">
              <div className="flex gap-2.5 items-center min-h-[29px]">
                <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]">
                  <Icon.EditIcon />
                </div>
                <span className="self-stretch my-auto">Any Question</span>
              </div>
            </div>
            <div className="flex flex-col self-stretch mt-6 w-full">
              <h2 className="text-2xl font-extrabold max-md:max-w-full">
                99.9% Customer Satisfaction Based
              </h2>
              <p className="mt-3 text-lg max-md:max-w-full">
                If you have any questions or need help contact <br /> with our
                team, or call
              </p>
            </div>
            <div className="flex gap-2.5 items-center mt-6 max-w-full text-3xl font-extrabold leading-loose text-white w-[334px]">
              <div className="object-contain shrink-0 self-stretch my-auto aspect-square w-[42px]">
                <Icon.Phone />
              </div>
              <a
                href="tel:+234123456789"
                className="self-stretch my-auto text-lg"
              >
                (234) 80 591 149 897
              </a>
            </div>
          </div>
        </section>
      </section>
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
  TestimonialSection,
}
