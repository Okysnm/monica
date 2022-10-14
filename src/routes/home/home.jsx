import './Home.css';
import Locations from '../../components/Ubicacion/Ubicaciones';
import { useContext } from 'react';
import { LocationsContext } from "../../contexts/UbicacionesContext"


const Home = () => {
  const { locations} = useContext(LocationsContext)
  
  return (
    <>
      <div className='main-container'>
        <Locations locations={locations}></Locations>
        
      </div>
    </>
  );
};

export default Home;