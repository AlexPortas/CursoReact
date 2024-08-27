import logo from './logo.svg';
import './App.css';
import {useRef} from "react"

function App() {
  const eurosRef=useRef();
  const resultRef=useRef();

  const convertir=()=>{
    const eurosValor=eurosRef.current.value;
    const dolares=eurosValor*1.08;
    resultRef.current.innerHTML=dolares
  }
  return 
}

export default App;
