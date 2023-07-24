
import './App.css';
import logoPCA from './Imagenes/logopca_1.png'
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador'
import { useState } from 'react';

function App() {
  const [numClics, setnumClics] =useState(0);

  const manejarClic = () =>{
    setnumClics(numClics+1);
  }
  const reiniciarContador = () =>{
    setnumClics(0);
  }
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img 
          className='logo'
          src={logoPCA}
          alt='logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto='Clic' esBotonclic={true} manejarClic={manejarClic} />
        <Boton texto='Reiniciar' esBotonclic={false} manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
