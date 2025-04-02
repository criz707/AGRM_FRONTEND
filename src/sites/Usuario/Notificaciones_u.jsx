
import campana from '../../assets/notificacion.png'
import Navbar from '../../components/Navbar'
import '../../Styles/Desktop/Notificaciones/Notificaciones.css' 

export const Notificaciones_u = () => {
  return (
    <div className="container">
        <Navbar ajustes={"/usuario/ajustes_u"} inicio={"/usuario/home_u"} notificaciones={"/usuario/notificaciones_u"}/>


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
