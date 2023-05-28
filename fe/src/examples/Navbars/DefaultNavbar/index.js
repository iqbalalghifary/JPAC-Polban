/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable global-require */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable react/button-has-type */
// /* eslint-disable global-require */
// /* eslint-disable jsx-a11y/alt-text */

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/Navbar.css";

export function Navbar() {
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

  // const history = useHistory();

  // const handleLogin = () => {
  //   history.push("/sign-in");
  // };

  return (
    <div>
      {/* first navbar */}
      <header className="header-1">
        <img
          src={require("./images/logos.png")}
          alt="Logo of the company"
          width={145}
          height={52}
        />
        <nav ref={navRef}>
          <a href="/#">Lowongan Pekerjaan</a>
          <a href="/#">Perusahaan Mitra</a>
          <a href="/#">Tracer Study</a>
          <button onClick={toggleDropdown}>Help</button>
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
        <Link to="/sign-in" className="btn-login">
          Login
          <svg
            width="3"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          />
        </Link>
        {/* <button type="button" className="btn-login" onClick={handleLogin}>
          Login
          <svg
            width="3"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          />
        </button> */}
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
          <Link to="/membership">
            <a>Membership</a>
          </Link>
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

// import React, { useState, useRef, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Routes, Route, Navigate } from "react-router-dom"; // Menambahkan import untuk react-router-dom
// import "./Styles/Navbar.css";
// import Membership from "../../Sections/Membership/Membership";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef();
//   // const location = useLocation(); // Menambahkan penggunaan useLocation dari react-router-dom

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   useEffect(() => {
//     const handleWindowClick = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("click", handleWindowClick);

//     return () => {
//       window.removeEventListener("click", handleWindowClick);
//     };
//   }, [navRef]);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       {/* first navbar */}
//       <header className="header-1">
//         <img src={require("./images/logos.png")} width={145} height={52} />
//         <h3>Pusat Karir POLBAN</h3>
//         <nav ref={navRef}>
//           {/* Menggunakan komponen <Navigate> untuk mengganti tautan */}
//           <Navigate to="/lowongan-pekerjaan">Lowongan Pekerjaan</Navigate>
//           <Navigate to="/perusahaan-mitra">Perusahaan Mitra</Navigate>
//           <Navigate to="/tracer-study">Tracer Study</Navigate>
//           <a href="#" onClick={toggleDropdown}>
//             Help
//           </a>
//           {isOpen && (
//             <ul>
//               <li>
//                 <a href="#">Option 1</a>
//               </li>
//               <li>
//                 <a href="#">Option 2</a>
//               </li>
//               <li>
//                 <a href="#">Option 3</a>
//               </li>
//             </ul>
//           )}
//         </nav>
//         <button type="button" className="btn-login">
//           Login
//           <svg
//             width="3"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           />
//         </button>
//         <button type="button" className="btn-register">
//           register
//           <svg
//             width="3"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           />
//         </button>
//       </header>

//       {/* second navbar */}
//       <header className="header-2">
//         <nav ref={navRef}>
//           {/* Menggunakan komponen <Navigate> untuk mengganti tautan */}
//           <Navigate to="/">Home</Navigate>
//           <Navigate to="/membership">Membership</Navigate>
//           <Navigate to="/payment-confirmation">Payment Confirmation</Navigate>
//           <Navigate to="/pengumuman">Pengumuman</Navigate>
//           <Navigate to="/agenda">Agenda</Navigate>
//           <Navigate to="/galeri">Galeri</Navigate>
//           <Navigate to="/about-us">About Us</Navigate>
//           <button type="button" className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <FaTimes />
//           </button>
//         </nav>
//         <button type="button" className="nav-btn" onClick={showNavbar}>
//           <FaBars />
//         </button>
//       </header>

//       {/* Menambahkan komponen <Routes> untuk menentukan routing */}
//       <Routes>
//         <Route path="/membership" element={<Membership />} />
//         {/* <Route path="/perusahaan-mitra" element={<PerusahaanMitra />} />
//         <Route path="/tracer-study" element={<TracerStudy />} /> */}
//         {/* Tambahkan rute lainnya sesuai kebutuhan */}
//       </Routes>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useState, useRef, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { BrowserRouter, Link, Route } from "react-router-dom";
// import "./Styles/Navbar.css";
// import Membership from "../../Sections/Membership/Membership";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   useEffect(() => {
//     const handleWindowClick = (event) => {
//       // If user clicks outside of the nav element, close the dropdown
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("click", handleWindowClick);

//     return () => {
//       window.removeEventListener("click", handleWindowClick);
//     };
//   }, [navRef]);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <BrowserRouter>
//       <div>
//         {/* first navbar */}
//         <header className="header-1">
//           <img src={require("./images/logos.png")} width={145} height={52} />
//           <h3>Pusat Karir POLBAN</h3>
//           <nav ref={navRef}>
//             <Link to="/lowongan-pekerjaan">Lowongan Pekerjaan</Link>
//             <Link to="/perusahaan-mitra">Perusahaan Mitra</Link>
//             <Link to="/tracer-study">Tracer Study</Link>
//             <Link to="#" onClick={toggleDropdown}>
//               Help
//             </Link>
//             {isOpen && (
//               <ul>
//                 <li>
//                   <Link to="#">Option 1</Link>
//                 </li>
//                 <li>
//                   <Link to="#">Option 2</Link>
//                 </li>
//                 <li>
//                   <Link to="#">Option 3</Link>
//                 </li>
//               </ul>
//             )}
//           </nav>
//           <button type="button" className="btn-login">
//             Login
//             <svg
//               width="3"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             />
//           </button>
//           <button type="button" className="btn-register">
//             register
//             <svg
//               width="3"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             />
//           </button>
//         </header>

//         {/* second navbar */}
//         <header className="header-2">
//           <nav ref={navRef}>
//             <Link to="/">Home</Link>
//             <Link to="/membership">Membership</Link>
//             <Link to="/payment-confirmation">Payment Confirmation</Link>
//             <Link to="/pengumuman">Pengumuman</Link>
//             <Link to="/agenda">Agenda</Link>
//             <Link to="/galeri">Galeri</Link>
//             <Link to="/about-us">About Us</Link>
//             <button type="button" className="nav-btn nav-close-btn" onClick={showNavbar}>
//               <FaTimes />
//             </button>
//           </nav>
//           <button type="button" className="nav-btn" onClick={showNavbar}>
//             <FaBars />
//           </button>
//         </header>

//         {/* <Route path="/" exact component={Home} />
//         <Route path="/lowongan-pekerjaan" component={LowonganPekerjaan} />
//         <Route path="/perusahaan-mitra" component={PerusahaanMitra} />
//         <Route path="/tracer-study" component={TracerStudy} /> */}
//         <Route path="/membership" component={Membership} />
//         {/* <Route path="/payment-confirmation" component={PaymentConfirmation} />
//         <Route path="/pengumuman" component={Pengumuman} />
//         <Route path="/agenda" component={Agenda} />
//         <Route path="/galeri" component={Galeri} />
//         <Route path="/about-us" component={AboutUs} /> */}
//       </div>
//     </BrowserRouter>
//   );
// }

// export default Navbar;

// import React, { useState, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./Styles/Navbar.css";

// function Navbar() {
//   // eslint-disable-next-line no-unused-vars
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };

//   // const toggleDropdown = () => {
//   //   setIsOpen(!isOpen);
//   // };

//   return (
//     <div>
//       {/* first navbar */}
//       <header className="header-1">
//         {/* <img src={require("./images/logos.png").default} width={145} height={52} alt="Logo" /> */}
//         <h3>Pusat Karir POLBAN</h3>
//         <nav ref={navRef}>
//           <Link to="/lowongan-pekerjaan">Lowongan Pekerjaan</Link>
//           <Link to="/perusahaan-mitra">Perusahaan Mitra</Link>
//           <Link to="/tracer-study">Tracer Study</Link>
//           {/* <Link to="#" onClick={toggleDropdown}>
//             Help
//           </Link> */}
//           {/* {isOpen && (
//             <ul>
//               <li>
//                 <Link to="#">Option 1</Link>
//               </li>
//               <li>
//                 <Link to="#">Option 2</Link>
//               </li>
//               <li>
//                 <Link to="#">Option 3</Link>
//               </li>
//             </ul>
//           )} */}
//         </nav>
//         <button type="button" className="btn-login">
//           Login
//           <svg
//             width="3"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           />
//         </button>
//         <button type="button" className="btn-register">
//           register
//           <svg
//             width="3"
//             height="16"
//             viewBox="0 0 16 16"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           />
//         </button>
//       </header>

//       {/* second navbar */}
//       <header className="header-2">
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/membership">Membership</Link>
//           <Link to="/payment-confirmation">Payment Confirmation</Link>
//           <Link to="/pengumuman">Pengumuman</Link>
//           <Link to="/agenda">Agenda</Link>
//           <Link to="/galeri">Galeri</Link>
//           <Link to="/about-us">About Us</Link>
//           <button type="button" className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <FaTimes />
//           </button>
//         </nav>
//         <button type="button" className="nav-btn" onClick={showNavbar}>
//           <FaBars />
//         </button>
//       </header>
//     </div>
//   );
// }

// export default Navbar;
