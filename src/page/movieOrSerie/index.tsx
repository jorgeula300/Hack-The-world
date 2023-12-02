import { BsBell } from "react-icons/bs";
import Search from "../../components/form/search";
import ContentCard from "../../components/layout/contentCard";
import { MoviesInterface } from "../../interfaces/movies";
import FilterMenu from "../../components/common/filterMenu";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../consts";

interface MovieOrSerie {
  layout: "peliculas" | "series" | "documentales";
}
const MovieOrSerie = ({
  layout,
}: MovieOrSerie) => {
  const [movies, setMovies] = useState<MoviesInterface[]>();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getMovies = async () => {
      const response = await fetch(
        `${
          layout === "series"
            ? `${API_URL}discover/tv?api_key=${API_KEY}&with_networks=213`
            : layout === "documentales"
            ? `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=99`
            : `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1
        `
        }`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data);
    };
    getMovies();
    return () => {
      window.scrollTo(0, 0);
    };
  }, [layout]);

  return (
    <div className="flex flex-col w-full h-screen pl-[270px]  pr-[250px] pt-14 text-white ">
      <ContentCard
        title={
          layout === "series"
            ? "Series"
            : layout === "documentales"
            ? "Documentales"
            : "Peliculas"
        }
        movies={movies as MoviesInterface[]}
      />

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

      <FilterMenu  />
    </div>
  );
};
export default MovieOrSerie;
