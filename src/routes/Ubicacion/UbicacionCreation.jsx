import "./UbicacionCreation.css";
import { useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UbicacionesContext } from "../../context/UbicacionesContext";
import { getUbicaciones } from "../../service"


const UbicacionCreation = () => {
  const { ubicaciones, setUbicaciones } = useContext(UbicacionesContext)
  const navigate = useNavigate();

  const onSubmit = (data) => {
    
    getUbicaciones(data.lat,data.lon)
      .then((datas) =>  {
        const ubicacionNew ={
          id: ubicaciones.length + 1,
          country: data.country,
          lat:data.lat,
          lon:data.lon,
          temperature:datas.current_weather.temperature,
          windspeed:datas.current_weather.windspeed,
          photo_url:data.photo_url
        }
        setUbicaciones([...ubicaciones, ubicacionNew])
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
      <input className="form-control" 
      type="text" placeholder="URL FOTO" 
      {...register("photo_url", 
      {required: true})} />
        <button className='btn-form' type='submit'>
          Crear Ubicacion
        </button>
    </form>
  );
}


export default UbicacionCreation;

