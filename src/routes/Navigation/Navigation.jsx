import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from "../../context/UserContext";
import miLogo from '../../assets/logo.png';
import './Navigation.css';


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
  //  const navigate = useNavigate();

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
 //       localStorage.setItem('currentUser', null);
 //       navigate('/');
    };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={miLogo} alt='Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
            {currentUser ? (
                <Link className='nav-link enter' to='ubicacion/create'>
                    Nueva Ubicación
                </Link>
            ) : (
                <span className='nav-link'>Nueva Ubicación</span>
            )}

            {currentUser ? (
                <span className='nav-link sign-out' onClick={handleSignOut}>
                    Cerrar Sesión
                </span>
            ) : (
                <Link className='nav-link sign-in' to='/login'>
                    Iniciar Sesión
                </Link>
            )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;