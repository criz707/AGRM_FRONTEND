import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_admin/Perfil_m/Perfil_a.css'
import admin from '../../../assets/Iconos_perfil/admin.png'
import { useNavigate } from "react-router-dom"


export const Perfil_a = () => {
    const navigate = useNavigate();

    const goToEditar = () =>{
        navigate("/admin/admins/editar_a");
    };

    const goToCancelar = () =>{
        navigate("/admin/admins/admin_menu_a");
    };

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
                    <p>Nombre: </p>
                    <p>Correo: </p>
                    <p>CC: </p>
                    <p>Contraseña: </p>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToEditar}>Editar</a>
            <a href="#" className="boton_r" onClick={goToCancelar} >Cancelar</a>
        </div>
    </div>
  )
}
