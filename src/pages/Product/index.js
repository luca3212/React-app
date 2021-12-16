import React from "react";
import {useParams} from 'react-router-dom';

function Product(){
    const { site } = useParams();
    return(
        <>
        <p>El valor que viene en la url es: {site}</p>

        
        </>
    );
}

export default Product;