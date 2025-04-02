import { Volver } from "../../components/Volver"
import mesa from "../../assets/mesa.jpg"
import '../../Styles/Desktop/usuario/Penalizacion/Penalizacion.css'
import { useNavigate } from "react-router-dom"



export const Penalizacion = () => {
    const navigate = useNavigate();
    const goToMenu = () =>{
        navigate("/usuario/mesas_reserva");
    }
  return (
    <div className="reserva_exitosa">

        <Volver ruta={"/usuario/mesas_reserva"}/>

        <div className="body">

            <div className="info_p">
                <h3>¡ Penalizacion !</h3>
                <li>Mesa 7 </li>
                <li>El 7 de marzo</li>
                <li>2:00 pm - 4:00 p.m</li>
                <li>No te presentaste a lahorareqerida, porlo que no podras realizar otra reserva hasta dentrode ##:## :(</li>

                <button className="boton" onClick={goToMenu}>
                    Volver al menu principal
                </button>

            </div>

            <div className="imagen">
                <img src={mesa} alt="" />
            </div>

        </div>        

    </div>
  )
}

