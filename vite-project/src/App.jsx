import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BotonCambiante() {
  //Utilizamos el estado para gestionar el texto del boton
  const [textoBoton, setTextBoton] = useState('Seguir');

  //Funcion para cambiar el texto del boton al hacer clic
  const cambiarBoton = () => {
    if (textoBoton === 'Seguir') {
      setTextBoton('Siguiendo');
    } else {
      setTextBoton('Seguir');
    }
  };

  return (
    
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={cambiarBoton}>{textoBoton}</button>
      </div>
      
  )
}

export default App
