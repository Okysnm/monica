import Ubicacion from "./Ubicacion";
import './Ubicaciones.css'

const Ubicaciones = ({ ubicaciones }) => {
  //console.log(locations);
  return (
    <div className='grid'>
      {ubicaciones.map((ubicacion) => (
        <Ubicacion key={ubicacion.id} ubicacion={ubicacion} />
      ))}
    </div>
  );
}

export default Ubicaciones;