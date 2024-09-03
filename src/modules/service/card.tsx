import React from 'react'

interface ServiceItemProps {
  title: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title }) => {
  return (
    <div className="flex gap-5 mt-6">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac98ddddb23950b4a3b6152fa38c371fd454870b74c0541004f5ec03652c6c9e?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
        alt=""
        className="object-contain shrink-0 self-start aspect-square w-[27px]"
      />
      <div className="basis-auto">{title}</div>
    </div>
  )
}

interface Service {
  title: string
}

const services: Service[] = [
  { title: 'Telecom Installation and Repair' },
  { title: 'Hosted PBX Solutions' },
  { title: 'Outdoor/Parking Lot Lighting' },
  { title: 'Outlets, Circuits and Rewiring' },
  { title: 'HID Lighting and Control' },
  { title: 'Lighting Design' },
  { title: 'Motors and Transformers' },
  { title: 'Isolated Computer Circuits' },
  { title: 'Data/Communications Cabling' },
  { title: 'Ballast/Lamp Replacing' },
]

const ServiceList: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 items-start mt-12 max-w-full text-lg font-medium leading-none text-zinc-500 w-[726px] max-md:mt-10">
      <div className="flex flex-col grow shrink items-start min-w-[240px] w-[253px]">
        {services.slice(0, 5).map((service, index) => (
          <ServiceItem key={index} title={service.title} />
        ))}
      </div>
      <div className="flex flex-col grow shrink items-start min-w-[240px] w-[246px]">
        {services.slice(5).map((service, index) => (
          <ServiceItem key={index} title={service.title} />
        ))}
      </div>
    </div>
  )
}

const DiscountBanner: React.FC = () => {
  return (
    <div className="flex flex-col mt-12 max-w-full text-center text-white w-[335px] max-md:mt-10">
      <div className="flex relative flex-col justify-center px-11 py-20 w-full aspect-[0.898] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd782023434a8a3062d2da225e33e124773706388543fe9ad2c79f5c815d107f?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
          alt="Background for discount banner"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center">
          <h4 className="text-xl font-bold leading-8">
            Providing Varity <br /> Electical Services
          </h4>
          <div className="flex flex-col mt-6 max-w-full text-blue-950 w-[249px]">
            <div className="flex flex-col px-10 py-3.5 bg-amber-400 max-md:px-5">
              <div className="self-center text-lg">Discount 25%</div>
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
}

interface ServiceCardProps {
  title: string
  isActive: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, isActive }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center p-5 ${
        isActive ? 'bg-amber-400' : 'bg-zinc-100'
      } ${!isActive && 'mt-2.5'}`}
    >
      <div className="flex gap-10 items-center min-h-[25px]">
        <div className="self-stretch my-auto">{title}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/58890b720817feac2e17e463cc35e0d0a4884f7fad6127448bc23dd336511a8c?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-1.5 aspect-[0.55]"
        />
      </div>
    </div>
  )
}

interface Service {
  title: string
}

const servicesq: Service[] = [
  { title: 'Commercial Services' },
  { title: 'Residential Services' },
  { title: 'Industrial Services' },
]

const HowWeWork: React.FC = () => {
  return (
    <section className="flex flex-col items-center">
      <header className="flex flex-col items-center max-w-full w-[687px]">
        <div className="flex flex-col items-center max-w-full text-blue-950 w-[276px]">
          <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-white min-h-[45px]">
            <div className="flex gap-2.5 items-center min-h-[29px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba33feb5c96f2f811334efc76e8b9a94d4731727ac493908e09aed62b72547ad?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[21px]"
              />
              <h2 className="self-stretch my-auto">Our Services</h2>
            </div>
          </div>
          <h1 className="mt-2.5 text-5xl font-extrabold text-center max-md:text-4xl">
            How We Works
          </h1>
        </div>
        <p className="mt-5 text-lg text-center text-zinc-500 max-md:max-w-full">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium metus. Proin pretium id urna sit amet
          tincidunt.
        </p>
      </header>
      <div className="flex flex-wrap gap-10 items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col grow shrink min-w-[240px] w-[268px]">
          <div className="flex flex-col max-w-full text-xl font-bold text-blue-950 w-[335px]">
            {servicesq.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                isActive={index === 0}
              />
            ))}
          </div>
          <DiscountBanner />
        </div>
        <div className="flex flex-col grow shrink min-w-[240px] w-[748px] max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[815px]">
            <div className="flex flex-col w-full">
              <h3 className="text-3xl font-bold text-blue-950 max-md:max-w-full">
                We can help you with the following services:
              </h3>
              <p className="mt-2.5 text-lg leading-7 text-zinc-500 max-md:max-w-full">
                Pellentesque vehicula eros neque, maximus mattisin sagittis
                Nulla facilisi. In sed pretium metus Proin pretium id urna
                Interdum et malesuada.
              </p>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c35cb0ad17881d2759a30cfdac9f6a2c0d14cea0a68737a18463a8ac56cda5?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
              alt="Our services illustration"
              className="object-contain mt-8 w-full aspect-[1.62]"
            />
          </div>
          <ServiceList />
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
