import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadHome from "../../../components/dashboard-pages/employers-dashboard/dashboard";
import { useEffect } from "react";
import Cookies from 'js-cookie';

const index = () => {

  useEffect(() => {
    if(Cookies.get('role') != "Partner"){
      window.location = "http://localhost:3000/login";
    }
  });

  return (
    <>
      <Seo pageTitle="Employeers Dashboard" />
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
