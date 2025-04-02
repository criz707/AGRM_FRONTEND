
import campana from '../../assets/notificacion.png'
import Navbar from '../../components/Navbar'
import '../../Styles/Desktop/gerente/Notificaciones_g/Notificaciones_g.css'
export const Notificaciones_g = () => {
  return (
    <div className="container">
        <Navbar ajustes={"/gerente/configuraciones_g"} inicio={"/gerente/inicio_g"} notificaciones={"/gerente/notificaciones_g"}/>


        <div className="body">
        <a className="notificacion" href='#'>
            <img src={campana} alt="" />
            <p className="asunto">Asunto</p>
            <p className="descripcion">Descripcion</p>
        </a>
        <a className="notificacion" href='#'>
            <img src={campana} alt="" />
            <p className="asunto">Asunto</p>
            <p className="descripcion">Descripcion</p>
        </a>
        <a className="notificacion" href='#'>
            <img src={campana} alt="" />
            <p className="asunto">Asunto</p>
            <p className="descripcion">Descripcion</p>
        </a>
        </div>
        
    </div>
  )
}
