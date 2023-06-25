import FormContent from "../../common/form/login/FormContent";
import LoginPopup from "../../common/form/login/LoginPopup";
import MobileMenu from "../../header/MobileMenu";
import Header from "./Header";
import { useEffect } from "react";
import Cookies from 'js-cookie';

const index = () => {

  useEffect(() => {
    if(Cookies.get('role') == "Operator"){
      window.location = "http://localhost:3000/jpac-dashboard/dashboard";
    } else if (Cookies.get('role') == "Partner"){
      window.location = "http://localhost:3000/employers-dashboard/dashboard";
    }
  });

  return (
    <>
      <Header />
      {/* <!--End Main Header -->  */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <MobileMenu />
      {/* End MobileMenu */}

      <div className="login-section">
        <div
          className="image-layer"
          style={{ backgroundImage: "url(images/background/12.jpg)" }}
        ></div>
        <div className="outer-box">
          {/* <!-- Login Form --> */}
          <div className="login-form default-form">
            <FormContent />
          </div>
          {/* <!--End Login Form --> */}
        </div>
      </div>
      {/* <!-- End Info Section --> */}
    </>
  );
};

export default index;
