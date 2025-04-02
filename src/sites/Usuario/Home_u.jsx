import Navbar from "../../components/Navbar"

import usuario from '../../assets/usuario.jpg'
import mesa from '../../assets/Iconos_perfil/mesa.png'
import '../../Styles/Desktop/usuario/Home_u/Home_u.css'
import { useNavigate } from "react-router-dom"

export const Home_u = () => {
  const navigate = useNavigate();
  const goToReservas = () =>{
        navigate("/usuario/mesas_reserva")
  }

  return (
    <div className="home_u">

      <Navbar ajustes={"/usuario/ajustes_u"} inicio={"/usuario/home_u"} notificaciones={"/usuario/notificaciones_u"}/>

      <div className="body_home">
        <div className="contenido">

          <p className="titulo">¡Bienvenido de nuevo Dick Shawns!</p>

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
