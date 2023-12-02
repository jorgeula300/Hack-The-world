import { Suspense } from 'react';
import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '../../components';
import { Home, Login, NotFound, Register } from '../../pages';
import { useAuth } from '../hooks/useAuth';
import { useColorTheme } from '../hooks/useColorTheme';

const AppRouter = () => {
  const { loggedUser } = useAuth();
  let isAuth = loggedUser;
  const { state } = useColorTheme();

  return (
    <Suspense fallback={<Loading />}>
      {/* <GlobalStyle /> */}
      <ToastContainer
        position="bottom-right"
        theme={state.theme === 'dark' ? 'dark' : 'light'}
        autoClose={2000}
      />

      <Routes>
        <Route
          path="/"
          element={
            isAuth ? <Home /> : <Navigate replace to="/iniciar-sesion" />
          }
        />

        <Route path="iniciar-sesion">
          <Route
            index
            element={!isAuth ? <Login /> : <Navigate replace to="/" />}
          />
          <Route path=":token">
            <Route
              index
              element={!isAuth ? <Login /> : <Navigate replace to="/" />}
            />
          </Route>
        </Route>

        <Route path="registro">
          <Route
            index
            element={!isAuth ? <Register /> : <Navigate replace to="/" />}
          />
          <Route path=":token">
            <Route
              index
              element={!isAuth ? <Register /> : <Navigate replace to="/" />}
            />
          </Route>
        </Route>

        {/* <Route path="*" component={NotFound} /> */}
        {/* // Use it in this way, and it should work: */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
