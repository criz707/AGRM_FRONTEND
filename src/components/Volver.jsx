import flecha from '../assets/flecha.png'
import '../Styles/Desktop/Components/Volver/Volver.css'
import { useNavigate } from "react-router-dom"

export const Volver = ({ruta}) => {

    const navigate = useNavigate();
    const goToPage = () => {
      navigate(ruta); // Navega relativo a la ruta actual
    };

   return (
    <div className="header_volver">
    <a className="volver">
        <img src={flecha} alt="" onClick={goToPage}/>
    </a>
    </div>
   )
 }
 