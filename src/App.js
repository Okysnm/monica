import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import LocationCreation from './routes/Ubicacion/UbicacionCreation';


function App() {
  

  return (
      <div className='App'>
        
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='location/create' element={<LocationCreation/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
