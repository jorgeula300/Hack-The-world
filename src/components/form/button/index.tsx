interface ButtonProsp {
    text: string;
    onclick: () => void;
}
export const Button = ({ text, onclick }: ButtonProsp) => {
    return (
        <button className="btn" type="button"  onClick={onclick}>{text}</button>
    )
}
