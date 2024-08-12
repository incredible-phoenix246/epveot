import React from "react";
import {
  Hero,
  WelcomeSection,
  ProfessionalServices,
  ServicesSection,
} from "@/modules/home";

const page = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ProfessionalServices />
      <ServicesSection />
    </>
  );
};

export default page;
