import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const useContador = inicial => {
  const [contador, setContador] = useState(inicial)

  const incrementar = () => {
    setContador(contador + 1)
  }
  return { contador, incrementar }
}

function App() {
  const { contador, incrementar } = useContador(0);
  // useEffect se ejecuta cada vez que el estado cambia
  useEffect(()=>{
    console.log('contador :>> ', contador);
    document.title = contador;
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {contador}
        </p>
        <button onClick={incrementar}>Incrementar</button>
      </header>
    </div>
  );
}

export default App;
