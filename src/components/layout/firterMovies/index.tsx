import { BsBell } from "react-icons/bs";
import { MoviesInterface } from "../../../interfaces/movies";
import Search from "../../form/search";
import ContentCard from "../contentCard";
import { FaUserCircle } from "react-icons/fa";
import FilterMenu from "../../common/filterMenu";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../../consts";
import Spinner from "../spinner";
import Header from "../header";

interface FilterMovieProps {
  layout:
    | "accion"
    | "comedia"
    | "drama"
    | "fantasia"
    | "romance"
    | "terror"
    | "documentales";
}

const FilterMovie = ({ layout }: FilterMovieProps) => {
  const [movies, setMovies] = useState<MoviesInterface[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const getMovies = async () => {
      const response = await fetch(
        `${
          layout === "accion"
            ? `${API_URL}trending/all/week?api_key=${API_KEY}&language=en=US`
            : layout === "comedia"
            ? `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=35`
            : layout === "drama"
            ? `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=18`
            : layout === "fantasia"
            ? `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=14`
            : layout === "romance"
            ? `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`
            : layout === "terror"
            ? `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=27`
            : `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=99`
        }`
      );
      const data = await response.json();
      setIsLoading(false);
      setMovies(data.results);
      console.log(data);
    };
    getMovies();
    return () => {
      window.scrollTo(0, 0);
    };
  }, [layout]);

  return (
    <div>
      <Header />
      <div className="flex flex-col w-full h-screen pl-[270px]  pr-[250px] pt-14 text-white ">
        {isLoading ? (
          <span>
            <Spinner />
            {/* <h1 className="text-2xl font-bold">MoviesApp</h1> */}
          </span>
        ) : (
          <ContentCard
            title={
              layout === 'accion'
                ? 'Accion'
                : layout === 'comedia'
                ? 'Comedia'
                : layout === 'drama'
                ? 'Drama'
                : layout === 'fantasia'
                ? 'Fantasia'
                : layout === 'romance'
                ? 'Romance'
                : layout === 'terror'
                ? 'Terror'
                : 'Documentales'
            }
            movies={movies as MoviesInterface[]}
          />
        )}

        <section className="fixed top-0 left-[250px]   flex flex-row justify-between w-[79%] p-4 py-3 bg-[#262A2E] ">
          <Search />
          <div className="flex flex-row gap-3">
            <i className="bg-[#212121] text-xl p-2 h-max rounded-full">
              <BsBell />
            </i>
            <i className=" text-4xl">
              <FaUserCircle />
            </i>
          </div>
        </section>

        <FilterMenu layout={layout} />
      </div>
    </div>
  );
};
export default FilterMovie;
