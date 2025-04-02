import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_recepcionista/Actualizado_r/Actualizado_r.css'
import reci from '../../../assets/Iconos_perfil/recepcionista.png'

export const Actualizado_r = () => {
  return (
    <div className="container">
        <Volver ruta={"/admin/usuarios/admin_menu_r"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={reci} alt="" />
                    <p>¡Usuario actualizado
                    con exito! 😃</p>
                </div>
            </div>
            <a href="#" className="boton">Enviar credenciales</a>
        </div>
    </div>
  )
}