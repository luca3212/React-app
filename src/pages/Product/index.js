import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logoSmall from "../../picture/logo-s.png";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import "./Product.css";

function Product() {
  const { site } = useParams();

  const [inputSearch, setInputSearch] = useState("");
  const [stateSearch, setStateSearch] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setInputSearch(value);
    //console.log(inputSearch);
  }

  function handleClick() {
    if (inputSearch.trim() !== "") {
      console.log("valido");
      setStateSearch(true);
    } else {
      console.log("error");
      setStateSearch(false);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    handleClick();
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

      <main>
        <p>El valor que viene en la url es: {site}</p>

        {stateSearch && (
          <>
            <p>busqueda iniciada</p>
            <p>{inputSearch}</p>
          </>
        )}
      </main>
    </>
  );
}

export default Product;
