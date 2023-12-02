import { useState } from 'react';
import { Button } from '../../components/form/button/Button';
import Slider from '../../components/form/slider.tsx/Slider';
import './login.css';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
const Login = () => {
  const handleLogin = () => {
    console.log('login');
  };

  const [toggle, setToggle] = useState(false);

  return (
    <div className="loginPage h-[100vh] w-[100%]">
      <div className="loginPageWrapper">
        <div className="loginPageWrapperInner loginPage1">
          <img src="/img/image7.png" />
        </div>
        <div className="loginPageWrapperInner loginPag2">
          <img
            className="Vector1up"
            src="/img/loginImg/Vector1up.svg"
            alt="img"
          />
          <div className="loginPageWrapperCont">
            {/*  */}
            <h1 className="loginPageTitle">Iniciar sesión</h1>
            <div className="loginPageFormField">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico aquí."
              />
            </div>
            <div className="loginPageFormField">
              <label htmlFor="password">Correo electrónico</label>
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
                <div>
                  <input type="checkbox" name="remember" />
                  <AiOutlineEyeInvisible className="loginPageFormIcon" />
                </div>
                <label htmlFor="password">Correo electrónico</label>
              </div>

              <Link to="/">¿Olvidaste tu contraseña?</Link>
            </div>

            <button>Iniciar sesión</button>

            <div className="loginPageSigup">
              ¿Aún no tienes una cuenta?, Regístrate aquí.
            </div>
            {/*  */}
          </div>
          <img
            className="Vector2down"
            src="/img/loginImg/Vector2down.svg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
