import campana from '../../assets/notificacion.png'
import Navbar from '../../components/Navbar'
import '../../Styles/Desktop/Notificaciones/Notificaciones.css' 

export const Notificaciones_r = () => {
  return (
    <div className="container">
      
        <Navbar ajustes={"/recepcionista/ajustes_r"} inicio={"/recepcionista/inicio_rc"} notificaciones={"/recepcionista/notificaciones_r"}/>


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
