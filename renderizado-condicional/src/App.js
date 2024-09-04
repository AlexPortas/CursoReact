import logo from './logo.svg';
import './App.css';

function App() {
  const edad=3
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi edad son {edad}. {edad<18 ?(<span>Soy menor de edad.</span>): <span>Soy mayor de edad.</span>}
        </p>
      </header>
    </div>
  );
}

export default App;
