import dynamic from "next/dynamic";
import Seo from "../components/common/Seo";
import Agenda from "../components/blog-meu-pages/agenda";

const index = () => {
  return (
    <>
      <Seo pageTitle="Agenda" />
      <Agenda />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
