import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { emailPatternValidation, getControl } from '../core/config/helpers';
import { useAuth } from '../core/hooks/useAuth';
import './login.css';
import './signup.css';

const Login = () => {
  const { loading, register } = useAuth();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const email = getControl(elements.namedItem('email'))!;
    const password = getControl(elements.namedItem('password'))!;
    const firstName = getControl(elements.namedItem('firstName'))!;

    if (email.value != '' && password.value != '') {
      if (emailPatternValidation(email.value)) {
        !loading && register({ email: email.value, password: password.value });

        // email.value = '';
        // password.value = '';
      } else {
        // toastNotification({
        //   icon: 'error',
        //   title: 'Correo erroneo',
        //   text: 'Ingrese un correo válido.',
        //   timer: 3000,
        //   stateFromUI: state,
        // });

        toast.error('Ingrese un correo válido');
      }
    } else {
      // toastNotification({
      //   icon: 'error',
      //   title: 'Error de credenciales',
      //   text: 'Falta información requerida.',
      //   timer: 3000,
      //   stateFromUI: state,
      // });

      toast.error('Falta información requerida');
    }
  };

  return (
    <div className="loginPage h-[100vh] w-[100%]">
      <div className="loginPageWrapper">
        <div className="loginPageWrapperInner loginPage1">
          <img src="/img/image7.png" />
        </div>
        <div className="loginPageWrapperInner loginPag2">
          <div className="loginPag2Wrapper">
            <img
              className="Vector1up"
              src="/img/loginImg/Vector1up.svg"
              alt="img"
            />
            <form onSubmit={handleSubmit} className="loginPageWrapperCont">
              {/*  */}
              <h1 className="loginPageTitle">Registro</h1>

              <div className="loginPageFormField">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico aquí."
                />
              </div>
              <div className="loginPageFormField">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña aquí."
                />
              </div>

              <div className="loginPageOptions">
                <div
                  className="loginPageFormFieldText"
                  title="Recordar  el próximo ingreso a la plataforma."
                >
                  <div className="remember">
                    <input type="checkbox" name="remember" />
                    {/* <AiOutlineEyeInvisible className="loginPageFormIcon" /> */}
                    <label htmlFor="remember">Recordar credenciales</label>
                  </div>
                </div>

                <Link to="/">¿Olvidaste tu contraseña?</Link>
              </div>

              <button>Iniciar sesión</button>

              <div className="loginPageSigup">
                ¿Aún no tienes una cuenta?,{' '}
                <Link to="/registro">Regístrate.</Link>
              </div>
              {/*  */}
            </form>
            <img
              className="Vector2down"
              src="/img/loginImg/Vector2down.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
