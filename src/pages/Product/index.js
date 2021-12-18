import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logoSmall from "../../picture/logo-s.png";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./Product.css";
import FormaPago from "../../picture/cuotas.png";
import Carrousel from "../../components/Carrousel";

function Product() {
  const { site } = useParams();
  const [inputSearch, setInputSearch] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setInputSearch(value);
    //console.log(inputSearch);
  }

  function handleClick() {
    if (inputSearch.trim() !== "") {
      console.log("valido");
      fetchData();
    } else {
      console.log("error");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    handleClick();
  }

  const [dataProduct, setDataProduct] = useState([]);

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
          <>
            <p></p>
          </>
        )}
      </main>
    </>
  );
}

export default Product;
