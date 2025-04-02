import "../../Styles/Desktop/recepcionista/Mesas/Mesas.css"
import fecha_logo from '../../assets/fecha.png';
import  {Tarjeta_mesa} from "../../components/Tarjeta_mesa.jsx"
import Navbar from "../../components/Navbar.jsx"
import { useNavigate } from "react-router-dom";

export const Mesas = () => {
  const navigate = useNavigate();
  const goToUltimaHora = () =>{
    navigate("/recepcionista/mesas/ultima_hora");
  }
  return (
    

    <div className="mesas_recepcion">
      <Navbar ajustes={"/recepcionista/ajustes_r"} inicio={"/recepcionista/inicio_rc"} notificaciones={"/recepcionista/notificaciones_r"}/>

      <p className="titulo">¡Mesas Disponibles!</p>

      <div className="Header">
        <img src={fecha_logo} alt="" className="imagen" />
        <input type="date" className="Fecha" id="" placeholder=" : "/>
      </div>
        <a href="#" className="libres" onClick={goToUltimaHora}>Libres a ultima hora! 😋</a>
    
        <div className="Seccion_mesas">
          <Tarjeta_mesa reserva={"/recepcionista/mesas/reserva"}/>
          <Tarjeta_mesa reserva={"/recepcionista/mesas/reserva"}/>
          <Tarjeta_mesa reserva={"/recepcionista/mesas/reserva"}/>
          <Tarjeta_mesa reserva={"/recepcionista/mesas/reserva"}/>
          <Tarjeta_mesa reserva={"/recepcionista/mesas/reserva"}/>
          <Tarjeta_mesa reserva={"/recepcionista/mesas/reserva"}/>
          <Tarjeta_mesa reserva={"/recepcionista/mesas/reserva"}/>
          <Tarjeta_mesa reserva={"/recepcionista/mesas/reserva"}/>

    </div>
    </div>
  )
}
