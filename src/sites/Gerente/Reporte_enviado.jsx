import { useNavigate } from "react-router-dom";
import fallout from "../../assets/fallout_guy2.png";
import { Volver } from "../../components/Volver";

import '../../Styles/Desktop/gerente/Reporte_enviado/Reporte_enviado.css'
export const Reporte_enviado = () => {

    const navigate = useNavigate();
    const goToPrincipal = () =>{
        navigate("/gerente/inicio_g/menu_reportes");
    }
    
  return (
    <div className="reporte_enviado">
        <Volver ruta={"/gerente/inicio_g/menu_reportes"}/>

        <div className="body">
            <div className="target">
                <img src={fallout} alt="" />
                <p>Reporte enviado a Ren****gmail.com</p>
                <button onClick={goToPrincipal}>
                    Volver
                </button>
            </div>
        </div>
    </div>
  )
}
