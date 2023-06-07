import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import PerusahaanMitra from "../components/employers-listing-pages/perusahaan-mitra";

const index = () => {
  return (
    <>
      <Seo pageTitle="Perusahaan Mitra" />
      <PerusahaanMitra />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
