import Slider from "../../components/form/slider.tsx/Slider";

const SingUp = () => {
    return (<div className=" flex justify-center items-center w-[70%] h-screen m-auto">

        <div className=" flex w-[70%] h-[70%] ">
            <Slider />
            <div className=" w-[50%] overflow-hidden relative text-white">
                
                <img src="/VectorSt.svg" alt="VectorSt" />

                <div className=" w-[80%] relative m-auto">
                    <div className=" flex justify-between items-center absolute ">
                        <div className=" flex flex-col ">
                            <label htmlFor="">Nombres</label>
                            <input className=" bg-transparent w-[100%]  border border-solid border-[#7A0BC0] rounded-xl" type="text" placeholder="Usuario" />
                        </div>
                        <div className=" flex flex-col">
                            <label htmlFor="">Apellidos</label>
                            <input className=" bg-transparent w-[100%]  border border-solid border-[#7A0BC0] rounded-xl" type="text" placeholder="Sanchez" />
                        </div>
                    </div>

                </div>




                <svg xmlns="http://www.w3.org/2000/svg" width="749" height="167" viewBox="0 0 749 167" fill="none" className=" absolute bottom-0">
                    <path d="M0 0L19.8333 17.6021C39.6667 35.5347 79.3333 70.243 119 79.3333C158.667 88.4236 198.333 70.243 238 70.4909C277.667 70.243 317.333 88.4236 357 88.1756C396.667 88.4236 436.333 70.243 476 83.7131C515.667 96.6874 555.333 141.312 595 158.667C634.667 176.021 674.333 167.757 714 163.046C753.667 158.667 793.333 158.667 833 141.064C872.667 123.132 912.333 88.4236 952 79.3333C991.667 70.243 1031.33 88.4236 1071 92.5555C1110.67 96.6874 1150.33 88.4236 1170.17 83.7131L1190 79.3333V264.444H1170.17C1150.33 264.444 1110.67 264.444 1071 264.444C1031.33 264.444 991.667 264.444 952 264.444C912.333 264.444 872.667 264.444 833 264.444C793.333 264.444 753.667 264.444 714 264.444C674.333 264.444 634.667 264.444 595 264.444C555.333 264.444 515.667 264.444 476 264.444C436.333 264.444 396.667 264.444 357 264.444C317.333 264.444 277.667 264.444 238 264.444C198.333 264.444 158.667 264.444 119 264.444C79.3333 264.444 39.6667 264.444 19.8333 264.444H0V0Z" fill="#7A0BC0" />
                </svg>
            </div>


        </div>




    </div>);
}

export default SingUp;