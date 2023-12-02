import { Link } from "react-router-dom";
import CheckboxLabel from "../checkboxLabel";
import { CiFilter } from "react-icons/ci";

interface FilterMenuProps {
  layout?:
    | "accion"
    | "comedia"
    | "drama"
    | "fantasia"
    | "romance"
    | "terror"
    | "documentales";
}
const FilterMenu = ({ layout }: FilterMenuProps) => {
  return (
    <section className="fixed w-full md:top-20 bottom-0 right-0 md:w-[195px] md:h-screen md:pr-4 ">
      <div className=" hidden md:flex flex-row  justify-between ">
        <h1 className="text-xl font-bold mt-6 ">Categories</h1>
        <CiFilter className="text-2xl mt-8 mr-4" />
      </div>
      <div className="flex overflow-hidden md:flex-col gap-3 pb-6 mt-4 bg-[#212121] w-full h-max md:rounded-xl">
        <Link to="/accion" className="text-white">
          <CheckboxLabel checked={layout === "accion"} label="Accion" />{" "}
        </Link>
        <Link to="/comedia" className="text-white">
          <CheckboxLabel checked={layout === "comedia"} label="Comedia" />
        </Link>
        <Link to="/drama" className="text-white">
          <CheckboxLabel checked={layout === "drama"} label="Drama" />
        </Link>
        <Link to="/fantasia" className="text-white">
          <CheckboxLabel checked={layout === "fantasia"} label="Fantasia" />
        </Link>
        <Link to="/romance" className="text-white">
          <CheckboxLabel checked={layout === "romance"} label="Romance" />
        </Link>
        <Link to="/terror" className="text-white">
          <CheckboxLabel checked={layout === "terror"} label="Terror" />
        </Link>
      </div>
    </section>
  );
};
export default FilterMenu;
