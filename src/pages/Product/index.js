import React from "react";
import { useParams } from "react-router-dom";
import logoSmall from "../../picture/logo-s.png";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./Product.css";

function Product() {
  const { site } = useParams();
  return (
    <>
      <header className="headNav">
        <div className="contLogo">
          <img src={logoSmall} alt="" />
        </div>
        <div className="ContForm">
          <form className="formSearch">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
            />
            <button className="btonSearch">
              <Icon path={mdiMagnify} size={1} color="#666666" />
            </button>
          </form>
        </div>
      </header>

      <main>
        <p>El valor que viene en la url es: {site}</p>
      </main>
    </>
  );
}

export default Product;
