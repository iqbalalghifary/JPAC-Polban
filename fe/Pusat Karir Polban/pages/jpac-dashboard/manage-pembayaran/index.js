import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import ManagePembayaran from "../../../components/dashboard-pages/jpac-dashboard/manage-pembayaran";

const index = () => {
  return (
    <>
      <Seo pageTitle="Manage Pembayaran" />
      <ManagePembayaran />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
