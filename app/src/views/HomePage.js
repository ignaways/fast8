import ButtonPage from "../components/ButtonPage";
import Title from "../components/Title";
import Card from "../components/Card";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <>
      <div className="xl:max-w-screen-2xl xl:mx-auto ">
        <div className="xl:flex justify-center">
          <div className="xl:flex-initial w-64">
            <SideBar />
          </div>

          <div className="">
            <div className="hidden md:block">
              <div className="flex text-lg items-center justify-end p-5">
                Hallo,
                <div className="ml-1 font-semibold text-teal-500"> gadjian User </div>
                <img alt="profil" src="https://randomuser.me/api/portraits/women/66.jpg" className="ml-3 object-cover rounded-full h-12 w-12 " />
              </div>
            </div>

            <div className="bg-gray-100 p-10">
              <Title />
              <Card />
              <ButtonPage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
