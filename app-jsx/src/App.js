import './App.css';
import React, {useState} from "react";
import Reaact, {useRef} from "react";
import video from "./assets/video.mp4";

function App() {
  // Definir estado para almacenar
  const [resultado, setResultado]=useState(null);

  const titulo=<h1 className='centrar'>Aqui estamos...</h1>

  const botonPulsado=()=>{
    const result=sumando(83,18);
    setResultado(result);
  }

  const refVideo=useRef(null);
  const videoPlay=()=>{
    refVideo.current.play()
  }
  const videoPause=()=>{
    refVideo.current.pause()
  }

  return <div>
      <button onClick={botonPulsado} style={{marginTop: "10px", marginLeft: "10px"}}>Pulsame</button>
      <div>{titulo}</div>
      <div>{resultado!=null && <h2>El resultado es {resultado}</h2>}</div>
      <div>
        <video ref={refVideo}>
          <source src={video} type='video/mp4'></source>
        </video>
        <div>
          <button onClick={videoPlay}>Play</button>
          <button onClick={videoPause}>Pause</button>
        </div>
      </div>
    </div>
}

function sumando(a,b){
  return a+b;
}

export default App;
