import Banners from "../../components/common/banners";
import FilterMenu from "../../components/common/filterMenu";
import ContentCard from "../../components/layout/contentCard";
import Header from "../../components/layout/header";

const Home = () => {
  return (
    <div className="flex w-full h-screen bg-[#262A2E] text-white ">
      <Header />
      <div className=" w-[850px] h-screen p-4">
        <Banners />
        <ContentCard />
      </div>
      <FilterMenu />
    </div>
  );
};

export default Home;
