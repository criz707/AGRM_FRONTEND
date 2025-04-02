import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Eliminado_u/Eliminado_u.css'
import reci from '../../../assets/Iconos_perfil/recepcionista.png'

export const Eliminado_r = () => {
  
  return (
    <div className="container">
        <Volver ruta={"/admin/usuarios/admin_menu_r"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={reci} alt="" />
                    <p>! Perfil de recepcionista eliminado ¡ 😲</p>
                </div>
            </div>

        </div>

    </div>
  )
}