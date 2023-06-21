import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import LowonganKerja from "../components/job-listing-pages/lowongan-kerja";

const index = () => {
  return (
    <>
      <Seo pageTitle="Lowongan Pekerjaan" />
      <LowonganKerja />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
