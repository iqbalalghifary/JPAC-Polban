import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import PengumpulanMou from "../../../components/dashboard-pages/employers-dashboard/pengumpulan-mou";

const index = () => {
  return (
    <>
      <Seo pageTitle="Pengumpulan Mou" />
      <PengumpulanMou />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
