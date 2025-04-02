import { Volver } from "../../components/Volver"
import usuario from '../../assets/recepcionista.jpg'
import '../../Styles/Desktop/recepcionista/Cuenta_r/Cuenta_r.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Cuenta_r = () => {

    const navigate = useNavigate();

    const goToAlertaExito = () =>{
        navigate("/recepcionista/ajustes_r/cuenta_r/ajustes_exito_r")
    }

    const goToCancelar = () =>{
        navigate("/recepcionista/ajustes_r")
    }


    //Cambio de imagen
    const [image, setImage] = useState(usuario);

    const handleImageChange = (event) => {

        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            // Guarda la imagen como una URL base64
            setImage(reader.result); 
          };
          reader.readAsDataURL(file);
        }
      };

  return (
    <div className="editar_perfil">
        <Volver ruta={"/recepcionista/ajustes_r"}/>
        <div className="body">
            <div className="target">

                {/* Seccion de la informacion */}

                <div className="datos">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="" id="" placeholder="Nombre"/>
                    <label htmlFor="">Documento:</label>
                    <input type="number" name="" id="" placeholder="Nombre"/>
                    <label htmlFor="">Correo:</label>
                    <input type="text" name="" id="" placeholder="Nombre"/>
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" name="" id="" placeholder="Nombre"/>
                    <label htmlFor="">Foto</label>
                    <input type="file" className="input_imagen" id="" placeholder="Nombre" onChange={handleImageChange}/>
                    <button onClick={goToAlertaExito}>
                        Guardar
                    </button>
                </div>

                <div className="imagen">
                    <img src={image} alt="" />
                    <button onClick={goToCancelar}>Cancelar</button>
                </div>



            </div>
        </div>
    </div>
  )
}

