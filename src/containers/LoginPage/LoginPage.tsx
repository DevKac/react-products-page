import React, { useState } from 'react';
import  { Navigate } from 'react-router-dom'

import LoginForm from '../../components/LoginForm/LoginForm';
import AppRoutes from '../../config/appRoutes';
import User from '../../domain/interfaces/user';
import UserCredentials from '../../domain/interfaces/userCredentials';
import login from '../../helpers/login/login';

interface LoginPageProps {
  currentUser: User | null;
  loginCurrentUser: (user: User) => void;
}

function LoginPage({ currentUser, loginCurrentUser}: LoginPageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [incorrectCredentials, setIncorrectCredentials] = useState<boolean>(false);

  function handleLogin(userCredentials: UserCredentials): void {
    setIncorrectCredentials(false);
    setIsLoading(true);

    login(userCredentials)
    .then((user: User) => {
      loginCurrentUser(user);
      setIsLoading(false);
    })
    .catch(() => {
      setIsLoading(false);
      setIncorrectCredentials(true);
    })
  };

  return (
    <React.Fragment>
      { currentUser ?
        <React.Fragment>
          <h2>Witaj {currentUser.name}</h2>
          <Navigate to={AppRoutes.ADMIN} replace={true} />
        </React.Fragment>:
        <React.Fragment>
          { incorrectCredentials && <h2>Złe dane logowania</h2> }
          <LoginForm isLoading={isLoading} loginFn={handleLogin} />
        </React.Fragment>
      }
    </React.Fragment>
  );
}

export default LoginPage;
