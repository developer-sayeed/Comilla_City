/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const DashboardMenuItem = ({
  icon: Icon,
  title,
  link,
  isDropdown,

  isActive, // New prop to manage active state
}) => {
  return (
    <div
      className={`group flex flex-col rounded-md cursor-pointer transition-all duration-200 ${
        isDropdown ? "hover:bg-gray-50" : "hover:bg-[#0FABCA] hover:text-white"
      } ${isActive ? "bg-[#0FABCA] text-white" : "text-gray-600"} p-2 mb-1`} // Added padding and margin
    >
      {/* Main Menu Item */}
      <Link to={link || "#"} className="flex items-center gap-[5px] w-full">
        <Icon
          className={`text-[1.4rem] ${
            isActive ? "text-white" : "text-gray-600 group-hover:text-white"
          } transition-all duration-200`}
        />
        <p className="text-[14px] font-medium group-hover:text-white transition-all duration-200">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default DashboardMenuItem;
