interface ButtonProsp {
    text: string;
    onclick: () => void;
}

import './Buttont.css';
export const Button = ({ text, onclick }: ButtonProsp) => {
    return (
        <button className=" w-40 z-10 " type="button" id='btn'  onClick={onclick}>{text}</button>
    )
}
