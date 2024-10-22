import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterApps from "../footer/FooterApps";
import FooterContent3 from "../footer/FooterContent3";

const Footer = () => {
  return (
    <footer
      className="main-footer style-three"
      style={{ backgroundImage: "url(images/background/3.png)" }}
    >
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <img src="/images/polban-logo.svg" alt="brand" />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Phone / Fax </span>
                  <a href="thebeehost@support.com">022.2006391</a>
                </p>
                <p className="address">
                Gd. P2T, lantai 3,Jl. Gegerkalong Hilir
                Ds. Ciwaruga Bandung
                  <a href="jpac@polban.ac.id" className="email">
                    Email : jpac@polban.ac.id
                  </a>
                </p>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent3 />

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title">Other Official Websites</h4>
                    <FooterApps />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
