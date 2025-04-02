import {Volver} from "../../components/Volver"
import guy from '../../assets/fallout_guy2.png'
import foto_mesa from '../../assets/fondo_mesa.png'
import '../../Styles/Desktop/usuario/Reserva_cancelada/Reserva_cancelada.css'

export const Reserva_cancelada = () => {
  return (
    <div className="reserva_cancelada">

        <Volver ruta={"/usuario/mesas_reserva"}/>

        <div className="body">
            <div className="primero">
                <h3>¡Reserva cancelada!</h3>
                <img src={guy} alt="" />
            </div>

            <div className="segundo">
                <img src={foto_mesa} alt="" />
            </div>
        </div>

    </div>
  )
}
