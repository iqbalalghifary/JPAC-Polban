import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";

const index = () => {
  return (
    <>
      <Seo pageTitle="Job List V14" />
      {/* <JobListV14 /> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
