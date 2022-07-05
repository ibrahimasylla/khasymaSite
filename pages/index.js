import React from "react";
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import MainBanner from "@/components/DigitalAgency/MainBanner";
import WhatWeOffer from "@/components/DigitalAgency/WhatWeOffer";
import AboutUsContent from "@/components/DigitalAgency/AboutUsContent";

import Projects from "@/components/DigitalAgency/Projects";

import CTAStyleTwo from "@/components/Common/CTAStyleTwo";
import Footer from "@/components/_App/Footer";


const DigitalAgency = () => {
  return (
    <>
      <NavbarStyleFive />

      <MainBanner />
      <WhatWeOffer />
      <AboutUsContent />
      {/* <OurServices /> */}

      <Projects />

      <CTAStyleTwo />
      <Footer />
    </>
  );
};

export default DigitalAgency;
