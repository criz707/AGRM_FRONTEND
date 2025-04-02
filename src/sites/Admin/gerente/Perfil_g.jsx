import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_gerente/Perfil_g/Perfil_g.css'
import gerente from '../../../assets/Iconos_perfil/gerente.png'
import { useNavigate } from "react-router-dom"


export const Perfil_g = () => {
    const navigate = useNavigate();

    const goToEditar = ()=>{
        navigate("/admin/gerente/editar_g")
    }

    const goToCancelar = () =>{
        navigate("/admin/gerente/admin_menu_g")
    }
  return (
    <div className="container">
        <Volver ruta={"/admin/gerente/admin_menu_g"}/>

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={gerente} alt="" />
                    <p>Coronel Sanders</p>
                </div>
                <div className="p2">
                    <p>Nombre: </p>
                    <p>Correo: </p>
                    <p>CC: </p>
                    <p>Contraseña: </p>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToEditar}>Editar</a>
            <a href="#" className="boton_r" onClick={goToCancelar}>Cancelarr</a>
        </div>
    </div>
  )
}
