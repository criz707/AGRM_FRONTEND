import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import '../../Styles/Desktop/usuario/Ajustes_u/Ajustes_u.css'


export const Ajustes_u = () => {
  
  const navigate = useNavigate();
  const goToMesas = () => {
    navigate("/usuario/mesas_reserva")
  }
  const goToInicio = () => {
    navigate("/")
  }
  const goToCuenta = () =>{
    navigate("/usuario/ajustes_u/cuenta_u")
  }


  return (

    <div className="ajustes_u">

<Navbar ajustes={"/usuario/ajustes_u"} inicio={"/usuario/home_u"} notificaciones={"/usuario/notificaciones_u"}/>

        <div className="body">
            <div className="menu">
              <p onClick={goToCuenta}>Cuenta</p>
              <p onClick={goToMesas}>Mesas</p>
              <p onClick={goToInicio}>Cerrar Sesion</p>
            </div>
        </div>

    </div>
  )
}
