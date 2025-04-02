import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_admin/Editar_a/Editar_a.css'
import admin from '../../../assets/Iconos_perfil/admin.png'
import { useNavigate } from "react-router-dom"

export const Editar_a = () => {

    const navigate=  useNavigate();

    const goToEliminar = () =>{
        navigate("/admin/admins/eliminado_a")
    }

    const goToActualizar = () =>{
        navigate("/admin/admins/actualizado_a")
    } 
  return (
    <div className="container">
        <Volver ruta={"/admin/admins/admin_menu_a"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={admin} alt="" />
                    <p>Travolta</p>
                </div>
                <div className="p2">
                    <label>Nombre: </label>
                    <input type="text" placeholder="Nombre"/>
                    <label>Correo: </label>
                    <input type="text" placeholder="Correo"/>
                    <label>CC: </label>
                    <input type="text" placeholder="CC"/>
                    <label>Contraseña: </label>
                    <input type="password" placeholder="contrasena"/>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToActualizar}>Actualizar</a>
            <a href="#" className="boton_r" onClick={goToEliminar}>Eliminar</a>
        </div>
    </div>
  )
}
