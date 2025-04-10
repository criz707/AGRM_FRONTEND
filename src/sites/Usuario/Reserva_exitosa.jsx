import { Volver } from "../../components/Volver"
import mesa from "../../assets/mesa.jpg"
import '../../Styles/Desktop/usuario/Reserva_exitosa/Reserva_exitosa.css'
import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"



export const Reserva_exitosa = () => {
    const navigate = useNavigate();
    const goToMenu = () => {
        navigate("/usuario/mesas_reserva");
    }
    return (
        <div className="reserva_exitosa">

            <Volver ruta={"/usuario/mesas_reserva"} />

            <div className="body">

                <div className="info">

                    <li>Mesa para el 07 de marzoa las 2:00 pm - 4:00 p.m</li>
                    <li>Llegara un correo con al informacion requerida en unos minutos</li>

                    <Button className="boton" onClick={goToMenu}>
                        Volver al menu principal
                    </Button>

                </div>

                <div className="imagen">
                    <p>! Reserva realizada con exito ¡</p>
                    <img src={mesa} alt="" />
                </div>

            </div>

        </div>
    )
}

