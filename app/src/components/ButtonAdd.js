const ButtonAdd = () => {
  return (
    <>
      <button className="hidden md:block flex-shrink-0 px-4 py-3 text-base font-semibold text-white bg-teal-500 shadow-md hover:bg-teal-600 " type="submit" href="#">
        ADD PERSONNEL +
      </button>
      <button className=" md:hidden w-full flex-shrink-0 px-4 py-3 text-base font-semibold text-white bg-teal-500 shadow-md hover:bg-teal-600 " type="submit" href="#">
        ADD PERSONNEL +
      </button>
    </>
  );
};

export default ButtonAdd;
