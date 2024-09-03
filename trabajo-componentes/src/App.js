import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import Saludo from './components/Saludo';

const ComponenteSaludar=()=>{
  return (
    <div>Que hai??</div>
  );
}

function App() {
  const usu={nombre:"Alex", apellido:"Alonso"  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Saludo usuario={usu}></Saludo><ComponenteSaludar></ComponenteSaludar>
        </p>
        <Contador></Contador>
      </header>
    </div>
  );
}

export default App;
