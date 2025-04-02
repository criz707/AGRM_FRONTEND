import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_recepcionista/Editar_r/Editar_r.css'
import reci from '../../../assets/Iconos_perfil/recepcionista.png'
import { useNavigate } from "react-router-dom"

export const Editar_r = () => {
    const navigate = useNavigate();
    const goToActualizar = () =>{
        navigate("/admin/usuarios/actualizado_r")
    }

    const goToEliminar = () =>{
        navigate("/admin/usuarios/eliminado_r")
    }
  return (
    <div className="container">
        <Volver ruta={"/admin/usuarios/admin_menu_r"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={reci} alt="" />
                    <p>Skipper</p>
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
