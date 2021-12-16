import React from "react";


function Compo2(props){
    const { sendInfo, callback, number } = props;
    function getRandom() {
        callback(Math.random(), "dos");
        //mandamos en la funcion que estamos ejecutando el numero
    }

    return(
        <div>
        <h2>{sendInfo}</h2>
        <button onClick={getRandom}>Generar Número</button>
        {number && <div>{number}</div>}
        </div>
    );
}

export default Compo2;