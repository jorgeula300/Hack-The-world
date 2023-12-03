import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Loading } from '../../components';
import ContentSearch from '../../components/layout/contentSearch';
import Detail from '../../components/layout/detail';
import FilterMovie from '../../components/layout/firterMovies';
import { Home, Login, NotFound, Register } from '../../pages';
import MovieOrSerie from '../../pages/movieOrSerie';
import { useAuth } from '../hooks/useAuth';
import { useColorTheme } from '../hooks/useColorTheme';

const AppRouter = () => {
  const { loggedUser } = useAuth();
  let isAuth = true;
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
        <Route path="/" element={<Navigate replace to="/inicio" />} />
        <Route
          path="/inicio"
          element={
            isAuth ? <Home /> : <Navigate replace to="/iniciar-sesion" />
          }
        />

        <Route path="iniciar-sesion">
          <Route
            index
            element={!isAuth ? <Login /> : <Navigate replace to="/inicio" />}
          />
          <Route path=":token">
            <Route
              index
              element={!isAuth ? <Login /> : <Navigate replace to="/inicio" />}
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

        {isAuth && (
          <Route
            path="/peliculas"
            element={<MovieOrSerie layout="peliculas" />}
          />
        )}
        {isAuth && (
          <Route path="/series" element={<MovieOrSerie layout="series" />} />
        )}
        {isAuth && (
          <Route path="/accion" element={<FilterMovie layout="accion" />} />
        )}
        {isAuth && (
          <Route path="/comedia" element={<FilterMovie layout="comedia" />} />
        )}
        {isAuth && (
          <Route path="/drama" element={<FilterMovie layout="drama" />} />
        )}
        {isAuth && (
          <Route path="/fantasia" element={<FilterMovie layout="fantasia" />} />
        )}
        {isAuth && (
          <Route path="/romance" element={<FilterMovie layout="romance" />} />
        )}
        {isAuth && (
          <Route path="/terror" element={<FilterMovie layout="terror" />} />
        )}
        {isAuth && (
          <Route
            path="/documentales"
            element={<FilterMovie layout="documentales" />}
          />
        )}
        {isAuth && <Route path="/pelicula/:id" element={<Detail />} />}
        {isAuth && <Route path={'/search/movie'} element={<ContentSearch />} />}

        {/* <Route path="*" component={NotFound} /> */}
        {/* // Use it in this way, and it should work: */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
