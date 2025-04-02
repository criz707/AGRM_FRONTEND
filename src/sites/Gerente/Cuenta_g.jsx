import { Volver } from "../../components/Volver"
import gerente from '../../assets/gerente.jpg'
import '../../Styles/Desktop/gerente/Cuenta_g/Cuenta_g.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const Cuenta_g = () => {

    const navigate = useNavigate();

    const goToAlertaExito = () =>{
        navigate("/gerente/configuraciones_g/cuenta_g/ajustes_exito_g")
    }

    const goToCancelar = () =>{
        navigate("/gerente/configuraciones_g")
    }


    //Cambio de imagen
    const [image, setImage] = useState(gerente);

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
        <Volver ruta={"/gerente/configuraciones_g"}/>
        <div className="body">
            <div className="target">

                {/* Seccion de la informacion */}

                <div className="datos">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="" id="" placeholder="Nombre"/>
                    <label htmlFor="">Link pago:</label>
                    <input type="text" name="" id="" placeholder="Link pago"/>
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

