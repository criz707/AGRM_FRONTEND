import { Volver } from "../../components/Volver"
import mesa from '../../assets/mesa.jpg'
import fallout from '../../assets/fallout_guy3.png'
import '../../Styles/Desktop/recepcionista/Reserva_confirmada/Reserva_confirmada.css'
export const Reserva_confirmada = () => {


  return (
    <div className="reserva_confirmada">
        <Volver ruta={"/recepcionista/mesas"}/>



        <div className="body">

            <div className="info">
                <img src={fallout} alt="" />
                <p> ! Asistencia confirmada ¡</p>
            </div>

            <div className="imagen">
                <img src={mesa} alt="" />
            </div>

        </div>


    </div>
  )
}
