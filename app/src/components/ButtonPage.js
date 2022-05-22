import { useDispatch, useSelector } from "react-redux";
import { setIncrement, setDecrement } from "../store/actions/pageHandler";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

const ButtonPage = () => {
  const { page } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center gap-10">
      {page <= 1 ? (
        <button disabled className="flex items-center text-lg font-bold text-gray-400">
          <IoIosArrowBack size="25px" className="text-gray-400 pt-[2px]" />
          Previous Page
        </button>
      ) : (
        <button className="flex items-center text-lg font-bold hover:text-teal-500" onClick={() => dispatch(setDecrement())}>
          <IoIosArrowBack size="25px" className="pt-[2px]" />
          Previous Page
        </button>
      )}
      {page >= 7 ? (
        <button disabled className="flex items-center text-lg font-bold text-gray-400">
          Next Page <IoIosArrowForward size="25px" className="text-gray-400 pt-[2px]" />
        </button>
      ) : (
        <button className="flex items-center text-lg font-bold hover:text-teal-500"  onClick={() => dispatch(setIncrement())}>
          Next Page <IoIosArrowForward size="25px" className="pt-[2px]" />

        </button>
      )}
    </div>
  );
};

export default ButtonPage;
