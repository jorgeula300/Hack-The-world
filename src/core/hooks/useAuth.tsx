'use client';
import { useCallback, useContext, useState } from 'react';

import { AuthContext } from '../context/AuthContext';
// import { loginService } from '../services/users.service';
import { useRouter } from 'next/navigation';
import { Navigate } from 'react-router-dom';
import { LoginAuthProps } from '../../types/types';
import { capitalizeFirstLetter, toastNotification } from '../config/helpers';
import { loginService } from '../services/users.service';
import { useColorTheme } from './useColorTheme';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';

export const useAuth = () => {
  const { isAuth, setIsAuth, activateAuth, removeAuth } =
    useContext(AuthContext);
  const { state: stateFromUI } = useColorTheme();
  const dispatch = useDispatch();

  const [state, setState] = useState({ loading: false, error: false });

  function loggedUser() {
    // setObjetProfile(isAuth)

    try {
      // return JSON.parse(window.localStorage.getItem('user'));
      // return JSON.parse(window.localStorage.user);
      console.log(
        JSON.parse(JSON.parse(localStorage.getItem('persist:root')!).user)
          .currentUser
      );
      return JSON.parse(JSON.parse(localStorage.getItem('persist:root')!).user)
        .currentUser;
    } catch (error) {
      // console.log('error', error);
      return {};
    }
  }

  const login = useCallback(({ email, password }: LoginAuthProps) => {
    setState({ loading: true, error: false });
    dispatch(loginStart());

    loginService({ email, password }).then(async (response: any) => {
      const data = await response.json();
      if (response.status === 200) {
        // activateAuth(data.accessToken);
        // setIsAuth(data.accessToken);
        dispatch(loginSuccess(data));

        // window.localStorage.setItem('token', data.accessToken);

        // const { password, accessToken, ...others } = data;
        // window.localStorage.setItem('user', JSON.stringify(others));

        setState({ loading: false, error: false });

        // toastNotification({
        //   icon: 'success',
        //   title:
        //     loggedUser().gender === 'Masculino'
        //       ? 'Bienvenido ' +
        //         capitalizeFirstLetter(
        //           loggedUser().firstName + ' ' + loggedUser().firstSurname
        //         )
        //       : 'Bienvenida ' +
        //         capitalizeFirstLetter(
        //           loggedUser().firstName + ' ' + loggedUser().firstSurname
        //         ),
        //   timer: 3000,
        //   stateFromUI,
        // });
        toast.success(
          loggedUser().gender === 'Masculino'
            ? 'Bienvenido ' +
                capitalizeFirstLetter(
                  loggedUser().firstName + ' ' + loggedUser().firstSurname
                )
            : 'Bienvenida ' +
                capitalizeFirstLetter(
                  loggedUser().firstName + ' ' + loggedUser().firstSurname
                )
        );
      } else {
        // setState({ loading: false, error: true });
        setState({ loading: false, error: false });
        dispatch(loginFailure());
        // toastNotification({
        //   icon: 'error',
        //   title: 'Ocurrió un error',
        //   text: data.message,
        //   stateFromUI,
        // });
        toast.error(data.message);
      }
    });
  }, []);

  // let navigateRouter = useNavigate();

  const navigateTo = (to: string, useNavigate: any) => {
    if (!document?.startViewTransition) {
      useNavigate(to);
    } else {
      document.startViewTransition(() => {
        // document.documentElement.scrollTop = 0;
        useNavigate(to);
      });
    }
  };

  function CheckAuth(props: any) {
    if (isAuth) {
      return { ...props };
    } else {
      return <Navigate replace to="/login" />;
    }
  }

  return {
    isAuth,
    logOut: removeAuth,
    loading: state.loading,
    error: state.error,
    login,
    loggedUser: loggedUser(),
    navigateTo,
    CheckAuth,
  };
};
