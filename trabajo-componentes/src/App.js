import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';

const ComponenteSaludar=()=>{
  return (
    <div>Que hai??</div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ComponenteSaludar></ComponenteSaludar>
        </p>
        <Contador></Contador>
      </header>
    </div>
  );
}

export default App;
