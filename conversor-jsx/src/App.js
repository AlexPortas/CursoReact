import logo from './logo.svg';
import './App.css';
import {useRef, useState, useEffect} from "react"

function App() {
  const [valorCamio, setValorCambio]=useState(null);
  const eurosRef=useRef();
  const resultRef=useRef();
  useEffect(()=>{
    const llamaAPI=async()=>{
      try{
          const respuesta=await fetch("https://v6.exchangerate-api.com/v6/3fcca9a31a526a04caf12b5d/latest/EUR");
          const datos= await respuesta.json();
          console.log(datos);
          setValorCambio(datos.conversion_rates.USD)
      }catch(e){
        console.error(e);
      }
    }
    llamaAPI();
  },[]
  );
  const convertir=()=>{
    const eurosValor=parseFloat(eurosRef.current.value);
    const dolares=eurosValor*valorCamio;
    resultRef.current.innerHTML=dolares.toFixed(2)+" $  "
  }
  return  <div>
    <h1>Conversor euros a dólares</h1>
    <input className='centrar' type='text' ref={eurosRef}></input>
    <button className='centrar' onClick={convertir}>Convertir</button>
    <div className='centrar resultado' ref={resultRef}></div>
  </div>
}

export default App;
