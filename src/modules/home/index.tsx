import React from "react";
import * as Icon from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

const WelcomeHeader = () => {
  return (
    <header className="flex flex-col max-w-full text-blue-950 w-[515px]">
      <div className="flex flex-col justify-center self-start px-4 py-2 text-lg font-medium bg-zinc-100 min-h-[45px]">
        <div className="flex gap-2.5 items-center min-h-[29px]">
          <Icon.HatIcon />
          <span className="self-stretch my-auto font-unica">
            Welcome BlueCollar
          </span>
        </div>
      </div>
      <h1 className="mt-2.5 text-5xl font-extrabold max-md:max-w-full max-md:text-4xl">
        We Provide Your Future
      </h1>
    </header>
  );
};

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

const FeatureList: React.FC = () => {
  return (
    <ul className="flex flex-col grow shrink self-stretch my-auto text-lg min-w-[240px] text-zinc-500 w-[284px]">
      {features.map((feature, index) => (
        <li key={index} className={index > 0 ? "mt-4" : ""}>
          - {feature}
        </li>
      ))}
    </ul>
  );
};

export { Hero, WelcomeSection };
