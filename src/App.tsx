import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.scss';
import useCurrentUser from './hooks/UseCurrentUser/UseCurrentUser';
import AppHeader from './components/AppHeader/AppHeader';
import AppLoader from './components/AppLoader/AppLoader';
import AdminPanel from './containers/AdminPanel/AdminPanel';
import Products from './containers/Products/Products';
import AppRoutes from './config/appRoutes';
import LoginPage from './containers/LoginPage/LoginPage';
import LogoutPage from './containers/LogoutPage/LogoutPage';
import CurrentUserGuard from './helpers/CurrentUserGuard/CurrentUserGuard';

function App() {
  const {currentUser, setCurrentUser} = useCurrentUser();

  return (
    <BrowserRouter>
      <header className='app-header'>
        <AppHeader currentUser={currentUser} />
      </header>
      
      <div className='app-container'>
        <Routes>
          <Route path={ AppRoutes.HOME } element={
            <Suspense fallback={ <AppLoader /> }><Products /></Suspense>
          } />
          <Route path={ AppRoutes.LOGIN } element={
            <Suspense fallback={ <AppLoader /> }><LoginPage currentUser={currentUser} loginCurrentUser={setCurrentUser} /></Suspense>
          } />
          <Route path={ AppRoutes.ADMIN } element={
            <Suspense fallback={ <AppLoader /> }>
              <CurrentUserGuard currentUser={currentUser}>
                <AdminPanel />
              </CurrentUserGuard>
            </Suspense>
          } />
          <Route path={ AppRoutes.LOGOUT } element={
            <Suspense fallback={ <AppLoader /> }><LogoutPage currentUser={currentUser} logoutCurrentUser={setCurrentUser} /></Suspense>
          } />
          <Route path="*" element={
            <div>@TODO: 404 do zrobienia</div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
