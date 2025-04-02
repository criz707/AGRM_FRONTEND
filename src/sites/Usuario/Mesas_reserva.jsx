import Navbar from "../../components/Navbar"
import foto_mesa from '../../assets/fondo_mesa.png'
import '../../Styles/Desktop/usuario/Mesas_reserva/Mesas_reserva.css'
import { useNavigate } from "react-router-dom"

export const Mesas_reserva = () => {
    const navigate = useNavigate();
    const goToReserva = () => {
        navigate("/usuario/reserva_u")
    }

    const goToHacerReserva = () => {
        navigate("/usuario/mesas_dispoibles")
    }
  return (
    <div className="mesas_reserva">
        <Navbar ajustes={"/usuario/ajustes_u"} inicio={"/usuario/home_u"} notificaciones={"/usuario/notificaciones_u"}/>

        <div className="titulo">
            Tus reservas 😃
        </div>

        <div className="body">


            <div className="target" onClick={goToReserva}>

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target" onClick={goToReserva}>

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target" onClick={goToReserva}>

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target" onClick={goToReserva}>

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target" onClick={goToReserva}>

                <div className="img">
                    <img src={foto_mesa} alt="" />
                </div>

                <div className="info" >
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>

            <div className="target" onClick={goToHacerReserva}>

                <div className="new">
                    +
                </div>

                <div className="info">
                    <p>Dia: 07 de marzo </p>
                    <p>Mesas: Mesa #2 </p>
                    <p>Horario: 2:00 pm 4:00 p.m</p>
                </div>
            </div>
        </div>
    </div>
  )
}
