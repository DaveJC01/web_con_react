import "./Formulario.css"
import { useState } from "react"





export function Formulario({setUser}){
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
    



    const handleSubmit = (e) =>{
        e.preventDefault()
        /* funcion para mostar el mensage de error */
        if (usuario == "" || contraseña == "") {
            setError(true)
            return
        }
        setError(false)
        setUser([usuario])   
    }       

    return(


        /* Sesion de iniciar sesion */
        <section>
            <h1 className="titulo">Iniciar sesión</h1>

            <form className="Formulario"
                onSubmit={handleSubmit} >
                <label className="lab">Usuario:</label>
                <input type="text" className="usuario"
                value={usuario}
                onChange={e => setUsuario(e.target.value)} />

                <label className="lab">Contraseña:</label>
                <input type="password" className=" contraseña"
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                />

                <button>Iniciar sesión</button> 
            </form>
            {/* Mostrar el error si los capos estan vacios */}
             {error && <p>¡Todos los campos son obligatorios!</p>} 

             
            
        </section>

        

        
         
    )
}