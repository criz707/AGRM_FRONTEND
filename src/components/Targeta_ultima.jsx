import { useNavigate } from "react-router-dom"
import image from "../assets/mesa.jpg"
export const Tarjeta_ultima = ({reserva,minutos,horas,}) => {
    const navigate = useNavigate();

    const goToReserva = () => {
        navigate(reserva)
    }
     return (
    <div className="Tarjeta">
        <div className="Imagen">
        <img src={image} alt="image" />
        </div>
        <p className="Nombre">
            Mesa #1
            <br />
            Disponible por {minutos} minutos rango de hora: {horas}
        </p>
        <button className="Reserva_ultima" onClick={goToReserva}>
            ! Ir a reservar ¡
        </button>
    </div>)
}
