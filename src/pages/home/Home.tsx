import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Banners from '../../components/common/banners';
import FilterMenu from '../../components/common/filterMenu';
import ContentCard from '../../components/layout/contentCard';
import { MoviesInterface } from '../../interfaces/movies';
import Search from '../../components/form/search';
import { BsBell } from 'react-icons/bs';
import { API_KEY, API_URL } from '../../consts';
import Header from '../../components/layout/header';

const Home = () => {
  const [movies, setMovies] = useState<MoviesInterface[]>();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getMovies = async () => {
      const response = await fetch(
        `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    getMovies();
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col w-full h-screen md:pl-[250px] text-white ">
        <section className="fixed top-0 md:left-[250px] w-[96%] flex flex-row justify-between md:w-[79%] p-4 py-3 bg-[#262A2E]">
          <Search />
          <div className="flex flex-row gap-3">
            <i className="bg-[#212121] text-xl p-2 h-max rounded-full">
              <BsBell />
            </i>
            <i className="text-4xl">
              <FaUserCircle />
            </i>
          </div>
        </section>
        <div className="flex flex-row w-full mt-20 ">
          <div className="w-full h-screen p-4 md:mr-[200px]">
            <Banners movie={movies?.[0] as MoviesInterface} />
            <ContentCard
              title="Peliculas Populares"
              movies={movies as MoviesInterface[]}
            />
          </div>
          <FilterMenu />
        </div>
      </div>
    </div>
  );
};

export default Home;
