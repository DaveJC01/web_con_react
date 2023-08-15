
import './App.css'
import { Formulario } from './componentes/Formulario'
import { useState } from 'react'
import { Home } from './componentes/Home'
import React from 'react';
import { Registro } from './componentes/Registros';


   


function App() {
const [user, setUser] = useState([]) 





  return (
    
      <div className='App'>
        {

          !user.length > 0 
          ? <Formulario setUser={setUser} />
          :  <Home />
        }  

      </div>
    
  )
}

export default App
