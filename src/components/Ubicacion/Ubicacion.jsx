import { useContext } from "react";
import { LocationsContext } from "../../context/UbicacionesContext";
import "./Ubicacion.css";
import { BsTrash } from "react-icons/bs";

const Ubicacion = ({ ubicacion }) => {
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext);
  const {
    id,
    country,
    lat,
    lon,
    temperature,
    windspeed,
  } = location;

  const handleAnchorClick = () => {
    const filteredItems = ubicaciones.filter(function(item)
    {
      return item.id !== id;
    });
    setLocations(filteredItems);
  }

  return (
    <div className="location-container">
      <div className="location">
        <h3>{country}</h3>
        <div className="target">
          <div>
            <h4>latitud :  {lat}</h4><br></br>
            <h4>longitud : {lon}</h4><br></br>
            <h4>temperatura : {temperature}°C</h4><br></br>
            <h4>velocidad del: {windspeed}km/h</h4>
          </div>
        </div>
        
      </div>
      <div className="location-actions">
        <div className="fav">
          <BsTrash onClick={() => handleAnchorClick()} value={country} />
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;