import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Editar_u/Editar_u.css'
import usuario from '../../../assets/Iconos_perfil/usuario.png'
import { useNavigate } from "react-router-dom"

export const Editar_u = () => {

    const navigate =  useNavigate();
    const goToActualizar = () =>{
        navigate('/admin/usuarios/actualizado_u');
    }

    const goToPerfil = () =>{
        navigate('/admin/usuarios/perfil_u')
    }


  return (
    <div className="container">
        <Volver ruta={"/admin/usuarios/admin_menu_u"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={usuario} alt="" />
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
            <a href="#" className="boton_r" onClick={goToPerfil}>Cacelar</a>
        </div>
    </div>
  )
}
