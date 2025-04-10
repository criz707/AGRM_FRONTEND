import foto_mesa from '../../assets/fondo_mesa.png'
import '../../Styles/Desktop/usuario/Reserva_u/Reserva_u.css'
import { Volver } from "../../components/Volver"
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'



export const Reserva_u = () => {
  const navigate = useNavigate();
  const goToCambioReserva = () => {
    navigate("/usuario/cambio_reserva")
  }

  const goToCancelar = () => {
    navigate("/usuario/reserva_cancelada")
  }

  return (
    <div className="reserva_u">
      <Volver ruta={"/usuario/mesas_reserva"} />

      <div className="reserva_body">

        <div className="info">
          <div className="data">
            <p>Reserva: 7 marzo</p>
            <p>Hora: 2 p.m - 4 p.m</p>
          </div>
          <Button className="boton" onClick={goToCambioReserva}>Editar reserva</Button>
          <Button className="boton_rojo" onClick={goToCancelar}>Cancelar reserva</Button>
        </div>

        <div className="image">
          <img src={foto_mesa} alt="" />
          <p>Mesa #2</p>
        </div>
      </div>
    </div>
  )
}
