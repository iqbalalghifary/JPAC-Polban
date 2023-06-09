import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManageLoker from "../../../components/dashboard-pages/jpac-dashboard/manage-loker";

const index = () => {
  return (
    <>
      <Seo pageTitle="All Applicants" />
      <ManageLoker />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
