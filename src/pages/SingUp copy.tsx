import { Button } from '../components/form/button/Button';
import ChetP from '../components/form/chet/ChetP';
import Slider from '../components/form/slider.tsx/Slider';

import { useState } from 'react';

const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [valueInput, setValueInput] = useState({
  //     name: '',
  //     lastName: '',
  //     email: '',
  //     password: '',
  // })

  // const handleInputChange = (e: any) => {
  //     setValueInput({
  //         ...valueInput,
  //         [e.target.name]: e.target.value
  //     })
  //     console.log(valueInput)
  // }

  // const handleSubmit = (e: any) => {
  //     e.preventDefault();
  //     console.log(valueInput)

  // }
  // const [form,setForm]= useState(initialForm);
  // const [error,setError]=useState({});
  // const [loading,setLoading]=useState(false);
  // const [response,setResponse]=useState(null);

  let showPasswords: string = 'z-10 password';
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (showPassword) {
    showPasswords = 'z-10 text';
  } else {
    showPasswords = 'z-10 password';
  }

  const handelChetPRecordar = () => {};
  const handelChetPAcepto = () => {};

  const handleSingUp = () => {};

  return (
    <div className="flex justify-center items-center lg:w-[70%] lg:h-screen m-auto ">
      <div className=" flex w-screen h-screen overflow-hidden lg:w-[70%] lg:h-[70%] ">
        <Slider />
        <div className=" md:w-[50%] h-screen lg:w-[50%] overflow-hidden lg:relative text-white rounded-r-md border-2 border-x-solid border-[#7A0BC0]">
          <img className=" w-screen" src="/VectorSt.svg" alt="VectorSt" />
          <h1
            className=" text-center mb-5 text-[20px]   lg:absolute lg:z-10 lg:top-[1%]  lg:left-[26%] lg:text-[20px] xl:text-[40px] lg:font-medium"
            id="titulo"
          >
            Regístrate
          </h1>

          <form className=" z-10 flex flex-col justify-center  w-[80%] 2xl:h-[50%] xl:h-[55%] gap-3  m-auto">
            <div className=" z-10 flex justify-between items-center  [&>div]:mx-2 [&>div>label]:mb-2">
              <div className=" flex flex-col ">
                <label htmlFor="">Nombres</label>
                <input
                  className=" z-10 bg-transparent w-[100%] h-8  border border-solid border-[#7A0BC0] rounded-2xl px-3 placeholder:text-xs "
                  type="text"
                  name="Nombre"
                  placeholder="Usuario"
                />
              </div>
              <div className=" flex flex-col   ">
                <label htmlFor="">Apellidos</label>
                <input
                  className=" z-10 bg-transparent w-[100%] h-8   border border-solid border-[#7A0BC0] rounded-2xl placeholder:text-xs px-3"
                  type="text"
                  name="Apellido"
                  placeholder="Sanchez"
                />
              </div>
            </div>

            <div className=" flex flex-col gap-2 z-10 [&>div>input]:bg-transparent [&>label]:mx-2 [&>div>input]:w-[100%] [&>div>input]:mx-2  [&>div>input]:h-8  [&>div>input]:border [&>div>input]:border-solid [&>div>input]:border-[#7A0BC0] [&>div>input]:rounded-2xl [&>div>input]:placeholder:text-xs [&>div>input]:px-3">
              <label htmlFor="">Correo</label>
              <input
                className="bg-transparent  z-10 mx-2 w-[87%]  h-8 md:w-[88%]  sm:w-[92%] lg:w-[82%]  xl:w-[88%] border border-solid border-[#7A0BC0] rounded-2xl placeholder:text-xs px-3"
                type="text"
                name="Correo"
                placeholder="user@gmail.com"
              />
              <label htmlFor="">Contraseña</label>
              <div className="flex justify-center items-center">
                <input
                  type={showPasswords}
                  name="Contraseña"
                  placeholder="**********"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleShowPassword}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
              <label htmlFor="">Confirmar contraseña</label>

              <div className="flex justify-center items-center">
                <input
                  type={showPasswords}
                  name="ConfirmarContraseña"
                  placeholder="**********"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleShowPassword}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center w-[100%]  [&>div]:w-[100%] [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:gap-2">
              <div className="m-2">
                <div className="cursor-pointer">
                  <ChetP onclick={handelChetPRecordar} />
                </div>
                <label htmlFor="" className=" z-10 text-[8px] ">
                  Recordar contraseña
                </label>
              </div>

              <div>
                <div className="cursor-pointer">
                  <ChetP onclick={handelChetPAcepto} />
                </div>
                <label htmlFor="" className=" z-10 text-[8px]">
                  He leído y acepto todos los términos y condiciones
                </label>
              </div>
            </div>

            <div className=" flex justify-center">
              <Button text="Registrarse" onclick={handleSingUp} />
            </div>
          </form>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="749"
            height="167"
            viewBox="0 0 749 167"
            fill="none"
            className=" lg:absolute  lg:top-[370px] "
          >
            <path
              d="M0 0L19.8333 17.6021C39.6667 35.5347 79.3333 70.243 119 79.3333C158.667 88.4236 198.333 70.243 238 70.4909C277.667 70.243 317.333 88.4236 357 88.1756C396.667 88.4236 436.333 70.243 476 83.7131C515.667 96.6874 555.333 141.312 595 158.667C634.667 176.021 674.333 167.757 714 163.046C753.667 158.667 793.333 158.667 833 141.064C872.667 123.132 912.333 88.4236 952 79.3333C991.667 70.243 1031.33 88.4236 1071 92.5555C1110.67 96.6874 1150.33 88.4236 1170.17 83.7131L1190 79.3333V264.444H1170.17C1150.33 264.444 1110.67 264.444 1071 264.444C1031.33 264.444 991.667 264.444 952 264.444C912.333 264.444 872.667 264.444 833 264.444C793.333 264.444 753.667 264.444 714 264.444C674.333 264.444 634.667 264.444 595 264.444C555.333 264.444 515.667 264.444 476 264.444C436.333 264.444 396.667 264.444 357 264.444C317.333 264.444 277.667 264.444 238 264.444C198.333 264.444 158.667 264.444 119 264.444C79.3333 264.444 39.6667 264.444 19.8333 264.444H0V0Z"
              fill="#7A0BC0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
