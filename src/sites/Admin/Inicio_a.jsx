import salida from '../../assets/Iconos_perfil/salida.png'
import lapiz from '../../assets/Iconos_perfil/lapiz.png'
import admin from '../../assets/Iconos_perfil/admin.png'
import '../../Styles/Desktop/administrador/Inicio_a/Inicio_a.css'
import { useNavigate } from "react-router-dom"

export const Inicio_a = () => {
  const navigate =  useNavigate();

  const goToCrud = () => {
        navigate("/admin/curd");
  }

  const goToInicio = () => {
    navigate("/");
  }

  const goToEditar = () => {
    navigate("/admin/editar_perfil");
  }
  return (
    <div className="inicio_a">
        <div className="header_inicio" onClick={goToEditar}>
            <div className="target">
            <h5>Jhon Travolta</h5>
            <img src={admin} alt="" />
            </div>
        </div>

        <div className="body">

        <div className="target" onClick={goToCrud}>
            <img src={lapiz} alt="" />
            <h3>Editar perfiles</h3>
        </div>

        <div className="target" onClick={goToInicio}>
            <img src={salida} alt="" />
            <h3>Cerrar seison</h3>
        </div>
        </div>
    </div>
  )
}
