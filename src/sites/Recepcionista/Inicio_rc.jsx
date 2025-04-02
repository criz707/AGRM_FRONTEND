import { useNavigate } from "react-router-dom"
import mesa from "../../assets/mesa.png"
import usuario  from '../../assets/recepcionista.jpg'
import Navbar from "../../components/Navbar"
import '../../Styles/Desktop/recepcionista/Inicio_rc/Inicio_rc.css'

export const Inicio_rc = () => {
  const navigate = useNavigate();
  const goToReservas = () =>{
    navigate("/recepcionista/mesas")
  }
  return (
    <div className = "inicio_rc">
        <Navbar ajustes={"/recepcionista/ajustes_r"} inicio={"/recepcionista/inicio_rc"} notificaciones={"/recepcionista/notificaciones_r"}/>

        <div className="body_home">
          <div className="contenido">

            <p className="titulo">¡Bienvenida Amanda! 😃</p>
            <p className="subtitulo">Recepcionista</p>

              <div className="mini_target" onClick={goToReservas}>

                  <img src={mesa} alt="" />
                  <p className="info">Mis reservas</p>

              </div>
            
          </div>


          <div className="imagen">
            <img src={usuario} alt="" />
          </div>
        </div>

    </div>
  )

}