import React from "react";
import { FaHome, FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function FooterMenu() {
  // Get current location
  const location = useLocation();

  // Determine active menu based on route
  const getActiveClass = (path) =>
    location.pathname === path ? "text-blue-600" : "text-gray-600";

  return (
    <div className="footer-menu fixed bottom-0 left-0 w-full bg-slate-100 shadow-lg z-50 sm:hidden">
      <div className="flex justify-around items-center py-3">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col justify-center items-center hover:text-blue-500 ${getActiveClass(
            "/"
          )}`}
        >
          <FaHome className="text-2xl" />
          <div className="text-xs mt-1">Home</div>
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          className={`flex flex-col justify-center items-center hover:text-blue-500 ${getActiveClass(
            "/contact"
          )}`}
        >
          <FaPhoneAlt className="text-2xl" />
          <div className="text-xs mt-1">Contact</div>
        </Link>

        {/* Profile */}
        <Link
          to="/me"
          className={`flex flex-col justify-center items-center hover:text-blue-500 ${getActiveClass(
            "/me"
          )}`}
        >
          <FaUser className="text-2xl" />
          <div className="text-xs mt-1">Profile</div>
        </Link>
      </div>
    </div>
  );
}

export default FooterMenu;
