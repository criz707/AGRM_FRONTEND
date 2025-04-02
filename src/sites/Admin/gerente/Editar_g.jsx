import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_gerente/Editar_g/Editar_g.css'
import gerente from '../../../assets/Iconos_perfil/gerente.png'
import { useNavigate } from "react-router-dom"

export const Editar_g = () => {

    const navigate = useNavigate();

    const goToActializar = () =>{
        navigate("/admin/gerente/actualizado_g")
    }

    const goToEliminar = () =>{
        navigate("/admin/gerente/eliminado_g")
    }

  return (
    <div className="container">
        <Volver ruta={"/admin/gerente/admin_menu_g"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={gerente} alt="" />
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
            <a href="#" className="boton" onClick={goToActializar}>Actualizar</a>
            <a href="#" className="boton_r" onClick={goToEliminar}>Eliminar</a>
        </div>
    </div>
  )
}
