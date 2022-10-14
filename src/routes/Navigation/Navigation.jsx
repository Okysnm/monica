import { useContext, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";
import miLogo from '../../assets/tornado.png';
import './Navigation.css';


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const userStored = localStorage.getItem('currentUser')
        //console.log({userStored})
        if (userStored) {
            setCurrentUser(JSON.parse(userStored))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSignOut = () => {
        setCurrentUser(null);
        localStorage.setItem('currentUser', null);
        navigate('/');
    };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={miLogo} alt='Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
            {currentUser ? (
                <Link className='nav-link enter' to='location/create'>
                    Nueva Ubicacion
                </Link>
            ) : (
                <span className='nav-link'>Nueva Ubicacion</span>
            )}

            {currentUser ? (
                <span className='nav-link sign-out' onClick={handleSignOut}>
                    Cerrar Sesion
                </span>
            ) : (
                <Link className='nav-link sign-in' to='/'>
                    Iniciar Sesion
                </Link>
            )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;