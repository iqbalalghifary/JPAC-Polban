import Image from "next/image";
import { useState } from "react";

const ImgBox = () => {
  const imgContent = [
    {
      id: 1,
      block: [{ img: "about-img-1" }],
    },
    {
      id: 2,
      block: [{ img: "about-img-2" }, { img: "about-img-3" }],
    },
    {
      id: 3,
      block: [{ img: "about-img-4" }, { img: "about-img-5" }],
    },
    {
      id: 4,
      block: [{ img: "about-img-6" }],
    },
    {
      id: 5,
      block: [{ img: "about-img-1" }],
    },
    {
      id: 6,
      block: [{ img: "about-img-2" }, { img: "about-img-3" }],
    },
    {
      id: 7,
      block: [{ img: "about-img-4" }, { img: "about-img-5" }],
    },
    {
      id: 8,
      block: [{ img: "about-img-6" }],
    },
    {
      id: 9,
      block: [{ img: "about-img-1" }],
    },
    {
      id: 10,
      block: [{ img: "about-img-2" }, { img: "about-img-3" }],
    },
    {
      id: 11,
      block: [{ img: "about-img-4" }, { img: "about-img-5" }],
    },
    {
      id: 12,
      block: [{ img: "about-img-6" }],
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="images-box">
      {/* Kode lainnya */}
      <div className="row">
        {imgContent.map((item) => (
          <div className="column col-lg-3 col-md-6 col-sm-6" key={item.id}>
            {item.block.map((itemImg, i) => (
              <figure className="image" key={i}>
                <div
                  className="lightbox-image"
                  onClick={() =>
                    openLightbox(`/images/resource/${itemImg.img}.jpg`)
                  }
                >
                  <Image
                    src={`/images/resource/${itemImg.img}.jpg`}
                    alt="about image"
                    width={300}
                    height={200}
                  />
                  <span className="icon flaticon-magnifying-glass"></span>
                </div>
              </figure>
            ))}
          </div>
        ))}
      </div>
      {/* Kode lainnya */}

      {selectedImage && (
        <div className="lightbox-overlay">
          <div className="lightbox-content">
            <span className="lightbox-close" onClick={closeLightbox}>
              &times;
            </span>
            <Image
              src={selectedImage}
              alt="zoomed-in image"
              layout="responsive"
              width={800}
              height={600}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgBox;