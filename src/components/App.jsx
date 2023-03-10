import StatisticPage from 'pages/StatisticPage/StatisticPage';
import CurrencyPage from 'pages/CurrencyPage/CurrencyPage';

import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, Loader } from '../components';

import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
/* import userOperations from 'redux/user/userOperations'; */

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage/SettingsPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ForgotPasswordPage = lazy(() =>
  import('../pages/ForgotPassword/ForgotPassword')
);
const CreatePasswordPage = lazy(() =>
  import('../pages/CreatePassword/CreatePassword')
);

const CheckVerifyEmail = lazy(() =>
  import('../components/CheckVerifyEmail/CheckVerifyEmail')
);
const GoogleAuthPage = lazy(() =>
  import('../pages/GoogleAuthPage/GoogleAuthPage')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  });

  return (
    <>
      <Suspense
        fallback={
          <Loader
            height={'120'}
            width={'120'}
            color={'#4A56E2'}
            center={true}
          />
        }
      >
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute redirectTo="/login" children={<Header />} />}
          >
            <Route path="/" element={<HomePage />}>
              <Route path="/statistic" element={<StatisticPage />} />
              <Route path="/currency" element={<CurrencyPage />} />
            </Route>
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route
            path="/signUp"
            element={<PublicRoute redirectTo="/" children={<RegisterPage />} />}
          />
          <Route
            path="/signUp/verify/:verificationToken"
            element={
              <PublicRoute redirectTo="/" children={<CheckVerifyEmail />} />
            }
          />
          <Route
            path="/login"
            element={<PublicRoute redirectTo="/" children={<LoginPage />} />}
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute redirectTo="/" children={<ForgotPasswordPage />} />
            }
          />
          <Route
            path="/create-password"
            element={
              <PublicRoute redirectTo="/" children={<CreatePasswordPage />} />
            }
          />
          <Route
            path="/google-auth"
            element={
              <PublicRoute redirectTo="/" children={<GoogleAuthPage />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
