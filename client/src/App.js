import React, { Fragment } from "react";
import Navbar from "examples/Navbars/DefaultNavbar";
import Footer from "examples/Footer";
import Sections from "examples/Sections/Section";

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
