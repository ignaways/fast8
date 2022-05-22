import SearchBar from "./SearchBar";
import ButtonAdd from "./ButtonAdd";

const Title = () => {
  return (
    <div className="md:flex flex-row md:px-10 px-8 py-5 shadow-lg mb-5 bg-white items-center">
      <div className="basis-1/2">
        <div className="text-teal-500 font-bold text-3xl">PERSONNEL LIST</div>
        <div className="text-gray-500 font-medium text-xl mb-3 md:mb-0">List of all personnels</div>
      </div>
      <div className="basis-1/2">
        <div className="text-center font-light md:flex items-center md:justify-end">
          <form className="md:flex flex-col md:flex-row w-3/4 w-full md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <SearchBar />
            <ButtonAdd />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Title;
