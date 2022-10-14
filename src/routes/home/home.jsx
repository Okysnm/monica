import './Home.css';
//import Locations from '../../components/Ubicacion/Ubicaciones';
import { useContext } from 'react';
import { UbicacionesContext } from '../../context/UbicacionesContext';



const Home = () => {
  const { locations} = useContext(UbicacionesContext)
  //<Locations locations={locations}></Locations>
  return (
    <>
      <div className='main-container'>
        
        
      </div>
    </>
  );
};

export default Home;