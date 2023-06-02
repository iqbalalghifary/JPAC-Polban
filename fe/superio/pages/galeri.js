import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Galeri from "/components/galeri";

const index = () => {
  return (
    <>
      <Seo pageTitle="Home-2" />
      <Galeri />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
