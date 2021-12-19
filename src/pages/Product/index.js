import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logoSmall from "../../picture/logo-s.png";
import logoXL from "../../picture/logo-l.png";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./Product.css";
import FormaPago from "../../picture/cuotas.png";
import Carrousel from "../../components/Carrousel";

function Product() {
  const { site } = useParams();
  const [inputSearch, setInputSearch] = useState("");
  const [dataProduct, setDataProduct] = useState([]);

  function handleChange(e) {
    const { value } = e.target;
    setInputSearch(value);
  }

  function handleClick() {
    if (inputSearch.trim() !== "") {
      fetchData();
    } else {
      console.log("Error dato ingresado");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    handleClick();
  }

  async function fetchData() {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/${site}/search?q=${inputSearch}`
    );
    const jsonData = await data.json();
    setDataProduct(jsonData.results);
    setInputSearch("");
  }

  return (
    <>
      <header className="headNav">
        <div className="contLogo">
          <img src={logoSmall} alt="" />
        </div>
        <div className="ContForm">
          <form className="formSearch" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
              onChange={handleChange}
              value={inputSearch}
            />
            <button type="button" className="btonSearch" onClick={handleClick}>
              <Icon path={mdiMagnify} size={1} color="#666666" />
            </button>
          </form>
        </div>
      </header>

      <main className="contResult">
        {dataProduct.length ? (
          <>
            <h2 className="titleResult">Resultados de la búsqueda</h2>
            <Carrousel infoProduct={dataProduct} />
            <div className="infoPago">
              <h2>Promoción:</h2>
              <img src={FormaPago} alt="FormadePago" />
            </div>
          </>
        ) : (
          <div className="contStar">
            <img src={logoXL} alt="Logo MercadoLibre" />
            <span></span>
            <h3>
              Nunca <br /> dejes de
              <br />
              Buscar
            </h3>
          </div>
        )}
      </main>
    </>
  );
}

export default Product;
