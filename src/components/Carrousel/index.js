import React from "react";
import Card from "../Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carrousel.css";

function Carrousel(props) {
  const { infoProduct } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {infoProduct.map((info) => {
          return (
            <div key={info.id}>
              <Card infoProduct={info} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carrousel;
