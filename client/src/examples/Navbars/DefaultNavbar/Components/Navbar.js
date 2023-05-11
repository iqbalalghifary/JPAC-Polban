/* eslint-disable react/button-has-type */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "examples/Navbars/DefaultNavbar/Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header className="header header-1">
        <img
          src={require("examples/Navbars/DefaultNavbar/images/logos.png")}
          href="/#"
          width={150}
          height={52}
        />
        <nav ref={navRef}>
          <a href="/#">Lowongan Pekerjaan</a>
          <a href="/#">Perusahaan Mitra</a>
          <a href="/#">Tracer Study</a>
          <a href="/#">Help</a>
        </nav>
        <nav ref={navRef} />
        <nav ref={navRef} />
        <nav ref={navRef} />
        <nav ref={navRef} />
        <nav ref={navRef} />
        <nav ref={navRef}>
          <button className="btn-login">
            Login
            <svg
              width="3"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            />
          </button>
          <button className="btn-register">
            register
            <svg
              width="3"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            />
          </button>
        </nav>
        {/* <button type="button" className="nav-btn" onClick={showNavbar}>
          Register <FaBars />
        </button> */}
      </header>
      <header className="header header-2">
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">Membership</a>
          <a href="/#">Payment Confirmation</a>
          <a href="/#">Pengumuman</a>
          <a href="/#">Agenda</a>
          <a href="/#">Galeri</a>
          <a href="/#">About Us</a>
          <button type="button" className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button type="button" className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
