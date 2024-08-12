"use client";

import React, { FC, useState } from "react";
import * as Icon from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

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
  );
};

const WelcomeHeader = () => (
  <header className="flex flex-col max-w-full text-blue-950 w-[515px]">
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
);

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
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt. Interdum et malesuada.
            <br />
            <br />
            In pulvinar viverra diam, nec rutrum mauris maximus non. Aenean sed
            quam tristique, facilisis est ac, interdum velit.
          </p>
        </div>
        <div className="flex flex-wrap gap-10 items-center mt-10 max-w-full w-[534px]">
          {/* <ExperienceBox /> */}
          <FeatureList />
        </div>
      </div>
    </section>
  );
};

const features = [
  "Sed varius ipsum lacus",
  "Pulvinar tortor dignissim sit amet.",
  "Quisque tristique diam quis placerat",
  "Aliquam id ante suscipi fringilla.",
];

const FeatureList = () => (
  <ul className="flex flex-col grow shrink self-stretch my-auto text-lg min-w-[240px] text-zinc-500 w-[284px]">
    {features.map((feature, index) => (
      <li key={index} className={index > 0 ? "mt-4" : ""}>
        - {feature}
      </li>
    ))}
  </ul>
);

const ServiceDetails = () => {
  return (
    <div className="flex flex-col justify-center px-16 py-14 mt-10 bg-white min-h-[509px] shadow-[0px_20px_38px_rgba(216,216,216,0.25)] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center min-h-[391px] max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[562px] max-md:max-w-full">
          <div className="flex flex-col items-start max-w-full w-[562px]">
            <div className="flex flex-col justify-center px-4 py-2 text-lg font-medium bg-zinc-100 min-h-[45px] text-blue-950">
              <div className="flex gap-2.5 items-center min-h-[29px]">
                <Icon.HouseIcon />
                <div className="self-stretch my-auto font-unica">
                  Based on Commercial
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full">
              <h2 className="text-4xl font-extrabold text-blue-950">
                Commercial
              </h2>
              <p className="mt-3.5 text-lg text-zinc-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                incididunt ut labore et dolore magna aliqua. Ut enim ad
                minimquis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea
                <br />
                commodo consequat.
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.ullamco laboris nisi ut
                aliquip ex ea
                <br />
                commodo consequat.
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
  );
};

const ServiceCard = ({
  Icon,
  name,
  isActive,
  onClick,
}: {
  Icon: FC;
  name: string;
  isActive?: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col grow shrink w-[177px]">
      <div
        className={cn(
          "flex gap-2 px-8 py-4 max-md:px-5 cursor-pointer",
          isActive ? "bg-brand-white" : "border border-solid border-brand-blue"
        )}
        onClick={onClick}
      >
        <div className="shrink-0 w-9 aspect-square">
          <Icon />
        </div>
        <div
          className={cn(
            "grow shrink my-auto",
            isActive ? "text-brand-main" : "text-brand-blue"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    Icon: Icon.CommericalIcon,
    name: "Commercial",
  },
  {
    Icon: Icon.ResidentialIcon,
    name: "Residential",
  },
  {
    Icon: Icon.IndustrialIcon,
    name: "Industrial",
  },
];

const ProfessionalServices = () => {
  const [activeService, setActiveService] = useState<string>("Commercial");

  return (
    <section className="flex flex-col pb-36 max-md:pb-24">
      <div className="flex flex-col items-center px-20 pt-32 w-full bg-amber-400 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex z-10 flex-col items-center mb-0 max-w-full w-[1199px] max-md:mb-2.5">
          <div className="flex flex-col items-center max-w-full text-blue-950 w-[723px]">
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
                  Icon={service.Icon}
                  name={service.name}
                  isActive={service.name === activeService}
                  onClick={() => setActiveService(service.name)}
                />
              ))}
            </div>
          </div>
          <ServiceDetails
          // activeService={activeService}
          />
        </div>
      </div>
    </section>
  );
};

const ServicesCard = ({
  Icon,
  title,
  description,
}: {
  Icon: FC;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col grow shrink justify-center py-12 pr-9 pl-9 bg-blue-950 min-w-[240px] w-[306px] max-md:px-5">
      <div className="flex flex-col max-w-full w-[310px]">
        <div className="flex flex-col w-full max-md:items-center">
          <div className="object-contain w-12 aspect-square">
            <Icon />
          </div>
          <div className="flex flex-col mt-5 w-full max-md:text-center">
            <h3 className="text-2xl font-bold text-brand-main">{title}</h3>
            <p className="mt-3 text-lg text-neutral-300">{description}</p>
          </div>
        </div>
        <button className="mt-8 text-lg font-semibold text-white">
          Read More
        </button>
      </div>
    </div>
  );
};

const servicess = [
  {
    Icon: Icon.AirconIcon,
    title: "Air condition service",
    description:
      "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
  },
  {
    Icon: Icon.SubstationIcon,
    title: "Electrical installation",
    description:
      "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
  },
  {
    Icon: Icon.ServIcon,
    title: "General Builder",
    description:
      "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
  },
  {
    Icon: Icon.LockIcon,
    title: "Security System",
    description:
      "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
  },
  {
    Icon: Icon.MaintainaceIcon,
    title: "Service & maintenance",
    description:
      "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
  },
  {
    Icon: Icon.HomeIcon,
    title: "House Extensions",
    description:
      "Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna sit amet tincidunt.",
  },
];

const ServicesSection: React.FC = () => {
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
              <ServicesCard key={index + 3} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatisticItemProps {
  value: string;
  label: string;
}

const StatisticItem: React.FC<StatisticItemProps> = ({ value, label }) => (
  <div className="flex items-start mt-6">
    <div className="flex flex-col w-24 font-extrabold text-center whitespace-nowrap text-blue-950">
      <div className="px-7 py-4 bg-amber-400 max-md:px-5">{value}</div>
    </div>
    <div className="flex flex-col justify-center px-6 py-4 font-bold text-white border border-white border-solid min-h-[65px] min-w-[240px] w-[304px] max-md:px-5">
      <div className="max-w-full w-[260px] max-md:pr-5">{label}</div>
    </div>
  </div>
);

interface ReasonItemProps {
  icon: string;
  title: string;
  description: string;
}

const ReasonItem: React.FC<ReasonItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-wrap gap-3.5 items-start mt-10">
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 w-8 aspect-square"
    />
    <div className="flex flex-col grow shrink min-w-[240px] w-[507px] max-md:max-w-full">
      <div className="text-xl font-bold text-blue-950">{title}</div>
      <div className="mt-1.5 text-lg text-zinc-500 max-md:max-w-full">
        {description}
      </div>
    </div>
  </div>
);

const statisticsData = [
  { value: "3956", label: "Project Done" },
  { value: "851", label: "People Working" },
  { value: "265", label: "Business Partner" },
  { value: "854+", label: "Happy Customers" },
];

const Statistics: React.FC = () => (
  <div className="flex relative flex-col justify-center px-28 py-44 mb-0 border border-black border-solid bg-blue-950 bg-opacity-70 max-md:px-5 max-md:py-24 max-md:mb-2.5 max-md:max-w-full">
    <div className="flex flex-col w-full max-w-[400px]">
      {statisticsData.map((item, index) => (
        <StatisticItem key={index} value={item.value} label={item.label} />
      ))}
    </div>
  </div>
);

const reasonsData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/204611d454aa17c76a40a96171c36badb02f0556e4ca5fc3898c6cc22c530351?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598",
    title: "35 Years Experiance",
    description:
      "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/204611d454aa17c76a40a96171c36badb02f0556e4ca5fc3898c6cc22c530351?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598",
    title: "Excellencee Certificate",
    description:
      "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/204611d454aa17c76a40a96171c36badb02f0556e4ca5fc3898c6cc22c530351?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598",
    title: "Affordable Price",
    description:
      "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium",
  },
];

const Reasons: React.FC = () => (
  <div className="flex flex-col max-w-full w-[643px]">
    <div className="flex flex-col w-full text-blue-950">
      <div className="flex flex-col justify-center self-start px-4 py-2 text-lg font-medium bg-zinc-100 min-h-[45px]">
        <div className="flex gap-2.5 items-center min-h-[29px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b9e3cfe0fea376577eb032f3dbce66fad7fe9615b0879d9fa4f6022784e70b?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
          />
          <div className="self-stretch my-auto">Why Choose Us</div>
        </div>
      </div>
      <h2 className="mt-2.5 text-5xl font-extrabold max-md:max-w-full max-md:text-4xl">
        Few Reasons Why You <br /> Should Choose Us
      </h2>
    </div>
    <div className="flex flex-col mt-11 max-w-full w-[558px] max-md:mt-10">
      {reasonsData.map((reason, index) => (
        <ReasonItem
          key={index}
          icon={reason.icon}
          title={reason.title}
          description={reason.description}
        />
      ))}
    </div>
  </div>
);

const MyComponent: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-10 items-center">
      <section className="flex flex-col grow shrink self-stretch my-auto text-2xl min-w-[240px] w-[676px] max-md:max-w-full">
        <div className="flex relative flex-col justify-center px-20 py-28 w-full min-h-[921px] max-md:px-5 max-md:py-24 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73cc37233203a7a3a12cde346087fddccc05ffb7ee530d9f6c55daa2e82ff945?placeholderIfAbsent=true&apiKey=af97e94b909e4cdbb531b36fb1b19598"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <Statistics />
        </div>
      </section>
      <section className="flex flex-col grow shrink items-start self-stretch pb-11 my-auto min-w-[240px] w-[836px] max-md:max-w-full">
        <Reasons />
      </section>
    </main>
  );
};

export { Hero, WelcomeSection, ProfessionalServices, ServicesSection };
