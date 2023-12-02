import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY } from "../../../consts";
import ContentCard from "../contentCard";
import { MoviesInterface } from "../../../interfaces/movies";
import Spinner from "../spinner";
import Search from "../../form/search";
import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import FilterMenu from "../../common/filterMenu";
import Header from "../header";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ContentSearch = () => {
  const query = useQuery();
  const search = query.get("query");

  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
      );
      const data = await response.json();
      setMovies(data.results);
      setLoading(false);
    };
    getMovies();
  }, [search]);

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
          <ContentCard title="" movies={movies as MoviesInterface[]} />
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
        <FilterMenu />
      </div>
    </div>
  );
};
export default ContentSearch;
