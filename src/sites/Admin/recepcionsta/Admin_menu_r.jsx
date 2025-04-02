import { Searchbar } from "../../../components/Searchbar"
import { Volver } from "../../../components/Volver"
import reci from '../../../assets/Iconos_perfil/recepcionista.png'
import '../../../Styles/Desktop/administrador/estilos_recepcionista/Admin_menu_r/Admin_menu_r.css'
import { useNavigate } from "react-router-dom"


export const Admin_menu_r = () => {
    const navigate = useNavigate();
    const goToProfile = () =>{
        navigate("/admin/usuarios/perfil_r")
    }

  return (

    <div className="container">
        <Volver ruta={"/admin/curd"}/>
        <Searchbar/>
        <div className="body">

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={reci} alt="" />
                <h3>Jason Statam</h3>
            </a>
            
        </div>
    </div>
  )
}
