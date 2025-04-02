import gerente from '../../assets/gerente.jpg'
import factura from '../../assets/Iconos_perfil/factura.png'
import '../../Styles/Desktop/gerente/Configuraciones_g/Configuraciones_g.css'
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"


export const Configuraciones_g = () => {
    const navigate = useNavigate();
    const goToEditarDatos = () =>{
        navigate("/gerente/configuraciones_g/cuenta_g")
    }

    const goToPago = () =>{
        navigate("/gerente/configuraciones_g/pago_almacenamiento")
    }

   
  return (
    <div className="configuraciones_g">

        <Navbar ajustes={"/gerente/configuraciones_g"} inicio={"/gerente/inicio_g"} notificaciones={"/gerente/notificaciones_g"}/>

        <div className="body">
            <div className="target">

                {/* Seccion de la informacion */}

                <div className="datos">
                    <p>Nombre:</p>
                    <p>Jeremy Renner</p>
                    <p>Correo:</p>
                    <p>ronin@gmail.com</p>
                    <p>Contraseña:</p>
                    <p>**********</p>
                    <button onClick={goToEditarDatos}>
                        Editar perfil
                    </button>
                </div>

                <div className="imagen" >
                    <img src={gerente} alt="" />
                </div>


            </div>

            <div className="pago">
                <img src={factura} alt="" />
                <p>Pagar almacenamiento</p>
                <button className="boton" onClick={goToPago}>
                    Ir a pago
                </button>
            </div>
        </div>
    </div>
  )
}
