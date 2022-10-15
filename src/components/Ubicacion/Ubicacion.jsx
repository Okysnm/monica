import { useContext } from "react";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import "./Ubicacion.css";
import { BsThermometerHalf, BsTrash, BsWind } from "react-icons/bs";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import { BiExpand } from "react-icons/bi";
import { Link } from "react-router-dom";

const Ubicacion = ({ ubicacion }) => {
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext);

  const {
    id,
    country,
    lat,
    lon,
    temperature,
    windspeed,
    photo_url,
  } = ubicacion;

  const handleAnchorClick = () => {
    const filteredItems = ubicaciones.filter(function (item) {
      return item.id !== id;
    });
    setUbicaciones(filteredItems);
  }

  return (

    <div className="card-ubi">
      <img className="card-image-ubi" src={photo_url} alt="" />
      <div className="card-text-ubi">
        <h3>{country}</h3>
        <h4>Latitud <TbWorldLatitude></TbWorldLatitude>:  {lat}</h4>
        <h4>Longitud <TbWorldLongitude></TbWorldLongitude>: {lon}</h4>
      </div>
      <div className="card-stats-ubi">
        <div className="stat-ubi">
          <div className="value">Temperatura <BsThermometerHalf></BsThermometerHalf></div>
          <div className="type">{temperature}°C</div>
        </div>
        <div className="stat-ubi">
          <div className="value">Velocidad del <BsWind title="Viento"></BsWind></div>
          <div className="type">{windspeed}km/h</div>
        </div>
        <div className="stat-ubi">
          <Link className="fav-ubi" to={`/ubicacion/${id}`}>
            <BiExpand className="expand-ubi"></BiExpand>
          </Link>
          <div className="fav-ubi">
            <BsTrash onClick={() => handleAnchorClick()} value={country} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Ubicacion;