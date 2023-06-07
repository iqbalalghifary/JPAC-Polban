import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Pengumuman from "../components/pengumuman";

const index = () => {
  return (
    <>
      <Seo pageTitle="Pengumuman" />
      <Pengumuman />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
