import { useNavigate } from "react-router-dom"
import image from "../assets/mesa.jpg"

export const Tarjeta_mesa = ({reserva}) => {


    const navigate =useNavigate();
    const goToReserva = () =>{
        navigate(reserva)
    }

     return (
    <div className="Tarjeta">
        <div className="Imagen">

        <img src={image} alt="image" />
        </div>
        <p className="Nombre">
            Mesa #1
        </p>
        <button className="Reserva_btn" onClick={goToReserva}>
            ! Ir a reservar ¡
        </button>
    </div>)
}
