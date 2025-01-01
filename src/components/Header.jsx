import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo/dijital union logo.png";
import { categoriesMenu } from "./Categories_Menu/CategoriesMenu";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu Function
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="py-3 fixed z-50 top-0 w-full md:w-[90%] mx-auto !bg-[#fff] shadow-lg">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* Logo */}
          <Link to="/">
            <img className="h-[45px]" src={logo} alt="Lws" />
          </Link>

          {/* Toggle Button */}
          <button
            onClick={toggleMenu}
            className={`p-3 rounded-md transition-all duration-300 ${
              isOpen ? " text-blue-900" : " text-black"
            }`}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 overflow-y-auto`}
      >
        <div className="p-5  shadow-lg rounded-xl max-w-sm mx-auto md:max-w-md lg:max-w-lg">
          <h2 className="text-2xl font-extrabold mb-4 text-center text-blue-900 border-b-2 border-blue-400 pb-2">
            📋 Menu
          </h2>
          <ul className="space-y-4">
            {categoriesMenu.map((item) => (
              <li key={item.href} className="group">
                <Link
                  to={item.href}
                  className="
            block text-gray-700 text-lg font-semibold 
            group-hover:text-white group-hover:bg-blue-600 
            group-hover:pl-4 transition-all duration-300 
            rounded-md p-2 shadow-sm"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
