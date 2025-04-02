import Navbar from "../../components/Navbar"
import foto_mesa from '../../assets/fondo_mesa.png'
import cerrado from '../../assets/cerrado.png'

import { Searchbar } from "../../components/Searchbar"
import '../../Styles/Desktop/usuario/Mesas_disponibles/Mesas_disponibles.css'
import { useNavigate } from "react-router-dom"

export const Mesas_dispoibles = () => {
    const navigate = useNavigate();
    const goToReserva = () => {
        navigate("/usuario/cambio_reserva")
    }

    const goToNoDisponibles = () =>{
        navigate("/usuario/no_disponibles")
    }
  return (
    <div className="mesas_disponibles">

        <Navbar ajustes={"/usuario/ajustes_u"} inicio={"/usuario/home_u"} notificaciones={"/usuario/notificaciones_u"}/>
        <Searchbar/>

        <div className="body">

            <div className="target" onClick={goToNoDisponibles}>

                <img className="imagen" src={foto_mesa} alt="" />
                <img className="cartel" src={cerrado} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            <div className="target" onClick={goToReserva}>

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>
            <div className="target" onClick={goToReserva}>

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>
            <div className="target" onClick={goToReserva}>

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>
            <div className="target" onClick={goToReserva}>

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>
            <div className="target" onClick={goToReserva}>

                <img className="imagen" src={foto_mesa} alt="" />

                <p className="titulo">Mesa 1</p>

                <button className="boton">
                    Ver disponibilidad
                </button>
            </div>

            </div>

    </div>
  )
}
