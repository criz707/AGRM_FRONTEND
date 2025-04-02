import guy from '../assets/Hombre_estrellado.png'
import '../Styles/Desktop/Recuperar_c/Recuperar_c.css'
import { useNavigate } from 'react-router-dom'
import { Volver } from '../components/Volver'


export const Recuperar_c = () => {

    const navigate = useNavigate();
    const goToExito = () =>{
        navigate("/recuperar_c/recuperar_e")
    }
  return (
    <div className="container_recuperar">
        <Volver ruta={"/inicio_sesion"}/>

        <form action="" className="Form">
            <label >Ingrese el correo de la cuenta
            de la cual desea recuperarla contraseña:</label>
            <input type="text" id='correo'/>
            <button className="Enviar" onClick={goToExito}>
                Enviar
            </button>
        </form>
        <div className="imagen_recuperar">
            <img src={guy} alt="" />
        </div>
    </div>
  )

}
