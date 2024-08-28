import logo from './logo.svg';
import './App.css';
import {useRef} from "react"

function App() {
  const eurosRef=useRef();
  const resultRef=useRef();

  const convertir=()=>{
    const eurosValor=parseFloat(eurosRef.current.value);
    const dolares=eurosValor*1.08;
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
