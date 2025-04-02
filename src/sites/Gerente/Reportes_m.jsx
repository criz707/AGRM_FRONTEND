import { useNavigate } from "react-router-dom"
import { Volver } from "../../components/Volver"
import '../../Styles/Desktop/gerente/Reportes_m/Reportes_m.css'
import Pie_table from "./Pie_table"



export const Reportes_m = () => {
    const navigate = useNavigate();
    const goToExito = () =>{
        navigate("/gerente/inicio_g/menu_reportes/reporte_m/reporte_enviado")
    }
  return (
    <div className="reportes_m">
        
        <Volver ruta={"/gerente/inicio_g/menu_reportes"}/>

        <div className="body">
            <h2 className="titulo">
                Tipo de reporte
            </h2>
 
            <div className="reporte">
                <Pie_table />
            </div>

            <div className="info">
                <h3>DATOS:</h3>
                <p>Dato 1: %#</p>
                <p>Dato 2: %#</p>
                <p>Dato 3: %#</p>
                <p>Dato 4: %#</p>
                <p>Dato 5: %#</p>

                <button className="boton" onClick={goToExito}>Enviar al correo</button>
                <button className="boton">Descargar</button>
            </div>
        </div>

    </div>
  )
}
