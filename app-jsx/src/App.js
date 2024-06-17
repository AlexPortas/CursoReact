import './App.css';

function App() {
  const titulo=<h1 className='centrar'>Aqui estamos...</h1>
  const suma=sumando(83,18);
  return <div><div>{titulo}</div><div>{suma}</div></div>
}

function sumando(a,b){
  return a+b;
}

export default App;
