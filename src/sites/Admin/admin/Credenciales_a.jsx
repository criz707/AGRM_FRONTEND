import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_admin/Credenciales_a/Credenciales_a.css'
import admin from '../../../assets/Iconos_perfil/admin.png'

export const Credenciales_a = () => {
  return (
    <div className="container">
        <Volver ruta={"/admin/admins/admin_menu_a"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={admin} alt="" />
                    <p>! Credenciales enviadas ¡</p>
                </div>
            </div>

        </div>

    </div>
  )
}
