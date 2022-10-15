import './home.css';
import Ubicaciones from '../../components/Ubicacion/Ubicaciones';
import { useContext } from 'react';
import { UbicacionesContext } from '../../context/UbicacionesContext';



const Home = () => {
  const { ubicaciones} = useContext(UbicacionesContext)
  //<Locations locations={locations}></Locations>
  return (
    <>
      <div className='main-container'>
      <Ubicaciones ubicaciones={ubicaciones}></Ubicaciones>
        
      </div>
    </>
  );
};

export default Home;