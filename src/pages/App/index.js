import React, {useState, useEffect} from "react";
import logoXL from "../../picture/logo-l.png";
import Country from "../../components/Country";
import "./App.css";


function App(){

    const [userCountry, setUserCountry] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    async function fetchData(){
        const data = await fetch("https://api.mercadolibre.com/sites");
        const jsonData = await data.json();
        const ordenados = [...jsonData].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
        setUserCountry(ordenados);
    }

    return(
        <main className="home">
            <div className="conteLogo">
                <img src={logoXL} className="logoPrincipal" alt="" />
            </div>
            <div className="conteLogo">
                <ul>
                    {userCountry.map((data, key)=>{
                        return (
                            <Country 
                                key={key}
                                nameCountry={data.name}
                                idCountry={data.id}
                            />
                        )
                    })
                    }
                </ul>
            </div>
        </main>
    );
}

export default App;