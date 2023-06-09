import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManageMahasiswa from "../../../components/dashboard-pages/jpac-dashboard/manage-mahasiswa";

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Mahasiswa" />
      <ManageMahasiswa />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
