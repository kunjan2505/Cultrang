import React, { useState } from "react";
import Slider from "react-slick";

import "./ImageSlider.css";



const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 100000,
    slidesToShow: 5,
    centerPadding: "0px",
    swipeToSlide: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
  ]

  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slide"}
          key={image.id}
        >
          <div className="slideWrapper">
            <img className="slideCard" src={image.src} alt={image.alt} />
          </div>
        </div>
      );
    }
    return null;
  });

  return <div className="slides"><Slider {...settings}>{templateImages}</Slider></div>;
};

export default ImageSlider;
