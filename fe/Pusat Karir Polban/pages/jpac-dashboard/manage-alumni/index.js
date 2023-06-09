import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManageAlumni from "../../../components/dashboard-pages/jpac-dashboard/manage-alumni";

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Alumni" />
      <ManageAlumni />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
