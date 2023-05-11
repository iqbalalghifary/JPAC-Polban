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
          src={require("examples/Navbars/DefaultNavbar/images/logo.png")}
          width={40}
          height={52}
        />
        <h3>Pusat Karir POLBAN</h3>
        <nav ref={navRef}>
          <a href="/#">Lowongan Pekerjaan</a>
          <a href="/#">Perusahaan Mitra</a>
          <a href="/#">Tracer Study</a>
          <a href="/#">Help</a>
          {/* <button
            disabled={showNavbar}
            type="submit"
            style={{ width: "20%" }}
            className="p-2 w-150"
          >
            Login
          </button> */}
          {/* <button className="btn-register">
            Register
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            />
          </button> */}
          {/* <button type="button" className="nav-btn nav-close-btn" onClick={showNavbar}>
            Login <FaTimes />
          </button> */}
        </nav>
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

// import React from 'react';
// import "examples/Navbars/DefaultNavbar/Styles/main.css";

// const Navbar = () => {
//   return (
//     <div>
//       <header className="navbar-header">
//         <h1 className="logo">Logo</h1>
//         <nav className="navbar">
//           <ul className="nav-list">
//             <li className="nav-item">Home</li>
//             <li className="nav-item">About</li>
//             <li className="nav-item">Contact</li>
//           </ul>
//         </nav>
//       </header>
//       <header className="navbar-header">
//         <h1 className="logo">Logo</h1>
//         <nav className="navbar">
//           <ul className="nav-list">
//             <li className="nav-item">Shop</li>
//             <li className="nav-item">Cart</li>
//             <li className="nav-item">Profile</li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
