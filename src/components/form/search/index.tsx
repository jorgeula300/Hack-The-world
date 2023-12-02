import { IoSearchSharp } from "react-icons/io5";
const Search = () => {
  return (
    <form className="flex flex-row items-center bg-[#212121] w-[80%] h-max rounded-xl pr-4 mr-3">
      <button className="text-xl p-3">
        <IoSearchSharp />
      </button>
      <input
        type="text"
        className="bg-transparent text-white border-none outline-none w-full"
        placeholder="Buscar por películas, series, entre otros"
      />
    </form>
  );
};
export default Search;
