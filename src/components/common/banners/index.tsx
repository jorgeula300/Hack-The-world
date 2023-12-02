import { MoviesInterface } from "../../../interfaces/movies";
import { FaPlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { IMAGE_PATH } from "../../../consts";

interface BannersProsp {
  movie?: MoviesInterface;
  // tv?: TvInterface;
}
const Banners = ({ movie }: BannersProsp) => {
  return (
    <div
      style={{
        backgroundImage: `url(${IMAGE_PATH}${
          movie?.backdrop_path ? movie.backdrop_path : movie?.poster_path
        })`,
      }}
      className="flex justify-between items-end p-4 w-full h-[325px] bg-cover bg-center bg-no-repeat rounded-2xl bg-slate-400"
    >
      <h1 className="text-3xl font-bold text-white max-w-xs">
        {movie?.title ? movie.title : movie?.original_title}
      </h1>
      <section className="flex gap-4">
        <button className="flex items-center gap-2 bg-[#e8e8e81b] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
          <FaPlay />
          Intro
        </button>
        <button className="flex items-center gap-2 bg-[#e8e8e81b] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
          <FaInfoCircle />
          Mas Información
        </button>
      </section>
    </div>
  );
};
export default Banners;
