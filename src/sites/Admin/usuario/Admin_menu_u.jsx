import { Searchbar } from "../../../components/Searchbar"
import { Volver } from "../../../components/Volver"
import usuario from '../../../assets/Iconos_perfil/usuario.png'
import '../../../Styles/Desktop/administrador/estilos_usuario/Admin_menu_u/Admin_menu_u.css'
import { useNavigate } from 'react-router-dom'

export const Admin_menu_u = () => {

    const navigate = useNavigate();

    const goToProfile = () =>{

        navigate('/admin/usuarios/perfil_u');

    }

  return (
    <div className="container">
        <Volver ruta={"/admin/curd"}/>
        <Searchbar/>
        <div className="body">

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>

            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            <a href ='#' className="target" onClick={goToProfile}>
                <img src={usuario} alt="" />
                <h3>Dweyne Jhonson</h3>
            </a>
            
            
        </div>
    </div>
  )
}
