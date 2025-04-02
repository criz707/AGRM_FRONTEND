import footer from '../assets/footer_image.jpg'
import instagram from '../assets/Intagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import Logo from '../assets/logo.png'
import Camarones from '../assets/comida/camaron.jpg'
import '../Styles/Desktop/principal/Inicio.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'



export const Inicio = () => {
    const navigate = useNavigate();
    const goToRegistro = () => {
        navigate("registro"); // Navega relativo a la ruta actual
      };
      const goToInicioSesion = () => {
        navigate("inicio_sesion"); // Navega relativo a la ruta actual
      };

      const goToInstagram = () => {
        window.location.href = "https://www.instagram.com/real_smoke_el_ahumadero/?__d=11";
      };
      const goToFacebook = () => {
        window.location.href = "https://www.facebook.com/elahumaderocolima/?locale=es_LA";
      };
      const goToTwitter = () => {
        window.location.href = "https://x.com/smokebbquk";
      };
  return (
     <div className='Container'>
        
        <div className="Header_i">
            <div className="Logo">
                <img src={Logo} alt="" />
            </div>
            <div className="titulo">
                BBQ EL REAL 🔥
            </div>
            
            <div className="Nav">
                <a href="" className="item" onClick={goToRegistro}>Register</a>
                <a href="" className="item" onClick={goToInicioSesion}>Login</a>
                <a href="https://www.facebook.com/elahumaderocolima/?locale=es_LA" className="item" >Information</a>
            </div> 
        </div>

        <div className="Body">
            <div className="Image">
                <img src={Camarones} alt="" />
            </div>

            <div className="Info">
                <h4 className="titulo">Sobre nosotros </h4>
                <p className="info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis labore fugiat iure! Tempora, 
                    voluptatem minus facere amet 
                    libero illo dolorem earum, expedita modi fugit labore dicta eum exercitationem laborum unde.
                </p>
                
                <Button className="Register" onClick={goToRegistro} color="Register primary">
                  Haz clic aquí
                  </Button>
            </div>
        </div>

        <div className="Footer">
            <img src={footer} alt="" className="imagen" />
            <div className="info">
                <p>Direccion: calle #</p>
                <p>Correo: </p>
                <p>Constitucion: </p>
                <p>Numero: </p>
            </div>
            <div className="Social">
                <p>Sigenos en redes</p>
                <img src={twitter} alt="" className="item" onClick={goToTwitter}/>
                <img src={instagram} alt="" className="item" onClick={goToInstagram}/>
                <img src={facebook} alt="" className="item"  onClick={goToFacebook}/>
            </div>
        </div>

        
     </div> 
  )
}
