import "../../Styles/Desktop/recepcionista/Ultima_hora/Ultima_hora.css"
import { Tarjeta_ultima } from "../../components/Targeta_ultima.jsx"
import Navbar from "../../components/Navbar.jsx"

export const Ultima_hora = () => {
  
  return (
    

    <div className="Mesas">
      <Navbar ajustes={"/recepcionista/ajustes_r"} inicio={"/recepcionista/inicio_rc"} notificaciones={"/recepcionista/notificaciones_r"}/>

      <p className="titulo">¡Liber a ultima Hora! 🔥</p>
    
        <div className="Seccion_mesas">
          <Tarjeta_ultima reserva={"/recepcionista/mesas/ultima_hora/reserva_ultima"} minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima reserva={"/recepcionista/mesas/ultima_hora/reserva_ultima"} minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima reserva={"/recepcionista/mesas/ultima_hora/reserva_ultima"} minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima reserva={"/recepcionista/mesas/ultima_hora/reserva_ultima"} minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima reserva={"/recepcionista/mesas/ultima_hora/reserva_ultima"} minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima reserva={"/recepcionista/mesas/ultima_hora/reserva_ultima"} minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima reserva={"/recepcionista/mesas/ultima_hora/reserva_ultima"} minutos='7' horas='12 p.m - 2 p.m'/>
          <Tarjeta_ultima reserva={"/recepcionista/mesas/ultima_hora/reserva_ultima"} minutos='7' horas='12 p.m - 2 p.m'/>

    </div>
    </div>
  )
}
