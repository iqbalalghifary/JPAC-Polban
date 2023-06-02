import LoginPopup from "../common/form/login/LoginPopup";
import Partner from "../common/partner/Partner";
import FooterDefault from "../footer/common-footer";
import DefaulHeader from "../header/DefaulHeader";
import MobileMenu from "../header/MobileMenu";
import Funfact from "../fun-fact-counter/Funfact";
import ImgBox from "../pages-menu/about/ImgBox";
import IntroDescriptions from "../pages-menu/about/IntroDescriptions";
import CallToAction2 from "../call-to-action/CallToAction2";
import Testimonial2 from "../testimonial/Testimonial2";
import Block1 from "../block/Block1";
import Breadcrumb from "../common/Breadcrumb";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Galeri" meta="Galeri" />
      {/* <!--End Page Title--> */}

      <section className="about-section-three">
        <div className="auto-container">
          <ImgBox />
          {/* <ImgBox />
          <ImgBox />
          <ImgBox /> */}
        </div>
      </section>
      {/* <!-- End About Section Three --> */}

      <CallToAction2 />
      {/* <!-- End CallToAction2 --> */}

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
