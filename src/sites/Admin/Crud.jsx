import {Volver} from '../../components/Volver'
import recepconista from '../../assets/Iconos_perfil/recepcionista.png'
import gerente from '../../assets/Iconos_perfil/gerente.png'
import usuario from '../../assets/Iconos_perfil/usuario.png'
import admin from '../../assets/Iconos_perfil/admin.png'
import mesa from '../../assets/Iconos_perfil/mesa.png'
import '../../Styles/Desktop/administrador/estilos_admin/Crud/Crud.css'
import { useNavigate } from 'react-router-dom'
export const Crud = () => {

    const navigate = useNavigate();

    const goToCrudUsuarios = () =>{
        navigate("/admin/usuarios/admin_menu_u");
    }

    const goToCrudAdmin = () =>{
        navigate("/admin/admins/admin_menu_a");
    }

    const goToCrudGerente = () =>{
        navigate("/admin/gerente/admin_menu_g");
    }
    
    const goToCrudMesa = () =>{
        navigate("/admin/mesas/admin_menu_m");
    }
    const goToCrudRecepcionista = () =>{
        navigate("/admin/usuarios/admin_menu_r");
    }

  return (
    <div className="container">
        <Volver ruta={"/admin/inicio_a"}/>        

        <div className="body">
            <div className="target">
                <img src={usuario} alt="" />
                <h3>Usuario</h3>
                <button onClick={goToCrudUsuarios}>
                    Editar Usuario
                </button>
            </div>
            <div className="target">
                <img src={admin} alt="" />
                <h3>Admin</h3>
                <button onClick={goToCrudAdmin}>
                    Editar Admin
                </button>
            </div>

            <div className="target">
                <img src={gerente} alt="" />
                <h3>gerente</h3>
                <button onClick={goToCrudGerente}>
                    Editar gerente
                </button>
            </div>

            <div className="target">
                <img src={mesa} alt="" />
                <h3>mesa</h3>
                <button onClick={goToCrudMesa}>
                    Editar mesa
                </button>
            </div>

            <div className="target">
                <img src={recepconista} alt="" />
                <h3>Recepconista</h3>
                <button onClick={goToCrudRecepcionista}>
                    Editar Recepconista
                </button>
            </div>

        </div>
    </div>
  )
}
