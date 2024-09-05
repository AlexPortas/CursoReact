import {useState} from 'react';
import './App.css';
import ComponenteMultiple from './components/bloque';

function App() {
  const [dias,setDias]=useState(0);
  const [tipo, setTipo]=useState("Hotel");
  const selector=(e)=>{
    setTipo(e.target.value);
  }
  return (
    <div>
      <h1>Calculador de precios</h1>
      <div>
        <select onChange={selector}>
          <option value="Hotel">Hotel</option>
          <option value="Coche">Coche </option>
        </select>
        <input onChange={e=>setDias(e.target.value)} type='text' placeholder='Introduce los dias'/>
        { tipo==="Hotel" && <ComponenteMultiple tipo={1} dias={dias}/>}
        { tipo==="Coche" && <ComponenteMultiple tipo={2} dias={dias}/>}
      </div>
    </div>
  );
}

export default App;
