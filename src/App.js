import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/login/Login';
import UbicacionCreation from './routes/Ubicacion/UbicacionCreation';


function App() {
  

  return (
      <div className='App'>
        
        <Routes>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='ubicacion/create' element={<UbicacionCreation/>}/>
        </Route>
        </Routes>
      </div>
  );
}

export default App;
