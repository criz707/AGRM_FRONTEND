import { useNavigate } from 'react-router-dom'
import fallout_cansado from '../../assets/fallout_cansado.png'
import {Volver} from "../../components/Volver"
import '../../Styles/Desktop/usuario/Error_reserva/Error_reserva.css'


export const Error_reserva = () => {
    const navigate = useNavigate();
    const goToHome = () =>{

        navigate("/usuario/mesas_reserva")

    }
  return (
    <div className="error">
        <Volver ruta={"/usuario/mesas_reserva"}/>

        <div className="body">
            <div className="error">

                <p className="erno">
                    Error al realizar la reserva
                </p>

                <p className="hora">
                    2:00 pm - 4:00 p.m
                </p>

                <button className="boton" onClick={goToHome}>
                    Intente nuevamente
                </button>
            </div>

            <div className="imagen">
                <img src={fallout_cansado} alt="" />
            </div>
        </div>
    </div>
  )
}
