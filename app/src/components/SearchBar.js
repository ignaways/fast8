import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className=" relative ">
      <IoMdSearch size="25px" className="absolute top-1/4 left-[8px] text-teal-500" />
      <input type="text" id='"form-subscribe-Subscribe' className=" border-transparent flex-1 appearance-none border border-gray-300 w-full py-3 px-4 pl-10 bg-text-teal-400 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Find Personnels" />
    </div>
  );
};

export default SearchBar;
