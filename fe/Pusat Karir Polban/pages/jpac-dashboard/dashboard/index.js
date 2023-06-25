import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import DashboadJPAC from "../../../components/dashboard-pages/jpac-dashboard/dashboard";

const index = () => {
  return (
    <>
      <Seo pageTitle="JPAC Dashboard" />
      <DashboadJPAC />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
