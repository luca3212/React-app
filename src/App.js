import Blog from "./components/Blog";
import {useState} from "react";
import logo from "./Fices.png";

function App() {
  //const [age, setAge] = useState(0);

  const  [inputNumber, setInputNumber] = useState("");
  const [arrNumeros, setArrNumeros] = useState([]);

  const [imagenState, setImagenState] = useState(true);

  const frutas = ['banana', 'manzana', 'melón', 'naranja', 'uvas'];

  // const [message, setMessage] = useState('');
  // const [counter, setCounter] = useState(0);

  // function handleClick(){
  //   //console.log('Click');
  //   setMessage("Soy un mensaje actualizado");
  // }
  // function handleChange(e){
  //   const {value} = e.target;
  //   // console.log(name, value);
  //   setMessage(value);
    
  // }

  // function handleCounter(){
  //   setCounter((prevCounter) => prevCounter + 1);
  // }

  function handleChange(e){
    const {valueAsNumber} = e.target;
    setInputNumber(valueAsNumber);
  }
  function handleClick(){
    const newArr = [...arrNumeros, inputNumber];
    setArrNumeros(newArr);
    setInputNumber("");
  }

  function handleClickButton(){
    setImagenState((prevState)=> !prevState );
  }

  return (
    <div>
      <Blog 
        title="Curso de react"
        content="ESte es el parrafo principal"
      />
      {/* <span>Contador: {counter}</span>
      <button onClick={handleCounter}>+1</button>
      <span>El valor del estado es: {message}</span>
      
      <button onClick={handleClick}>Click Me!</button>
      <label>mensaje:</label>
      <input type="text" name="name" onChange={handleChange}/> */}
    <br/>
      <input type="number" onChange={handleChange} value={inputNumber}/>
      <button onClick={handleClick}>Agregar al Array</button>

      <ul>
        {arrNumeros.map((num, key) => {
          return (
            <li key={key}>{num}</li>
          );
        })}
      </ul>

      <ul>
        {frutas.map((nombre, key)=>{
          return (
            <li key={key}>{nombre}</li>
          );
        })}
      </ul>

      <button onClick={handleClickButton}>Imagen</button>

      
        {/* {imagenState === false ? 
        (<p></p>) :
        (<img src={logo} alt="foto"></img>)} */}
      <div>
        {imagenState === true && <img src={logo} alt="foto"></img>}
      </div>


      {/* {age > 0 && (
        <>
          {age >= 18 ? (
            <p>Sos Mayor de Edad.</p>
          ) : (
            <p>Sos Menor de Edad.</p>
          )}
        </>
      )} */}
     

    </div>
  );
}

export default App;
