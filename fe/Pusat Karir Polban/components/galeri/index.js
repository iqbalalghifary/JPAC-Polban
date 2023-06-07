import LoginPopup from "../common/form/login/LoginPopup";
import Partner from "../common/partner/Partner";
import Footer from "../home-4/Footer";
import DefaulHeader from "../header/DefaulHeader";
import MobileMenu from "../header/MobileMenu";
import ImgBox from "../pages-menu/about/ImgBox";
import CallToAction2 from "../call-to-action/CallToAction2";
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
        <Footer />
      </section>
      {/* <!-- End Clients Section--> */}

      
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
