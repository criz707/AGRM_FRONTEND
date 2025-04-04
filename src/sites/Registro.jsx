import logo from "../assets/logo.png"
import '../Styles/Desktop/Registro/Registro.css'
import { Volver } from "../components/Volver"
import { useNavigate } from "react-router-dom"
import { Button } from "reactstrap"


export const Registro = () => {
  const navigate = useNavigate();
  const goToRegistroExitoso = () => {
    navigate("")
  }

  return (
    <div className="inicio">
      <Volver ruta={"/"} />


      <form className="sesion">

        <p>Nombre:</p>
        <input type="text" placeholder="nombre" id="nombre" />

        <p>Correo:</p>
        <input type="text" placeholder="correo" id="correo" />

        <p>CC:</p>
        <input type="number" placeholder="cc" id="cc" />

        <p>Contraseña:</p>
        <input type="text" placeholder="contrasena" id="contrasena" />


        <Button type="submit">
          Registrarse
        </Button>

      </form>

      <div className="imagen">
        <div className="title">
          !Bienvenido usuario nuevo! 😃
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>

    </div>
  )

}