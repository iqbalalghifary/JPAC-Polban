import CopyrightFooter from "./CopyrightFooter";
import FooterContent from "./FooterContent";

const index = ({ footerStyle = "" }) => {
  return (
    <footer className={`main-footer ${footerStyle}`}>
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-4 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <img src="/images/polban-logo.svg" alt="brand" />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Hubungi Kami </span>
                  <a href="tel:022.2006391">022.2006391</a>
                </p>
                <p className="address">
                  Gd. P2T, lantai 3,Jl. Gegerkalong Hilir Ds. Ciwaruga Bandung
                  <a href="mailto:jpac@polban.ac.id" className="email">
                    jpac@polban.ac.id
                  </a>
                </p>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-8 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
    //   {/* <!-- End Main Footer --> */}
  );
};

export default index;
