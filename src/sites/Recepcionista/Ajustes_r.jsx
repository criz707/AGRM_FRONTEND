import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import '../../Styles/Desktop/recepcionista/Ajustes_r/Ajustes_r.css'




export const Ajustes_r = () => {
  const navigate = useNavigate();

  const goToCuenta = () =>{
    navigate("/recepcionista/ajustes_r/cuenta_r")
  }

  const goToHome = () => {
    navigate("/")
  }
  
  return (

    <div className="ajustes_u">
     <Navbar ajustes={"/recepcionista/ajustes_r"} inicio={"/recepcionista/inicio_rc"} notificaciones={"/recepcionista/notificaciones_r"}/>

        <div className="body">
            <div className="menu">
              <p onClick={goToCuenta}>Cuenta</p>
              <p onClick={goToHome}>Cerrar Sesion</p>
            </div>
        </div>

    </div>
  )
}
