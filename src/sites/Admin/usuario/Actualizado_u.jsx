import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Actualizado_u/Actualizado_u.css'
import usuario from '../../../assets/Iconos_perfil/usuario.png'
import { useNavigate } from "react-router-dom"

export const Actualizado_u = () => {
  const navigate = useNavigate();

  const goToEnviarCredenciales = () =>{
        navigate('/admin/usuarios/credenciales_u')
  }

  return (
    <div className="container">
        <Volver ruta="/admin/usuarios/admin_menu_u"/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={usuario} alt="" />
                    <p>¡Usuario actualizado
                    con exito! 😃</p>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToEnviarCredenciales} >Enviar credenciales</a>
        </div>
    </div>
  )
}