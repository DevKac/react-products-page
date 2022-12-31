import React, { useEffect } from 'react';
import  { Navigate } from 'react-router-dom'

import User from '../../domain/interfaces/user';
import AppRoutes from '../../config/appRoutes';

interface LogoutPageProps {
  currentUser: User | null;
  logoutCurrentUser: () => void;
}

function LogoutPage({currentUser, logoutCurrentUser}: LogoutPageProps) {
  useEffect(() => {
    logoutCurrentUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      { currentUser ?
        <h2>Wylogowywanie...</h2> :
        <Navigate to={AppRoutes.HOME} replace={true} />
      }
    </React.Fragment>
  );
}

export default LogoutPage;
