import { Volver } from "../../components/Volver"
import mesa from '../../assets/fondo_mesa.png'
import cartel from '../../assets/cerrado.png'
import { useNavigate } from "react-router-dom"
import '../../Styles/Desktop/usuario/No_disponibles/No_disponibles.css'


export const No_disponibles = () => {
  const navigate = useNavigate();
  const goToMenu = () =>{
    navigate("/usuario/mesas_reserva");
  }
  return (
    <div className="no_disponibles">
        <Volver ruta={"/usuario/mesas_reserva"}/>


        <div className="body">
          <div className="info">
                  <h3>Mesa 3</h3>
                  <li>¡ Todas ras reservas ya fueron agendadas ! 😲 </li>
                  

                  <button className="boton" onClick={goToMenu}>
                      Volver 
                  </button>

          </div>

          <div className="imagen">

                  <img src={mesa} alt="" className="debajo"/>
                  <img src={cartel} alt="" className="encima"/>
                  
          </div>
        </div>

    </div>
  )
}
