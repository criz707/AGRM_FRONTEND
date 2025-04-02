import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Perfil_u/Perfil_u.css'
import reci from '../../../assets/Iconos_perfil/recepcionista.png'
import { useNavigate } from "react-router-dom"

export const Perfil_r = () => {

    const navigate = useNavigate();
    const goToEditar = ()=>{
        navigate("/admin/usuarios/editar_r")
    }
    const goToCancelar = () =>{
        navigate("/admin/usuarios/admin_menu_r")
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
                    <p>Nombre: </p>
                    <p>Correo: </p>
                    <p>CC: </p>
                    <p>Contraseña: </p>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToEditar}>Editar</a>
            <a href="#" className="boton_r" onClick={goToCancelar}>Cancelar</a>
        </div>
    </div>
  )
}
