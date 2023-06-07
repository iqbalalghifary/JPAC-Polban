import LoginPopup from "../../common/form/login/LoginPopup";
import Partner from "../../common/partner/Partner";
import Footer from "../../home-4/Footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import IntroDescriptions from "./IntroDescriptions";
import CallToAction2 from "../../call-to-action/CallToAction2";
import Breadcrumb from "../../common/Breadcrumb";
import MapJobFinder from "../../job-listing-pages/components/MapJobFinder";

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

      
      <div className="listing-maps">
        <div style={{ height: "500px", width: "100%" }}>
          <MapJobFinder />
        </div>
      </div>
      {/* <!-- Map --> */}


      <Breadcrumb title="About Us" meta="About Us" />
      {/* <!--End Page Title--> */}

      <section className="about-section-three">
        <div className="auto-container">
          <IntroDescriptions />
        </div>
      </section>

      <CallToAction2 />

      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
        <Footer />
      </section>
      {/* <!-- End Clients Section--> */}
    </>
  );
};

export default index;
