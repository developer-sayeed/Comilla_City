import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ items }) => {
  return (
    <ul className="mt-2 ml-6 border-l-2 border-blue-300 pl-3 space-y-1">
      {items.map((item, index) => (
        <li
          key={index}
          className="transition-all duration-200 hover:bg-blue-50 hover:pl-2 rounded-md"
        >
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
