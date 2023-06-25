import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-3" />
      {/* <Home3 /> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
