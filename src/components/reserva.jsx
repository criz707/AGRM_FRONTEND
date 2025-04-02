import { PropTypes } from "prop-types";

export const Reserva = ({imagen,dia,mesa,hora1,hora2}) => {
  return (
    <div className="target">
        <img src={imagen} alt="" className="imagen"/>

        <div className="contenido">
        Dia: {dia} <br />
        Mesa: {mesa} <br />
        Hora :{hora1} - {hora2}
        </div>
    </div>
  )
}
Reserva.PropTypes = {
  imagen: PropTypes.string.isRequired,
  dia: PropTypes.string.isRequired,
  mesa: PropTypes.string.isRequired,
  hora1: PropTypes.string.isRequired,
  hora2: PropTypes.string.isRequired,
};

// Define las propTypes para el componente Reserva
 // Valida que imagen sea una cadena y sea requerida