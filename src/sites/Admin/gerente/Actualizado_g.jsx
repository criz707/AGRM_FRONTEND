import { Volver } from "../../../components/Volver"
import '../../../Styles/Desktop/administrador/estilos_gerente/Actualizado_g/Actualizado_g.css'
import gerente from '../../../assets/Iconos_perfil/gerente.png'
import { useNavigate } from "react-router-dom"

export const Actualizado_g = () => {
  const navigate = useNavigate();
  const goToCredenciales = () =>{
    navigate("/admin/gerente/credenciales_g")
  }

  return (
    <div className="container">
        <Volver ruta={"/admin/gerente/admin_menu_g"} />

        <div className="body">

            <div className="datos">
                <div className="p1">
                    <img src={gerente} alt="" />
                    <p>¡Gerente actualizado
                    con exito! 😃</p>
                </div>
            </div>
            <a href="#" className="boton" onClick={goToCredenciales}>Enviar credenciales</a>
        </div>
    </div>
  )
}