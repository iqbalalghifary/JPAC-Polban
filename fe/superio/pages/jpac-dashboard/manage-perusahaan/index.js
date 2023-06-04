import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManagePerusahaan from "../../../components/dashboard-pages/jpac-dashboard/manage-perusahaan";

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Jobs" />
      <ManagePerusahaan />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
