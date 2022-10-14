import "./UbicacionCreation.css";
import { useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import { getLocations } from "../../service"


const LocationCreation = () => {
  const { locations, setLocations } = useContext(UbicacionesContext)
  const navigate = useNavigate();

  const onSubmit = (data) => {
    
    getLocations(data.lat,data.lon)
      .then((datas) =>  {
        const locationNew ={
          id: locations.length + 1,
          country: data.country,
          lat:data.lat,
          lon:data.lon,
          temperature:datas.current_weather.temperature,
          windspeed:datas.current_weather.windspeed,
        }
        setLocations([...locations, locationNew])
        console.log(datas);
       })
      .catch((err) => console.log(err));
    
    navigate('/')
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors);
  
  
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control" 
      type="text" 
      placeholder="Lugar" 
      {...register("country",
     {required: true})} />
      <input className="form-control" 
      type="text" 
      placeholder="Indique la Latitud" 
      {...register("lat",
      {required: true})} />
      <input className="form-control" 
      type="text" 
      placeholder="Indique la Longitud" 
      {...register("lon", 
      {required: true})} />
        <button className='btn-form' type='submit'>
          Crear Ubicacion
        </button>
    </form>
  );
}


export default LocationCreation;

