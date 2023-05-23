import React, { Fragment } from "react";
import Sections from "./examples/Sections/Section";
import Navbar from "./examples/Navbars/DefaultNavbar";
import Footer from "./examples/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sections />
      </main>
      <Footer />
    </>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./examples/Navbars/DefaultNavbar";
// import Membership from "./examples/Sections/Membership/Membership";
// // import Footer from "./examples/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/membership" element={<Membership />} />
//         </Routes>
//         {/* Content lainnya */}
//         {/* <Footer /> */}
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
// import Navbar from "./examples/Navbars/DefaultNavbar";
// import Portal from "./examples/Sections/Portal/Portal";
// // import LowonganPekerjaan from "./LowonganPekerjaan";
// // import PerusahaanMitra from "./PerusahaanMitra";
// // import TracerStudy from "./TracerStudy";
// import Membership from "./examples/Sections/Membership/Membership";
// // import PaymentConfirmation from "./PaymentConfirmation";
// // import Pengumuman from "./Pengumuman";
// // import Agenda from "./Agenda";
// // import Galeri from "./Galeri";
// // import AboutUs from "./AboutUs";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />

//         <Route path="/" exact component={Portal} />
//         {/* <Route path="/lowongan-pekerjaan" component={LowonganPekerjaan} />
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

// export default App;

// import React from "react";
// import Navbar from "./examples/Navbars/DefaultNavbar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       {/* Konten aplikasi lainnya */}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Portal from "./examples/Sections/Portal/Portal";
// // import About from "./About";
// // import Contact from "./Contact";
// import Navbar from "./examples/Navbars/DefaultNavbar";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />

//         <Route path="/" exact component={Portal} />
//         {/* <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} /> */}
//       </div>
//     </Router>
//   );
// }

// export default App;
