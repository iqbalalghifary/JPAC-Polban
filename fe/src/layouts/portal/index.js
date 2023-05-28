/* eslint-disable import/named */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { Navbar } from "../../examples/Navbars/DefaultNavbar";
import Footer from "../../examples/Footer";

// eslint-disable-next-line arrow-body-style, react/function-component-definition
export const Portal = () => {
  return (
    <div>
      <Navbar />
      {/* <PortalContent /> */}
      <Footer />
    </div>
  );
};
