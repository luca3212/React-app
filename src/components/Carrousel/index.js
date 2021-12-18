import React from "react";
import Card from "../Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carrousel.css";


function Carrousel(props) {
  const { infoProduct } = props;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 1010,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {infoProduct.map((info) => {
          return (
            <div key={info.id} style={{width: 214}}>
              <Card  infoProduct={info} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carrousel;
