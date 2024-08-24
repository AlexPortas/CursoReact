import './App.css';
import React, {useState} from "react";

function App() {
  // Definir estado para almacenar
  const [resultado, setResultado]=useState(null);

  const titulo=<h1 className='centrar'>Aqui estamos...</h1>

  const botonPulsado=()=>{
    const result=sumando(83,18);
    setResultado(result);
  }
  return <div>
      <button onClick={botonPulsado} style={{marginTop: "10px", marginLeft: "10px"}}>Pulsame</button>
      <div>{titulo}</div>
      <div>{resultado!=null && <h2>El resultado es {resultado}</h2>}
      </div>
    </div>
}

function sumando(a,b){
  return a+b;
}

export default App;
