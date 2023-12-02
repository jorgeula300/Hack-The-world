import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import { MdOutlineAssignmentReturn } from "react-icons/md";

const Header = () => {
  return (
    <nav
      className="fixed top-0 bottom-0 h-full z-10 flex flex-col justify-between translate-x-[-250px] bg-[#212121]
     text-gray-400  md:w-[250px] md:translate-x-0 h-screenn transition-all "
    >
      <div className="flex-col">
        <h1 className="w-full pl-12 my-10 text-2xl font-bold text-white">
          MoviesApp
        </h1>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center pl-12 gap-4 w-full h-[50px] bg-[#582FFF] text-white "
              : "flex items-center pl-12 gap-4 w-full h-[50px]"
          }
          to="/inicio"
        >
          <FaHome />
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center pl-12 gap-4 w-full h-[50px] bg-[#582FFF] text-white "
              : "flex items-center pl-12 gap-4 w-full h-[50px]"
          }
          to="/peliculas"
        >
          <MdLocalMovies />
          Peliculas
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center pl-12 gap-4 w-full h-[50px] bg-[#582FFF] text-white "
              : "flex items-center pl-12 gap-4 w-full h-[50px]"
          }
          to="/series"
        >
          <BsPlayBtn />
          Series
        </NavLink>
      </div>
      <button className="flex pl-12 gap-2 items-center h-[70px] text-lg hover:text-white">
        <MdOutlineAssignmentReturn />
        Cerrar seccion
      </button>
    </nav>
  );
};
export default Header;
