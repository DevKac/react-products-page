import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import User from '../../domain/interfaces/user';
import AppRoutes from '../../config/appRoutes';

interface CurrentUserGuardProps {
  currentUser: User | null;
  children: ReactNode;
}

function CurrentUserGuard({currentUser, children}: CurrentUserGuardProps) {
  if (!currentUser) {
    return <Navigate to={AppRoutes.HOME} replace />;
  }

  return <React.Fragment>{ children }</React.Fragment>;
};

export default CurrentUserGuard;
