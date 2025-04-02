import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_gerente/Credenciales_g/Credenciales_g.css'
import gerente from '../../../assets/Iconos_perfil/gerente.png'

export const Credenciales_g = () => {
  return (
    <div className="container">
        <Volver ruta={"/admin/gerente/admin_menu_g"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={gerente} alt="" />
                    <p>! Credenciales enviadas ¡</p>
                </div>
            </div>

        </div>

    </div>
  )
}
