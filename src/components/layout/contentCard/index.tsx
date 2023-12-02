import { Link } from "react-router-dom";
import { MoviesInterface } from "../../../interfaces/movies";

interface ContentCardProps {
  movies: MoviesInterface[];
  title: string;
}
const ContentCard = ({ movies, title }: ContentCardProps) => {
  return (
    <>
      <h1 className="text-xl font-bold my-4">{title}</h1>
      <div className="grid  grid-auto-rows grid-cols-2  md:grid-cols-4 gap-4">
        {movies?.map((movie) => {
          return (
            <Link to={`/pelicula/${movie.id}`} key={movie.id}>
              <img
                className="bg-gray-400 rounded-xl"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                width={200}
                alt={movie.title ? movie.title : movie.original_title}
              />
              <p>{movie.title ? movie.title : movie.original_title}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default ContentCard;
