import reloj from '../../assets/Iconos_perfil/reloj.png'
import mesa from '../../assets/Iconos_perfil/mesa.png'
import { Volver } from '../../components/Volver'
import '../../Styles/Desktop/gerente/Menu_reportes/Menu_reportes.css'
import { useNavigate } from 'react-router-dom'


export const Menu_reportes = () => {

  const navigate = useNavigate();

  const goToReporteM = () =>{
    navigate("/gerente/inicio_g/menu_reportes/reporte_m")
  }
  
  return (
    <div className="menu_reportes">
        <Volver ruta={"/gerente/inicio_g"}/>

        <div className="body">
            <div className="target">
                <img src={reloj} alt="" onClick={goToReporteM} />
                <p>Horarios mas usados del mes</p>
            </div>


            <div className="target" onClick={goToReporteM}>
                <img src={mesa} alt="" />
                <p>Mesas mas usadas del mes</p>
            </div>
        </div>
    </div>
  )
}
