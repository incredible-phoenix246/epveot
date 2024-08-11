import React, { FC } from "react";
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
}: {
  Icon: FC;
  name: string;
  isActive?: boolean;
}) => {
  return (
    <div className="flex flex-col grow shrink w-[177px]">
      <div
        className={cn(
          "flex gap-2 px-8 py-4 max-md:px-5",
          isActive ? "bg-brand-white" : "border border-solid border-brand-blue"
        )}
      >
        <div className="shrink-0 w-9 aspect-square">
          <Icon />
        </div>
        <div className="grow shrink my-auto">{name}</div>
      </div>
    </div>
  );
};

const services = [
  {
    Icon: Icon.CommericalIcon,
    name: "Commercial",
    isActive: true,
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
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
          <ServiceDetails />
        </div>
      </div>
    </section>
  );
};

export { Hero, WelcomeSection, ProfessionalServices };
