import React, { useState } from "react";
import logo from "../../../assets/logo/dijital union logo.png";

// React icons
import { IoIosSearch } from "react-icons/io";
import {
  IoLocationOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

import { CiLogout } from "react-icons/ci";

import { Outlet, useLocation } from "react-router";

import DashboardMenuItem from "../../../components/DashboardMenuItem/DAshboardMenuItem";
import { GoHomeFill, GoProjectSymlink } from "react-icons/go";
import { PiStudentLight } from "react-icons/pi";
import { FaFireExtinguisher, FaHospital } from "react-icons/fa";
import { MdDirectionsBike, MdOutlineHotel } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const AdminSideBar = () => {
  // Separate state for each dropdown
  const [activeMenu, setActiveMenu] = useState(null); // Track active menu
  const location = useLocation(); // Get current route location

  // Update activeMenu based on the route
  React.useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  return (
    <>
      {/* Top Header */}
      <header className="bg-white shadow-md px-5 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50 h-[64px]">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-[130px] cursor-pointer" />
          <div className="relative">
            <input
              className="px-4 py-2 border border-border rounded-md pl-[40px] outline-none focus:border-primary"
              placeholder="Search..."
            />
            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <IoNotificationsOutline className="text-[1.5rem] text-gray-500 cursor-pointer" />
          <div className="relative group">
            <div className="flex items-center gap-[10px]">
              <img
                src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1724478146~exp=1724481746~hmac=7de91a5b9271ecb4309974122ae6f47d71c01f7fff840c69755f781a03d9e340&w=996"
                alt="avatar"
                className="w-[30px] h-[30px] cursor-pointer rounded-full object-cover"
              />
              <h3 className="text-[0.9rem] text-gray-800 font-[500]">
                Jhon Deo
              </h3>
            </div>
            <ul className="absolute right-0 mt-2 w-[150px] bg-white shadow-lg rounded-md hidden group-hover:block">
              <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                <RiAccountCircleLine />
                Profile
              </li>
              <li className="flex items-center gap-2 p-2 text-red-500 hover:bg-gray-100 cursor-pointer">
                <CiLogout />
                Logout
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex bg-white mt-14 ">
        <aside className="bg-white boxShadow rounded-md transition-all duration-300 ease w-[20%] shadow-lg fixed h-screen top-0 left-0 overflow-y-auto overflow-x-hidden mt-14 pb-20">
          {/* General Section */}
          <div className="mt-6 px-[20px] transition-all duration-300 ease-in-out">
            <DashboardMenuItem
              icon={GoHomeFill}
              title="Dashboard"
              link="/admin/overview"
              isActive={activeMenu === "/admin/overview"}
              onClick={() => setActiveMenu("/admin/overview")}
            />
            <DashboardMenuItem
              icon={IoLocationOutline}
              title="Thana List"
              link="/admin/upzilla"
              isActive={activeMenu === "/admin/upzilla"}
              onClick={() => setActiveMenu("/admin/upzilla")}
            />
            <DashboardMenuItem
              icon={PiStudentLight}
              title="Educational Institutions"
              link="/admin/educational-institutions"
              isActive={activeMenu === "/admin/educational-institutions"}
              onClick={() => setActiveMenu("/admin/educational-institutions")}
            />
            <DashboardMenuItem
              icon={FaUserDoctor}
              title="Doctor"
              link="/admin/doctor"
              isActive={activeMenu === "/admin/doctor"}
              onClick={() => setActiveMenu("/admin/doctor")}
            />
            <DashboardMenuItem
              icon={FaHospital}
              title="Hospital"
              link="/admin/hospital"
              isActive={activeMenu === "/admin/hospital"}
              onClick={() => setActiveMenu("/admin/hospital")}
            />
            <DashboardMenuItem
              icon={FaFireExtinguisher}
              title="Fire Service"
              link="#"
              isActive={activeMenu === "fireService"}
              onClick={() => setActiveMenu("fireService")}
            />
            <DashboardMenuItem
              icon={MdDirectionsBike}
              title="Courier Service"
              link="#"
              isActive={activeMenu === "courierService"}
              onClick={() => setActiveMenu("courierService")}
            />
            <DashboardMenuItem
              icon={MdOutlineHotel}
              title="Hotel & Resorts"
              link="#"
              isActive={activeMenu === "hotel"}
              onClick={() => setActiveMenu("hotel")}
            />
          </div>

          {/* Setting Section */}
          <div className="mt-6 px-[20px] border-t border-gray-200">
            <div className="mt-3 flex flex-col gap-[5px]">
              <DashboardMenuItem
                icon={IoNotificationsOutline}
                title="Notification"
                link="/admin/notification"
                isActive={activeMenu === "/admin/notification"}
                onClick={() => setActiveMenu("/admin/notification")}
              />
              <DashboardMenuItem
                icon={IoSettingsOutline}
                title="Setting"
                link="/admin/setting"
                isActive={activeMenu === "/admin/setting"}
                onClick={() => setActiveMenu("/admin/setting")}
              />
            </div>
          </div>
        </aside>

        {/* Outlet (Desktop Only) */}
        <div className="mt-6 px-[20px] w-full h-lvh bg-[#f9f9f9] ml-[20%] shadow-lg">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
