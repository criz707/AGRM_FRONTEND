import { Volver } from '../../components/Volver'
import recepconista from '../../assets/Iconos_perfil/recepcionista.png'
import gerente from '../../assets/Iconos_perfil/gerente.png'
import usuario from '../../assets/Iconos_perfil/usuario.png'
import admin from '../../assets/Iconos_perfil/admin.png'
import mesa from '../../assets/Iconos_perfil/mesa.png'
import '../../Styles/Desktop/administrador/estilos_admin/Crud/Crud.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'




export const Crud = () => {

    const navigate = useNavigate();

    const goToCrudUsuarios = () => {
        navigate("/admin/usuarios/admin_menu_u");
    }

    const goToCrudAdmin = () => {
        navigate("/admin/admins/admin_menu_a");
    }

    const goToCrudGerente = () => {
        navigate("/admin/gerente/admin_menu_g");
    }

    const goToCrudMesa = () => {
        navigate("/admin/mesas/admin_menu_m");
    }
    const goToCrudRecepcionista = () => {
        navigate("/admin/usuarios/admin_menu_r");
    }

    return (
        <div className="container">
            <Volver ruta={"/admin/inicio_a"} />

            <div className="body">
                <div className="target">
                    <img src={usuario} alt="" />
                    <h3>Usuario</h3>
                    <Button onClick={goToCrudUsuarios}>
                        Editar Usuario
                    </Button>
                </div>
                <div className="target">
                    <img src={admin} alt="" />
                    <h3>Admin</h3>
                    <Button onClick={goToCrudAdmin}>
                        Editar Admin
                    </Button>
                </div>

                <div className="target">
                    <img src={gerente} alt="" />
                    <h3>gerente</h3>
                    <Button onClick={goToCrudGerente}>
                        Editar gerente
                    </Button>
                </div>

                <div className="target">
                    <img src={mesa} alt="" />
                    <h3>mesa</h3>
                    <Button onClick={goToCrudMesa}>
                        Editar mesa
                    </Button>
                </div>

                <div className="target">
                    <img src={recepconista} alt="" />
                    <h3>Recepconista</h3>
                    <Button onClick={goToCrudRecepcionista}>
                        Editar Recepconista
                    </Button>
                </div>

            </div>
        </div>
    )
}
