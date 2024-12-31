import React, { useState } from "react";
import { FaHome, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router";

function FooterMenu() {
  // State to track active menu item
  const [active, setActive] = useState("home");

  return (
    <div className="footer-menu fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 sm:hidden">
      <div className="flex justify-around items-center py-3">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col justify-center items-center text-gray-600 hover:text-blue-500 ${
            active === "home" ? "text-blue-600" : ""
          }`}
          onClick={() => setActive("home")}
        >
          <FaHome className="text-2xl" />
          <div className="text-xs mt-1">Home</div>
        </Link>

        {/* Contact */}
        <Link
          to="#"
          className={`flex flex-col justify-center items-center text-gray-600 hover:text-blue-500 ${
            active === "contact" ? "text-blue-600" : ""
          }`}
          onClick={() => setActive("contact")}
        >
          <FaPhoneAlt className="text-2xl" />
          <div className="text-xs mt-1">Contact</div>
        </Link>

        {/* Profile */}
        <Link
          to={"/me"}
          className={`flex flex-col justify-center items-center text-gray-600 hover:text-blue-500 ${
            active === "profile" ? "text-blue-600" : ""
          }`}
          onClick={() => setActive("profile")}
        >
          <FaUser className="text-2xl" />
          <div className="text-xs mt-1">Profile</div>
        </Link>
      </div>
    </div>
  );
}

export default FooterMenu;
