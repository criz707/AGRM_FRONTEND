import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_mesa/Eliminado/Eliminado.css'
import mesa from '../../../assets/Iconos_perfil/mesa.png'

export const Eliminado_m = () => {
  
  return (
    <div className="container">
        <Volver ruta="/admin/mesas/admin_menu_m"/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={mesa} alt="" />
                    <p>! Mesa eliminada ¡ 😲</p>
                </div>
            </div>

        </div>

    </div>
  )
}