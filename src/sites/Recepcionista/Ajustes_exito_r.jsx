import imagen from '../../assets/fallout_guy2.png'
import { Volver } from '../../components/Volver'
import '../../Styles/Desktop/recepcionista/Ajustes_exito_r/Ajustes_exito_r.css'

export const Ajustes_exito_r = () => {
  return (
    <div className="ajustes_exito">
        <Volver ruta={"/recepcionista/ajustes_r"}/>

        <div className="body">
            <img src={imagen} alt="" />

            <p>! Perfil actualziado con exito ¡</p>
        </div>

    </div>
  )
}
