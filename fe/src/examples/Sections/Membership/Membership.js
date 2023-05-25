/* eslint-disable arrow-body-style */
import React from "react";
import { Navbar } from "../../Navbars/DefaultNavbar";
import { MembershipContent } from "../../../components/Membership/MembershipContent";

// eslint-disable-next-line import/prefer-default-export, react/function-component-definition
export const Membership = () => {
  return (
    <div>
      <Navbar />
      <MembershipContent />
    </div>
  );
};