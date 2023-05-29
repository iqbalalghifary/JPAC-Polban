/* eslint-disable import/named */
/* eslint-disable arrow-body-style */
import React from "react";
import AboutUsContent from "components/AboutUs/AboutUsContent";
import { Navbar } from "../../Navbars/DefaultNavbar";
import Footer from "../../Footer";

// eslint-disable-next-line import/prefer-default-export, react/function-component-definition
export const About = () => {
  return (
    <div>
      <Navbar />
      <AboutUsContent />
      <Footer />
    </div>
  );
};
