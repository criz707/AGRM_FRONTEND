import logo from "../assets/logo.png"
import '../Styles/Desktop/Inicio_sesion/Inicio_sesion.css'
import { useNavigate } from "react-router-dom"
import { Volver } from "../components/Volver"
import { useState } from "react"


export const Inicio_sesion = () => {
  const navigate = useNavigate();

  //Estados del coreo y contrasena:
  const [correo,setCorreo] = useState();
  const [contrasena,setContrasena] = useState();


  const goToProfile = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    //Este if es para verificar las credenciales del admin
    if(correo == "travolta" && contrasena == "123" ){
      navigate("/admin/inicio_a"); // Navega al admin
    }
    //Este if es para el usuario normal
    else if(correo == "dick" && contrasena == "123"){
      navigate("/usuario/home_u"); // Navega al usuario
    }
    //Este if es para el recepcionista
    else if(correo == "inoc" && contrasena == "123"){
      navigate("/recepcionista/inicio_rc")
    }
    //Este if es para el gerente
    else if(correo == "jeremy" && contrasena == "123"){
      navigate("/gerente/inicio_g")
    }
  };


  const goToRegistrate = () =>{
    navigate("/registro")
  }
  
  const goToRecuperar = () =>{
    navigate("/recuperar_c")
  }
  return (
    <div className = "inicio">
        <div className="header">
            <Volver ruta="/"/>
            <div className="titulo" >
                Inicio sesion - BBQ REAL SMOKE
            </div>
        </div>

        
        <form className="sesion" onSubmit={goToProfile}>

          <p>Correo:</p>
          <input type="text" placeholder="Correo" onChange={(e) => setCorreo(e.target.value)}/>

          <p>Contraseña:</p>
          <input type="text" placeholder="Contrasena" onChange={(e) => setContrasena(e.target.value)}/>

          <a href="" className="enlace" onClick={goToRegistrate}>
            Registrate 😋
          </a>
          <a href="" className="enlace" onClick={goToRecuperar}>
            Olvide mi contrasena 😱
          </a>
          <button type="submit" >
            Ingresar
          </button>
          
        </form>

        <div className="imagen">
            <div className="title">BBQ EL REAL</div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>

    </div>
  )
}