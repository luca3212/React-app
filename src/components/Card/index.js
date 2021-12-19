import React from "react";
import "./Card.css";

function Card(props) {
  const { infoProduct } = props;

  return (
    <div className="contCard">
      <a href={infoProduct.permalink} target="_blank" rel="noreferrer">
        <div className="contPic">
          <img src={infoProduct.thumbnail} alt={infoProduct.title} />
        </div>

        <div className="conteInfo">
          <h1>$ {Number(infoProduct.price)}</h1>
          {infoProduct.shipping.free_shipping && <h2>Envío Gratis</h2>}
          <p>{infoProduct.title}</p>
        </div>
      </a>
    </div>
  );
}

export default Card;
