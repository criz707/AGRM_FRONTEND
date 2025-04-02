import footer from '../assets/footer_image.jpg'
import instagram from '../assets/Intagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import Logo from '../assets/logo.png'
import Camarones from '../assets/comida/camaron.jpg'
import '../Styles/Desktop/principal/Inicio.css'
import { useNavigate } from 'react-router-dom'



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
/*     <div className='Container'>
        
        <div className="Header_i">
            <div className="Logo">
                <img src={Logo} alt="" />
            </div>
            <div className="titulo">
                BBQ EL REAL 🔥
            </div>
            
           {/*  <div className="Nav">
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
                <button className="Register" onClick={goToRegistro}>
                    Registrate :D
                </button>
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
 */
<div className='Container'>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input type="text" className="form-control me-2"  placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

/*     </div> */
  )
}
