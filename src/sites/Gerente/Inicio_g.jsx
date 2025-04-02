import salida from '../../assets/Iconos_perfil/salida.png'
import tuerca from '../../assets/configuracion.png'
import admin from '../../assets/Iconos_perfil/admin.png'
import reporte from '../../assets/Iconos_perfil/reporte.png'
import '../../Styles/Desktop/gerente/Inicio_g/Inicio_g.css'
import { useNavigate } from "react-router-dom"
import Navbar from '../../components/Navbar'

export const Inicio_g = () => {
  const navigate =  useNavigate();


  const goToInicio = () => {
    navigate("/");
  }

  const goToConfiguraciones = () =>{
    navigate("/gerente/configuraciones_g")
  }

  const goToReportes = () =>{
    navigate("/gerente/inicio_g/menu_reportes")
  }

  return (
    <div className="inicio_a">

<Navbar ajustes={"/gerente/configuraciones_g"} inicio={"/gerente/inicio_g"} notificaciones={"/gerente/notificaciones_g"}/>

        <div className="header_inicio" >
            <div className="target" onClick={goToConfiguraciones}>
            <h5>Jeremy renner</h5>
            <img src={admin} alt="" />
            </div>
        </div>

        <div className="body">

        <div className="target" onClick={goToConfiguraciones}>
            <img src={tuerca} alt="" />
            <h3>Ajustes</h3>
        </div>
        

        <div className="target" onClick={goToInicio}>
            <img src={salida} alt="" />
            <h3>Cerrar sesion</h3>
        </div>


        <div className="target" onClick={goToReportes}>
            <img src={reporte} alt="" />
            <h3>Reportes</h3>
        </div>

        </div>
    </div>
  )
}
