import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { AppWrapper } from './ContactsList/ContactsListStyled';
import { useSelector, useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useEffect, lazy } from 'react';
import { Notify } from 'services/Notify';
import { selectIsRefreshing } from 'redux/auth/selectors';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {

  const isRefreshingUser = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);



  return (
    <AppWrapper>
{  !isRefreshingUser &&  <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>}
    </AppWrapper>
  );
}

Notify();
