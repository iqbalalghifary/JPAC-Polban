import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import JobListV3 from "../components/job-listing-pages/lowongan-kerja";

const index = () => {
  return (
    <>
      <Seo pageTitle="Lowongan Pekerjaan" />
      <JobListV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
