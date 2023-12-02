import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type CustomProps = {
  label?: string;
  className?: string;
  showCounter?: boolean;
};

type Props = InputProps & CustomProps;

const CheckboxLabel = ({ label, className, ...props }: Props) => {
  
  return (
    <div className="flex items-center justify-between px-5 py-2 md:border-b md:border-gray-600">
      <label htmlFor="category-id" className="text-sm font-medium text-white">
        {label}
      </label>
      <input
        id="category-id"
        className={
          className
            ? className
            : "hidden md:flex w-5 h-5 bg-transparent border-2 border-[#582FFF] rounded  text-[#582FFF] focus:ring-[#582FFF]"
        }
        type="checkbox"
        {...props}
      />
    </div>
  );
};
export default CheckboxLabel;
