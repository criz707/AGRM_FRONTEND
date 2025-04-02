import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_usuario/Perfil_u/Perfil_u.css'
import usuario from '../../../assets/Iconos_perfil/usuario.png'
import { useNavigate } from "react-router-dom"

export const Perfil_u = () => {
    const navigate =  useNavigate();

    const goToEditar = () =>{

        navigate('/admin/usuarios/editar_u');

    }

    const goToEliminar = () =>{
        navigate('/admin/usuarios/eliminado_u');
    }

  return (
    <div className="container">
        <Volver ruta={"/admin/usuarios/admin_menu_u"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={usuario} alt="" />
                    <p>Dweyne Jhonson</p>
                </div>
                <div className="p2">
                    <p>Nombre: Dweyne Jhonson</p>
                    <p>Correo: DweyneJhonsongamil.com </p>
                    <p>CC: 303789047</p>
                    <p>Contraseña: GATITOS_hyper.098</p>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToEditar}>Editar</a>
            <a href="#" className="boton_r" onClick={goToEliminar}>Eliminar</a>
        </div>
    </div>
  )
}
