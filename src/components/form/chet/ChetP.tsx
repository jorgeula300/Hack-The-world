interface ChetProsp {
    onclick: () => void;
}

const ChetP = ({ onclick }:ChetProsp) => {
    return (<svg className=" w-6 " onClick={onclick} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
        <rect x="1.5" y="1.5" width="26" height="26" rx="6.5" stroke="#582FFF" stroke-width="3" />
    </svg>);
}

export default ChetP;