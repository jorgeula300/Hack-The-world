import { Route, Routes } from "react-router-dom";
import Login from "./page/login/Login";
import SingUp from "./page/singUp/SingUp";
import Home from "./page/home/Home";
import Header from "./components/layout/header";
import Detail from "./components/layout/detail";
import MovieOrSerie from "./page/movieOrSerie";
import FilterMovie from "./components/layout/firterMovies";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/inicio" element={<Home />} />
        <Route
          path="/peliculas"
          element={<MovieOrSerie layout="peliculas" />}
        />
        <Route
          path="/series"
          element={<MovieOrSerie layout="series" />}
        />
        <Route path="/accion" element={<FilterMovie layout="accion" />} />
        <Route path="/comedia" element={<FilterMovie layout="comedia" />} />
        <Route path="/drama" element={<FilterMovie layout="drama" />} />
        <Route path="/fantasia" element={<FilterMovie layout="fantasia" />} />
        <Route path="/romance" element={<FilterMovie layout="romance" />} />
        <Route path="/terror" element={<FilterMovie layout="terror" />} />
        <Route
          path="/documentales"
          element={<FilterMovie layout="documentales" />}
        />
        <Route path="/pelicula/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
