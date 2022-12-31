import React from 'react';
import { Link, useLocation, Location } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import './AppHeader.scss';
import User from '../../domain/interfaces/user';
import AppRoutes from '../../config/appRoutes';


interface AppHeadereProps {
  currentUser: User | null;
}

function AppHeader({currentUser}: AppHeadereProps) {
  const location: Location = useLocation();

  return (
    <div className='header-container'>
      { location?.pathname === AppRoutes.HOME && <React.Fragment>
        <div className='header-item align-right'>
          { currentUser ? <Link to={ AppRoutes.ADMIN }>Panel Admina</Link> : <Link to={ AppRoutes.LOGIN }>Zaloguj się</Link>}
        </div>
        { currentUser && <div className='header-item'>
          <Link to={ AppRoutes.LOGOUT }>Wyloguj</Link>
        </div> }
      </React.Fragment> }
      { location?.pathname === AppRoutes.LOGIN && <div className='header-item'>
        <Link to={ AppRoutes.HOME }>
          <AiOutlineArrowLeft />
        </Link>
      </div> }
      { location?.pathname === AppRoutes.ADMIN && <div className='header-item'>
        <Link to={ AppRoutes.HOME }>
          <AiOutlineArrowLeft />
        </Link>
      </div> }
      { location?.pathname === AppRoutes.LOGOUT && <React.Fragment>
        <div className='header-item'>
          <Link to={ AppRoutes.HOME }>
            <AiOutlineArrowLeft />
          </Link>
        </div>
        { !currentUser && <div className='header-item align-right'>
          <Link to={ AppRoutes.LOGIN }>Zaloguj się</Link>
        </div> }
      </React.Fragment> }
    </div>
  );
};

export default AppHeader;
