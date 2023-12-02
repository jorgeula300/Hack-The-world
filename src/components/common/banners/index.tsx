import { MoviesInterface } from "../../../interfaces/movies";
import { FaPlay } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { IMAGE_PATH } from "../../../consts";
import Modal from "../../layout/modal";
import styles from "./styles.module.css";
import { API_KEY } from "../../../consts";
import { useEffect, useState, useRef} from "react";
import YouTube from "react-youtube";
import { MdErrorOutline } from "react-icons/md";

interface BannersProsp {
  movie?: MoviesInterface;
}
const Banners = ({ movie }: BannersProsp) => {
  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState({});
  const [pause, setPause] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieData = async () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${API_KEY}&append_to_response=videos`
      )
        .then((rest) => rest.json())
        .then((data) => {
          // setLoading(false);
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

    if (trailer && !open) {
      setPause(true);
    } else {
      setPause(false);
    }

    return () => {
      window.removeEventListener("click", handlesClick);
    };
  }, [movie, open, pause]);

  console.log(trailer);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
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
        <button
          className="flex items-center gap-2 bg-[#e8e8e81b]
         text-white px-4 py-2 rounded-md hover:bg-white hover:text-black"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
        >
          <FaPlay />
          Intro
        </button>
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

        <button className="flex items-center gap-2 bg-[#e8e8e81b] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
          <FaInfoCircle />
          Mas Información
        </button>
      </section>
    </div>
  );
};
export default Banners;
