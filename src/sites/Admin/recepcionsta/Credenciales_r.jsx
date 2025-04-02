import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_recepcionista/Credenciales_r/Credenciales_r.css'
import reci from '../../../assets/Iconos_perfil/recepcionista.png'

export const Credenciales_r = () => {
  return (
    <div className="container">
        <Volver />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={reci} alt="" />
                    <p>! Credenciales enviadas ¡</p>
                </div>
            </div>

        </div>

    </div>
  )
}
