import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/dijital union logo.png";
import { categoriesMenu } from "./Categories_Menu/CategoriesMenu";
import { CiMenuFries } from "react-icons/ci";
function Header() {
  const isLogin = true;

  const location = useLocation(); // Get the current location
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  // Toggle Menu Function
  // const toggleMenu = () => setIsOpen(!isOpen);
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        mobileSidebarOpen
      ) {
        setMobileSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [mobileSidebarOpen]);

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
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg"
                alt="Profile Picture"
                className="w-[50px] object-cover h-[50px] rounded-full border-2 border-[#0FABCA] shadow-lg"
              />
            </div>
            <Link
              to={"/me"}
              className={` text-[0.9rem] text-gray-800 font-[500]`}
            >
              Abu Sayeed riday
            </Link>
          </div>
          <CiMenuFries
            className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer lg:hidden flex"
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
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 overflow-y-auto`}
      >
        <div className="p-5  shadow-lg rounded-xl max-w-sm mx-auto md:max-w-md lg:max-w-lg">
          <h2 className="text-2xl font-extrabold mb-4 text-center text-[#0FABCA] border-b-2 border-[#0FABCA] pb-2">
            📋 Categories
          </h2>
          <ul className="space-y-4">
            {categoriesMenu.map((item) => {
              // Check if the current item is active
              const isActive = location.pathname === item.href;

              return (
                <li key={item.href} className="group">
                  <Link
                    to={item.href}
                    className={`
                block text-lg font-semibold p-2 shadow-sm border-b-[1px] border-[#eee] transition-all duration-300
                ${
                  isActive
                    ? "text-white bg-[#0FABCA]" // Active link styles
                    : "text-gray-700 group-hover:text-white group-hover:bg-[#0FABCA]"
                }
              `}
                    onClick={() => setMobileSidebarOpen(false)} // Close sidebar on link click
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
