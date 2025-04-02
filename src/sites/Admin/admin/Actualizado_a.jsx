import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_admin/Actualizado_a/Actualizado_a.css'
import admin from '../../../assets/Iconos_perfil/admin.png'
import { useNavigate } from "react-router-dom"

export const Actualizado_a = () => {
   const navigate = useNavigate();

   const goToEnviar = () =>{
      navigate("/admin/admins/credenciales_a");
   }
  return (
    <div className="container">
        <Volver ruta={"/admin/admins/admin_menu_a"} />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={admin} alt="" />
                    <p>¡Administrador actualizado
                    con exito!</p>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToEnviar}>Enviar credenciales</a>
        </div>
    </div>
  )
}