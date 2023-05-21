import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Mitra.css";
import Section from "../../HOC/Section";

const images = [
  {
    id: 1,
    src: "https://ecs7.tokopedia.net/img/attachment/2019/10/14/40768394/40768394_a4b8c9ee-581e-4be6-b320-b467276927ec.jpg",
    alt: "Image 1",
    title: "Tokopedia",
    link: "/page1",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    title: "Shopee",
    link: "/page2",
  },
  {
    id: 3,
    src: "https://i0.wp.com/ebizmark.id/wp-content/uploads/2022/09/Ebizmark.jpg?fit=1380%2C1380&ssl=1",
    alt: "Image 3",
    title: "Ebizmark",
    link: "/page3",
  },
  // Tambahkan lebih banyak objek gambar jika diperlukan
];

function Mitra() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Section id="mitra">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 mb-4 mt-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Cari berdasarkan judul"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="input-group-append">
                <button className="btn btn-primary search-button" type="button">
                  <i className="fas fa-search search-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredImages.map((image) => (
            <div className="col-md-2 mb-4 mt-4" key={image.id}>
              <Link to={image.link}>
                <div className="card">
                  <img src={image.src} alt={image.alt} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{image.title}</h5>
                  </div>
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
