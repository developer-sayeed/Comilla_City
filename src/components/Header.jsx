import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/dijital union logo.png";
import { categoriesMenu } from "./Categories_Menu/CategoriesMenu";
import { CiMenuFries } from "react-icons/ci";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  // Toggle Menu Function
  const toggleMenu = () => setIsOpen(!isOpen);

  const isLogin = false;

  const primarymenu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Hospitals",
      path: "/hospital",
    },
    {
      title: "cafes",
      path: "/cafes",
    },
    {
      title: "Restaurant",
      path: "/restaurant",
    },
    {
      title: "institutions",
      path: "/educational-institutions",
    },
    {
      title: "Shop",
      path: "/shopping",
    },
    {
      title: "Contact us",
      path: "/contact",
    },
  ];
  return (
    <nav className="flex justify-between items-center  py-3 px-3 fixed z-50 top-0 w-full md:w-[1200px] mx-auto !bg-[#fff] shadow-lg">
      <Link to="/">
        <img src={logo} alt="logo" className="w-40 " />
      </Link>
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
        {primarymenu.map((item) => {
          return (
            <li
              key={item.title}
              className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize"
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>

      {/* Login User Avater */}
      {isLogin && (
        <div className={`items-center gap-[10px] sm:flex hidden`}>
          <div className="flex items-center gap-[10px]">
            <img
              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?"
              alt="avatar"
              className="w-[30px] h-[30px] cursor-pointer rounded-full object-cover"
            />
            <Link
              to={"/me"}
              className={` text-[0.9rem] text-gray-800 font-[500]`}
            >
              Abu Sayeed riday
            </Link>
          </div>
          <CiMenuFries
            className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>
      )}

      {/* Logout User Button */}
      {!isLogin && (
        <div className="items-center gap-[10px] flex">
          <Link
            to={"/login"}
            className="rounded-md border border-[#0FABCA]  text-[#0FABCA] hover:bg-[#0FABCA] hover:border-[#0FABCA] hover:text-white transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer sm:flex hidden"
          >
            Sign in
          </Link>
          <Link
            to={"/register"}
            className="rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer sm:flex hidden"
          >
            Sign up
          </Link>

          <CiMenuFries
            className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>
      )}

      {/* Off canvus */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 overflow-y-auto`}
      >
        <div className="p-5  shadow-lg rounded-xl max-w-sm mx-auto md:max-w-md lg:max-w-lg">
          <h2 className="text-2xl font-extrabold mb-4 text-center text-[#0FABCA] border-b-2 border-[#0FABCA] pb-2">
            📋 Categories
          </h2>
          <ul className="space-y-4">
            {categoriesMenu.map((item) => (
              <li key={item.href} className="group">
                <Link
                  to={item.href}
                  className="
            block text-gray-700 text-lg font-semibold
            group-hover:text-white group-hover:bg-[#0FABCA]
            group-hover:pl-4 transition-all duration-300
             p-2 shadow-sm border-b-[1px] border-[#eee]"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
