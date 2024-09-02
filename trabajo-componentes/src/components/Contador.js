import {useState} from "react";

const Contador=()=>{
  const [conta, setConta]=useState(1);
  const incrementar=()=>{
    setConta(conta+1);
  };
  const decrementar=()=>{
    setConta(conta-1);
  };
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <input type="text" value={conta} size="2" style={{textAlign:"center"}}></input>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default Contador;