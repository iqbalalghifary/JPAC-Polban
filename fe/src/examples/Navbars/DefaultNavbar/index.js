/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    const handleWindowClick = (event) => {
      // If user clicks outside of the nav element, close the dropdown
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [navRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* first navbar */}
      <header className="header-1">
        <img src={require("./images/logos.png")} width={145} height={52} />
        <h3>Pusat Karir POLBAN</h3>
        <nav ref={navRef}>
          <a href="/#">Lowongan Pekerjaan</a>
          <a href="/#">Perusahaan Mitra</a>
          <a href="/#">Tracer Study</a>
          <a href="#" onClick={toggleDropdown}>
            Help
          </a>
          {isOpen && (
            <ul>
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          )}
        </nav>
        <button type="button" className="btn-login">
          Login
          <svg
            width="3"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          />
        </button>
        <button type="button" className="btn-register">
          register
          <svg
            width="3"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          />
        </button>
      </header>

      {/* second navbar */}
      <header className="header-2">
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
