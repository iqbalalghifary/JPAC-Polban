import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Register from "../components/pages-menu/register";

const index = () => {
  return (
    <>
      <Seo pageTitle="Register" />
      <Register />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
