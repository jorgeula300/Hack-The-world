import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [searchTex, setSearchTex] = useState("");
  const history = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTex) {
      history(`/search/movie?&query=${searchTex}`);
      setSearchTex("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center bg-[#212121] w-[80%] h-max rounded-xl pr-4 mr-3"
    >
      <button className="text-xl p-3">
        <IoSearchSharp />
      </button>
      <input
        type="text"
        value={searchTex}
        onChange={(e) => setSearchTex(e.target.value)}
        className="bg-transparent text-white border-none outline-none w-full"
        placeholder="Buscar por películas, series, entre otros"
      />
    </form>
  );
};
export default Search;
