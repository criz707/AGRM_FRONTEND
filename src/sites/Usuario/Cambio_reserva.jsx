import {Volver} from "../../components/Volver"
import foto_mesa from '../../assets/fondo_mesa.png'
import '../../Styles/Desktop/usuario/Cambio_reserva/Cambio_reserva.css'
import { useNavigate } from "react-router-dom"

export const Cambio_reserva = () => {
    const navigate = useNavigate();
    const goToReservaExistosa = () =>{
        navigate("/usuario/cambio_reserva/reserva_exitosa")
    }

    const goToReservaFallida = () =>{
        navigate("/usuario/error_reserva")
    }

    const goToPenalizacion = () =>{
        navigate("/usuario/penalizacion")
    }

  return (
    <div className="cambio_reserva">


        <Volver ruta={"/usuario/mesas_reserva"}/>

        <div className="body">
            <div className="horario">

                <div className="titulo" onClick={goToPenalizacion}>Mesa 4</div>
                <div className="plazas">
                    <div className="circle"></div>
                    <div className="titulo" >Plazas disponibles</div>
                    {/* Select del usuario */}
                    <select name="" id="">
                        <option className='ok_option' value="7-9">7 pm - 9 pm</option>
                        <option className='ok_option' value="7-9">7 pm - 9 pm</option>
                        <option className='ok_option'value="7-9">7 pm - 9 pm</option>
                        <option className='ok_option' value="7-9">7 pm - 9 pm</option>
                        <option className='no_option' value="7-9">7 pm - 9 pm</option>
                    </select>
                </div>
                <button className="boton" onClick={goToReservaExistosa}>
                Reservar
                </button>

            </div>

            

            <div className="imagen">
            <img src={foto_mesa} alt="" onClick={goToReservaFallida} />
            </div>
        </div>
    </div>
  )
}
