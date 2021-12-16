//import Blog from "./components/Blog";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
//import logo from "./Fices.png";

///////////////////// Ejercicio useEffect /////////////////////////////
function App(){
  const [user, setUser] = useState({});

  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData(){
    const data = await fetch("https://api.github.com/users/luca3212");
    const jsonData = await data.json();
    setUser(jsonData);
  }

  return (
    <>
      <h1>soy la pagina de APP</h1>
      <Link to="/equipo">Ir a Equipo!</Link>
      <img src={user.avatar_url} alt="FotoPerfil" />
      <p>Nombre: {user.name}</p>
      <p>Ubicacion: {user.location}</p>
      <p>Bio: {user.bio}</p>
    </>
  );
}
///////////////////////////////////////////////////////////////////////

///////////////////// Ejercicio Callback //////////////////////////////

// import Compo1 from "./components/Compo1";
// import Compo2 from "./components/Compo2";

// function App(){
//   const [title , setTitle] = useState(false);
//   const [number1, setNumber1] = useState(false);
//   const [number2, setNumber2] = useState(false);

//   function handleClick(){
//     if(number1 >= number2){
//       setTitle("1");
//     }else{
//       setTitle("2");
//     }

//   }
//   function handleCallback(number, origen){
//     if(origen==="dos"){
//       setNumber2(number);
//     }else{
//       setNumber1(number);
//     }

//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Titulo</button>
//       <h1>{!title ? "Generar Numeros" : `El componente `+title+` tiene el mayor numero` }</h1>
    
//       <Compo1 
//         sendInfo="Componente Nro 1"
//         callback={handleCallback}
//         number={number1}
//       />
//       <Compo2 
//         sendInfo="Componente Nro 2"
//         callback={handleCallback}
//         number={number2}
//       />

//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////

// function App() {
//   //const [age, setAge] = useState(0);

//   const  [inputNumber, setInputNumber] = useState("");
//   const [arrNumeros, setArrNumeros] = useState([]);

//   const [imagenState, setImagenState] = useState(true);

//   const frutas = ['banana', 'manzana', 'melón', 'naranja', 'uvas'];

//   // const [message, setMessage] = useState('');
//   // const [counter, setCounter] = useState(0);

//   // function handleClick(){
//   //   //console.log('Click');
//   //   setMessage("Soy un mensaje actualizado");
//   // }
//   // function handleChange(e){
//   //   const {value} = e.target;
//   //   // console.log(name, value);
//   //   setMessage(value);
    
//   // }

//   // function handleCounter(){
//   //   setCounter((prevCounter) => prevCounter + 1);
//   // }

//   function handleChange(e){
//     const {valueAsNumber} = e.target;
//     setInputNumber(valueAsNumber);
//   }
//   function handleClick(){
//     const newArr = [...arrNumeros, inputNumber];
//     setArrNumeros(newArr);
//     setInputNumber("");
//   }

//   function handleClickButton(){
//     setImagenState((prevState)=> !prevState );
//   }

//   return (
//     <div>
//       <Blog 
//         title="Curso de react"
//         content="ESte es el parrafo principal"
//       />
//       {/* <span>Contador: {counter}</span>
//       <button onClick={handleCounter}>+1</button>
//       <span>El valor del estado es: {message}</span>
      
//       <button onClick={handleClick}>Click Me!</button>
//       <label>mensaje:</label>
//       <input type="text" name="name" onChange={handleChange}/> */}
//     <br/>
//       <input type="number" onChange={handleChange} value={inputNumber}/>
//       <button onClick={handleClick}>Agregar al Array</button>

//       <ul>
//         {arrNumeros.map((num, key) => {
//           return (
//             <li key={key}>{num}</li>
//           );
//         })}
//       </ul>

//       <ul>
//         {frutas.map((nombre, key)=>{
//           return (
//             <li key={key}>{nombre}</li>
//           );
//         })}
//       </ul>

//       <button onClick={handleClickButton}>Imagen</button>

      
//         {/* {imagenState === false ? 
//         (<p></p>) :
//         (<img src={logo} alt="foto"></img>)} */}
//       <div>
//         {imagenState === true && <img src={logo} alt="foto"></img>}
//       </div>


//       {/* {age > 0 && (
//         <>
//           {age >= 18 ? (
//             <p>Sos Mayor de Edad.</p>
//           ) : (
//             <p>Sos Menor de Edad.</p>
//           )}
//         </>
//       )} */}
     

//     </div>
//   );
// }

export default App;
