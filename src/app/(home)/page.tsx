import React from "react";
import {
  Hero,
  WelcomeSection,
  ProfessionalServices,
  ServicesSection,
  WhyChooseUs,
} from "@/modules/home";

const page = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ProfessionalServices />
      <ServicesSection />
      <WhyChooseUs />
    </>
  );
};

export default page;
