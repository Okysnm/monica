import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import "./UbicacionDisplay.css";
import { BsThermometerHalf, BsWind } from "react-icons/bs";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import { RiArrowGoBackFill } from "react-icons/ri";

const UbicacionDisplay = () => {
    const { id } = useParams();
    const { ubicaciones } = useContext(UbicacionesContext);
    const [ubicacion] = ubicaciones.filter(
        (ubicacion) => ubicacion.id === Number(id)
    );

    return (
        <div className="card">
            <img className="card-image" src={ubicacion.photo_url} alt="" />
            <div className="card-text">
                <span className="date"></span>
                <h3>{ubicacion.country}</h3>
                <h4>Latitud <TbWorldLatitude></TbWorldLatitude>:  {ubicacion.lat}</h4>
                <h4>Longitud <TbWorldLongitude></TbWorldLongitude>: {ubicacion.lon}</h4>
            </div>
            <div className="card-stats">
                <div className="stat">
                    <div className="value">Temperatura <BsThermometerHalf></BsThermometerHalf></div>
                    <div className="type">{ubicacion.temperature}°C</div>
                </div>
                <div className="stat">
                    <div className="value">Velocidad del <BsWind title="Viento"></BsWind></div>
                    <div className="type">{ubicacion.windspeed}km/h</div>
                </div>
                <div className="stat">
                    <div className="fav">
                        <Link className="btn-back" to="/">
                            <RiArrowGoBackFill className="back"></RiArrowGoBackFill>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UbicacionDisplay;