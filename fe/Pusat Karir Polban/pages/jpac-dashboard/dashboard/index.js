import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadJPAC from "../../../components/dashboard-pages/jpac-dashboard/dashboard";
import { useEffect } from "react";
import Cookies from 'js-cookie';

const index = () => {

  useEffect(() => {
    if(Cookies.get('role') != "Operator"){
      window.location = "http://localhost:3000/login";
    }
  });

  return (
    <>
      <Seo pageTitle="JPAC Dashboard" />
      <DashboadJPAC />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
