import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Mitra.css";
import Section from "../../HOC/Section";

// import logo perusahaan
// import image1 from "./Images/tokopedia.png";
// import image2 from "./Images/logo_esdm.png";

const images = [
  {
    id: 1,
    src: "https://ecs7.tokopedia.net/img/attachment/2019/10/14/40768394/40768394_a4b8c9ee-581e-4be6-b320-b467276927ec.jpg",
    alt: "Image 1",
    link: "/page1",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://i0.wp.com/ebizmark.id/wp-content/uploads/2022/09/Ebizmark.jpg?fit=1380%2C1380&ssl=1",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    link: "/page2",
  },
  // Tambahkan lebih banyak objek gambar jika diperlukan
];

function Mitra() {
  return (
    <Section id="mitra">
      <div className="container">
        <div className="row">
          {images.map((image) => (
            // ngatur ukuran box nya
            <div className="col-md-2 mb-4 mt-4" key={image.id}>
              <Link to={image.link}>
                <div className="card">
                  <img src={image.src} alt={image.alt} className="card-img-top" />
                  {/* <div className="card-body">
                    <h5 className="card-title">{image.alt}</h5>
                  </div> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Mitra;
