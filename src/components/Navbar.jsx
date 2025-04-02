import notificacion from "../assets/notificacion.png";
import configuracion from "../assets/configuracion.png";
import casas from "../assets/casas.png";
import '../Styles/Desktop/Navbar/Navbar.css'
import { useNavigate } from "react-router-dom";

export default function Navbar({ajustes,inicio,notificaciones}) {
  const navigate = useNavigate();
  const goToAjustes = () =>{
    navigate(ajustes);
  }
  const goToInicio = () =>{
    navigate(inicio);
  }
  const goToNotificaciones = () =>{
    navigate(notificaciones);
  }
  return (
    <div className="Navbar" >

        <div className="item" onClick={goToAjustes}>
            <img src={configuracion} alt="casa" className="" />
            <p>Ajustes</p>
        </div>

        <div className="item" onClick={goToInicio}>
            <img src={casas} alt="casa" className="" />
            <p>Inicio</p>
        </div>

        <div className="item" onClick={goToNotificaciones}>
            <img src={notificacion} alt="casa" className="" />
            <p>Notificaciones</p>
        </div>

    </div>
  )
}
