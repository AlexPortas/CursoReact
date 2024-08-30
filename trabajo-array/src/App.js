import logo from './logo.svg';
import './App.css';

function App() {
  const miArray=()=>{
    //const numeros=[15,321,64,95,21,15];
    const numeros=[{index:1,numero:15},{index:16,numero:321},{index:150,numero:64},{index:6,numero:95},{index:166,numero:21},{index:11,numero:15}];
    return(
      <p>{numeros.map((obj)=>{
        return <span key={obj.index}>&nbsp;{obj.index}&nbsp;{obj.indexnumero}</span>
      })}</p>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Datos Array</h1>
        {miArray()}
      </header>
    </div>
  );
}

export default App;
