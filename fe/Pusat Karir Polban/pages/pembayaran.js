import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Pembayaran from "../components/pages-menu/pembayaran";

const index = () => {
  return (
    <>
      <Seo pageTitle="Pembayaran" />
        <Pembayaran/>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
