import { IoMdHome, IoIosPeople, IoMdCalendar } from "react-icons/io";
import logo from "./assets/gadjian_logo.png";
// import { NavLink } from "react-router-dom";
import { useState } from "react";
const SideBar = () => {
  const [isActive, setIsActive] = useState(false);

  function toogle() {
    setIsActive(true);
  }
  function toogleClose() {
    setIsActive(false);
  }

  return (
    <div className="relative bg-white">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 md:h-screen">
          <div className="mr-2 flex md:hidden p-5 ">
            {!isActive && (
              <button onClick={toogle} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center  rounded-md focus:outline-none">
                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            )}
            {isActive && (
              <button onClick={toogleClose} className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center rounded-md focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-10" viewBox="3 0 18 22">
                  <path d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z" opacity=".35"></path>
                  <path d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"></path>
                  <path d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"></path>
                </svg>
              </button>
            )}
            <img className="h-12 ml-5" src={logo} alt="logo" />
            <img alt="profil" src="https://randomuser.me/api/portraits/women/66.jpg" className="ml-32 object-cover rounded-full h-12 w-12 " />
          </div>
          {isActive && (
            <>
              <div className="md:hidden">
                <nav className=" px-6 ">
                  <div className="hover:text-teal-500 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg font-bold text-teal-500">
                    <IoMdHome size="22" />
                    <span className="mx-2 text-lg font-normal hover:text-teal-500 font-bold hover:cursor-pointer">Beranda</span>
                    <span className="flex-grow text-right"></span>
                  </div>
                  <div className="hover:text-teal-500 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-800 dark:text-gray-100 rounded-lg">
                    <IoIosPeople size="22" />
                    <span className="mx-2 text-lg font-normal hover:text-teal-500 font-bold hover:cursor-pointer">Personal List</span>
                    <span className="flex-grow text-right"></span>
                  </div>
                  <div className="hover:text-teal-500 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg">
                    <IoMdCalendar size="22" className="hover:cursor-pointer" />
                    <span className="mx-2 text-lg font-normal hover:text-teal-500 font-bold hover:cursor-pointer">Daily Attendance</span>
                    <span className="flex-grow text-right"></span>
                  </div>
                </nav>
              </div>
            </>
          )}

        <div className="hidden md:block">
          <div className="flex items-center justify-start mx-6 mt-10">
            <img className="h-10" src={logo} alt="logo" />
          </div>
          <nav className="mt-10 px-6 ">
            <div className="hover:text-teal-500 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg font-bold text-teal-500">
              <IoMdHome size="22" />
              <span className="mx-2 text-lg font-normal hover:text-teal-500 font-bold hover:cursor-pointer">Beranda</span>
              <span className="flex-grow text-right"></span>
            </div>
            <div className="hover:text-teal-500 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-800 dark:text-gray-100 rounded-lg">
              <IoIosPeople size="22" />
              <span className="mx-2 text-lg font-normal hover:text-teal-500 font-bold hover:cursor-pointer">Personal List</span>
              <span className="flex-grow text-right"></span>
            </div>
            <div className="hover:text-teal-500 flex items-center p-2 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-600 dark:text-gray-400 rounded-lg">
              <IoMdCalendar size="22" className="hover:cursor-pointer" />
              <span className="mx-2 text-lg font-normal hover:text-teal-500 font-bold hover:cursor-pointer">Daily Attendance</span>
              <span className="flex-grow text-right"></span>
            </div>
          </nav>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
