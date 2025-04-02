import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_mesa/Perfil_m/Perfil_m.css'
import mesa from '../../../assets/Iconos_perfil/mesa.png'
import { useNavigate } from "react-router-dom"

export const Perfil_m = () => {

    const navigate = useNavigate();
    const goToEditar = () =>{
        navigate("/admin/mesas/editar_m")
    }

    const goToCancelar = () =>{
        navigate("/admin/mesas/admin_menu_m")
    }
  return (
    <div className="container">
        <Volver ruta="/admin/mesas/admin_menu_m"/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={mesa} alt="" />
                    <p>Mesa 1</p>
                </div>
                <div className="p2">
                    <p>Numero mesa: </p>
                    <p>Numero sillas: </p>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToEditar}>Editar</a>
            <a href="#" className="boton_r" onClick={goToCancelar}>Cancelar</a>
        </div>
    </div>
  )
}
