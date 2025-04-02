import imagen from '../../assets/fallout_guy2.png'
import { Volver } from '../../components/Volver'
import '../../Styles/Desktop/usuario/Ajustes_exito/Ajustes_exito.css'

export const Ajustes_exito = () => {
  return (
    <div className="ajustes_exito">
        <Volver ruta={"/usuario/ajustes_u"}/>

        <div className="body">
            <img src={imagen} alt="" />

            <p>! Perfil actualziado con exito ¡</p>
        </div>

    </div>
  )
}
