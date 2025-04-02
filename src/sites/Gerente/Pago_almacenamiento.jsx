import aws from '../../assets/aws.png'
import factura from "../../assets/Iconos_perfil/factura.png"
import { Volver } from '../../components/Volver'
import '../../Styles/Desktop/gerente/Pago_almacenamiento/Pago_almacenamiento.css'

export const Pago_almacenamiento = () => {
    const goToPago = () =>{
        window.location.href = "https://www.americanexpress.com/";
    }
  return (
    <div className="pago_almacen">
        <Volver ruta={"/gerente/configuraciones_g"}/>

        <div className="body">

            <div className="target">

                <div className="imagen">
                    <img src={factura} alt="" />
                </div>

                <div className="info">
                    <h3>El consumo de este mes fue de: </h3>

                    <img src={aws} alt="" />

                    <p>Almacenamiento : $*****</p>

                    <button className="boton" onClick={goToPago}>
                        Ir a pagar
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}
