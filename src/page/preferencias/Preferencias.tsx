import { Button } from '../../components/form/button/Button';
import './Preferencias.css'
import { useState } from 'react';
const Preferencias = () => {
    const [preferencias, setPreferencias] = useState<string[]>([]);
    const [accion, setAccion] = useState(false)
    const [comedia, setComedia] = useState(false)
    const [drama, setDrama] = useState(false)
    const [fantasia, setFantasia] = useState(false)
    const [romance, setRomance] = useState(false)
    const [terror, setTerror] = useState(false)
    const handlePreferencias = (event: React.MouseEvent<HTMLDivElement>) => {
        const preferencia = event.currentTarget.textContent;
        if (preferencia && !preferencias.includes(preferencia)) {
            setPreferencias([...preferencias, preferencia]);
        }
    };



    let accions = '';
    let comedias: string = '';
    let dramas = '';
    let fantasias = '';
    let romances = '';
    let terrors = '';

    const handleAccion = () => {
        setAccion(!accion)
    }

    if (accion) {
        accions = 'hover:border-white hover:text-white  text-white border-white'
    } else {
        accions = ' hover:border-white hover:text-white  border-[#E8E8E873] text-[#E8E8E873]  '
    }

    console.log(accion)

    const handleComedia = () => {
        setComedia(!comedia)

    }

    if (comedia) {
        comedias = 'hover:border-white hover:text-white  text-white border-white'
    } else {
        comedias = ' hover:border-white hover:text-white  border-[#E8E8E873] text-[#E8E8E873] '
    }

    const handleDrama = () => {
        setDrama(!drama)
    }

    if (drama) {
        dramas = 'hover:border-white hover:text-white  text-white border-white'
    } else {
        dramas = ' hover:border-white hover:text-white  border-[#E8E8E873] text-[#E8E8E873] '
    }

    const handleFantasia = () => {
        setFantasia(!fantasia)
    }

    if (fantasia) {
        fantasias = 'hover:border-white hover:text-white  text-white border-white'
    }
    else {
        fantasias = ' hover:border-white hover:text-white  border-[#E8E8E873] text-[#E8E8E873] '
    }
    const handleRomance = () => {
        setRomance(!romance)
    }
    if (romance) {
        romances = 'hover:border-white hover:text-white  text-white border-white'
    }
    else {
        romances = ' hover:border-white hover:text-white  border-[#E8E8E873] text-[#E8E8E873] '
    }

    const handleTerror = () => {
        setTerror(!terror)
    }

    if (terror) {
        terrors = 'hover:border-white hover:text-white  text-white border-white'
    }
    else {
        terrors = ' hover:border-white hover:text-white  border-[#E8E8E873] text-[#E8E8E873] '
    }

    const handleContinuar = () => {
        console.log('continuar')
    }



    console.log(preferencias)

    return (<div className=" flex justify-center items-center w-[100%] md:w-[70%] h-screen bg-transparent m-auto">
        <div className=" relative w-[97%] h-[50%] gap-3 md:w-[80%] md:h-[60%] md:gap-5 flex flex-col justify-center items-center bg-[#1E2225] lg:w-[80%] lg:h-[50%] rounded-3xl lg:gap-10 " id="preferencias">
            <svg className='absolute top-2 right-4 w-5 xl:top-2 lg:top-3 md:top-7 md:right-4 md:w-7 cursor-pointer ' onClick={handleContinuar} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.5 13.5L13.5 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.5 13.5L22.5 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h1 className=" text-white text-[20px] md:text-[30px] " id='titulo-preferencias'>¿Que tipo de películas te gustan?</h1>
            <div className="grid grid-cols-3 gap-4     [&>div]:text-center [&>div]:rounded-xl [&>div]:border [&>div]:border-solid    [&>div]:cursor-pointer [&>div>h1]:py-2 [&>div>h1]:px-2 md:[&>div>h1]:px-5 md:[&>div>h1]:py-5">
                <div className={accions} onClick={handlePreferencias}><h1 onClick={handleAccion}>Acción</h1></div>
                <div className={comedias} onClick={handlePreferencias}><h1 onClick={handleComedia}>Comedia</h1></div>
                <div className={dramas} onClick={handlePreferencias}><h1 onClick={handleDrama}>Drama</h1></div>
                <div className={fantasias} onClick={handlePreferencias}><h1 onClick={handleFantasia}>Fantasia</h1></div>
                <div className={romances} onClick={handlePreferencias}><h1 onClick={handleRomance}>Romance</h1></div>
                <div className={terrors} onClick={handlePreferencias}><h1 onClick={handleTerror}>Terror</h1></div>
            </div>

            <Button text='Continuar' onclick={handleContinuar} />

        </div>



    </div>);
}

export default Preferencias;