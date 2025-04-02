
import {Volver} from "../../components/Volver.jsx"
import foto_mesa from '../../assets/fondo_mesa.png'
import '../../Styles/Desktop/recepcionista/Reserva/Reserva.css'
import { useNavigate } from "react-router-dom"

export const Reserva = () => {
    const navigate = useNavigate();
    const goToLiberar = () =>{
        navigate("/recepcionista/mesas")
    };
    const goToConfirmar = () =>{
        navigate("/recepcionista/mesas/reserva_confirmada")
    }

  return (
    <div className="Reserva">

        <Volver ruta={"/recepcionista/mesas"}/>

        <div className="body">
            
            <div className="header">
                <p className="tiempo">Tiempo restante: 15:00 min
                </p>

                <p className="numero_mesa">
                    Mesa #1
                </p>
            </div>

            
            <div className="plazas">
                <div className="circle"></div>
                <div className="titulo">Plazas disponibles</div>
                {/* Select del usuario */}
                <select name="" id="">
                    <option className='ok_option' value="7-9">7 pm - 9 pm</option>
                    <option className='ok_option' value="7-9">7 pm - 9 pm</option>
                    <option className='ok_option'value="7-9">7 pm - 9 pm</option>
                    <option className='ok_option' value="7-9">7 pm - 9 pm</option>
                    <option className='no_option' value="7-9">7 pm - 9 pm</option>
                </select>
            </div>

            <div className="imagen">
                <img src={foto_mesa} alt="" />
                <button className="confirmar" onClick={goToConfirmar}>Confirmar</button>
                <button className="liberar" onClick={goToLiberar}>Liberar</button>
            </div>

            
        </div>

    </div>
  )
}
