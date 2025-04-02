import { useNavigate } from 'react-router-dom'
import '../Styles/Desktop/Recuperar_e/Recuperar_e.css'
import guy from "../assets/fallout_guy3.png"
export const Recuperar_e = () => {
  const naviagate = useNavigate();

  const goToMenu = () =>{
    naviagate("/")  
  }
  return (
    <div className="Container">
      <img src={guy} alt="" className="Imagen" />
      <p className="texto">
      ¡Correo de recuperacion enviado a travol*****com!
      </p>
      <button className="boton" onClick={goToMenu}>
        Volver
      </button>
    </div>
  )
}
