import imagen from '../../assets/fallout_guy2.png'
import { Volver } from '../../components/Volver'
import '../../Styles/Desktop/gerente/Ajustes_exito_g/Ajustes_exito_g.css'

export const Ajustes_exito_g = () => {
  return (
    <div className="ajustes_exito">
        <Volver ruta={"/gerente/configuraciones_g"}/>

        <div className="body">
            <img src={imagen} alt="" />

            <p>! Perfil actualziado con exito ¡</p>
        </div>

    </div>
  )
}
