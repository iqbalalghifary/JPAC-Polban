import Blog8 from "../../blog/Blog8";
import Breadcrumb from "../../common/Breadcrumb";
import LoginPopup from "../../common/form/login/LoginPopup";
import Footer from "../../home-4/Footer";
import DefaulHeader from "../../header/DefaulHeader";
import MobileMenu from "../../header/MobileMenu";
import AgendaPagination from "../blog-sidebar/BlogPagination";

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

      <Breadcrumb title="Agenda" meta="Agenda" />
      {/* <!--End Page Title--> */}

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row">
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              <div className="blog-grid">
                <div className="row">
                  <Blog8 />
                </div>
                {/* End .row */}

                <AgendaPagination />
                {/* End blog pagination */}
              </div>
              {/* End blog-grid */}
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- End Sidebar Container --> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
