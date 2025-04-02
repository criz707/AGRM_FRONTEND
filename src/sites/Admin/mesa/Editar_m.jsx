import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_mesa/Editar_m/Editar_m.css'
import mesa from '../../../assets/Iconos_perfil/mesa.png'
import { useNavigate } from "react-router-dom"

export const Editar_m = () => {

    const navigate = useNavigate();
    const goToActualizar = () =>{
        navigate("/admin/mesas/actualizado_m")
    }

    const goToEliminar = () =>{
        navigate("/admin/mesas/eliminado_m")
    }

  return (
    <div className="container">
        <Volver ruta="/admin/mesas/admin_menu_m"/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={mesa} alt="" />
                    <p>Mesa 3</p>
                </div>
                <div className="p2">
                    <label>Numero de mesa: </label>
                    <input type="number" placeholder="Numero"/>
                    <label>Numero de sillas: </label>
                    <input type="number" placeholder="Sillas"/>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToActualizar}>Actualizar</a>
            <a href="#" className="boton_r" onClick={goToEliminar}>Eliminar</a>
        </div>
    </div>
  )
}
