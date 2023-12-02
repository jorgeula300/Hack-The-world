import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, IMAGE_PATH } from "../../../consts";
import { FaPlay } from "react-icons/fa";
import Search from "../../form/search";
import { BsBell } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import YouTube from "react-youtube";
import Modal from "../modal";
import styles from "./styles.module.css";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>();
  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState({});
  const [pause, setPause] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getMovieData = async () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
      )
        .then((rest) => rest.json())
        .then((data) => {
          // setLoading(false);
          setMovie(data);
          if (data.videos && data.videos.results) {
            const trailerData = data.videos.results.find((video) =>
              video.name === "Official Trailer"
                ? video.name === "Official Trailer"
                : video
            );
            setTrailer(trailerData);
          }
        });
    };
    const handlesClick = (event: MouseEvent) => {
      if (!refDiv.current?.contains(event.target as Node)) {
        setOpen(false);
        console.log("click");
      }
    };

    open && window.addEventListener("click", handlesClick);
    getMovieData();

    window.scrollTo(0, 0);

    if (trailer && !open) {
      setPause(true);
    } else {
      setPause(false);
    }

    return () => {
      window.removeEventListener("click", handlesClick);
      window.scrollTo(0, 0);
    };
  }, [movie, open, pause]);
  console.log(movie);

  return (
    <div className=" flex flex-col gap-4 text-white pb-10 px-4 md:pl-[270px]">
      <section className="fixed top-0 flex flex-row justify-between w-[96%] p-4 py-3 bg-[#262A2E] md:left-[250px] md:w-[80.2%]">
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
      <section
        style={{
          backgroundImage: `url(${IMAGE_PATH}${
            movie?.backdrop_path ? movie.backdrop_path : movie?.poster_path
          })`,
        }}
        className="flex justify-center items-center w-full h-[370px] bg-cover bg-center bg-no-repeat rounded-xl bg-slate-400 mt-20"
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="flex justify-center items-center p-6 text-4xl bg-[#e8e8e845] text-white rounded-[50%] hover:bg-white hover:text-black"
        >
          <FaPlay />
        </button>
      </section>
      <section className="flex flex-row justify-between ">
        <h1 className="text-2xl font-bold">{movie?.title}</h1>
      </section>
      <section>
        <p className="text-base max-w-[750px] ">{movie?.overview}</p>
      </section>
      <section className="flex flex-row gap-4">
        <p className="text-base">Popularity: {movie?.popularity}</p>
        <p className="text-base">Release Date: {movie?.release_date}</p>
      </section>
      <section className="flex flex-row gap-4">
        <p className="text-base">Vote Average: {movie?.vote_average}</p>
        <p className="text-base">Vote Count: {movie?.vote_count}</p>
      </section>
      <section className="flex flex-row gap-4 border-b pb-4">
        <p className="text-base">
          Original Language: {movie?.original_language}
        </p>
        <p className="text-base">Original Title: {movie?.original_title}</p>
      </section>
      <section className="flex flex-row gap-4 border-b pb-4">
        <p className="text-base">Genre: {movie?.genre_ids}</p>
        <p className="text-base">Status: {movie?.status}</p>
      </section>
      <section className="flex flex-row gap-4 border-b pb-4">
        <p className="text-base">Budget: {movie?.budget}</p>
        <p className="text-base">Revenue: {movie?.revenue}</p>
      </section>
      <section className="flex flex-row gap-4">
        <p className="text-base">Homepage: {movie?.homepage}</p>
      </section>

      <Modal open={open}>
        {trailer && !pause ? (
          <div
            ref={refDiv}
            className={styles.conten_trailer}
            style={{ position: "relative" }}
          >
            <button
              className={styles.modal_cerrar}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              X
            </button>
            <YouTube
              videoId={trailer.key}
              className={styles.reproductor}
              opts={{
                height: "100%",
                width: "100%",
                onPause: pause ? "noop" : "defaults",
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  cc_load_policy: 0,
                },
              }}
            />
          </div>
        ) : (
          <div className={styles.message_trailer}>
            <button
              className={styles.modal_cerrar}
              onClick={(e) => e.stopPropagation()}
            >
              X
            </button>
            <p className={styles.icon}>
              <MdErrorOutline />
            </p>
            <div>
              <span>El video no está disponible</span>
              <p>Este video no está disponible</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
export default Detail;
