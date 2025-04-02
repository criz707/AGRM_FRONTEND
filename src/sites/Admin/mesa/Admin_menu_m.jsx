import { Searchbar } from "../../../components/Searchbar"
import { Volver } from "../../../components/Volver"
import mesa from '../../../assets/Iconos_perfil/mesa.png'
import '../../../Styles/Desktop/administrador/estilos_mesa/Admin_menu_m/Admin_menu_m.css'
import { useNavigate } from "react-router-dom"

export const Admin_menu_m = () => {
    const navigate = useNavigate();

    const goToProfile = () =>{
        navigate("/admin/mesas/perfil_m")
    }

  return (
    <div className="container">
        <Volver ruta={"/admin/curd"}/>
        <Searchbar/>
        <div className="body">

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={mesa} alt="" />
                <h3>Mesa 1</h3>
            </a>

            
        </div>
    </div>
  )
}
