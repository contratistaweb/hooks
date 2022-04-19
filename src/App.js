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

const useMouseColor = colorInicial => {
    const [color, setColor] = useState(colorInicial);
    
    const cambiarColor = (color) => {
    setColor(color)
  }

    return {color, cambiarColor}
  }
  

function App() {
  const { contador, incrementar } = useContador(0);
  const { color, cambiarColor } = useMouseColor('gray');
  useEffect(()=>{
    const onMouseMove = (event) => {
      if(event.clientX < window.innerWidth/2){
        cambiarColor('gray');
      }else{
        cambiarColor('black')
      }
    }
    window.addEventListener('mousemove', onMouseMove)
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ height: '100vh', width: '100%', background: color}}>
          <p>
          {contador}
        </p>
        </div>
        
        <button onClick={incrementar}>Incrementar</button>
      </header>
    </div>
  );
}

export default App;
