import { Volver } from "../../components/Volver"
import admin from '../../assets/Iconos_perfil/admin.png'
import '../../Styles/Desktop/administrador/Alerta_exito.jsx/Alerta_exito.css'
export const Alerta_exito = () => {
    
  return (
    <div className="editar_perfil">
        <Volver ruta={"/admin/editar_perfil"}/>
        <div className="body">
            <div className="target">

                <img src={admin} alt="" />
                <p>¡ Perfil actualizado con exito !</p>
            
            </div>
        </div>
    </div>
  )
}
