import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManageMou from "../../../components/dashboard-pages/jpac-dashboard/manage-mou";

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Jobs" />
      <ManageMou />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
