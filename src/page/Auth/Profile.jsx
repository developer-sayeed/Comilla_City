import { IoCafeOutline, IoSettingsOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import user from "../../assets/men.png";

import { IoIosRestaurant } from "react-icons/io";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router-dom";

const ProfilePage = () => {
  const menuItems = [
    { icon: FaRegUser, name: "Profile", path: "/me" },
    {
      icon: FaRegUserCircle,
      name: "Update Profile",
      path: "/me/update-profile",
    },
    { icon: CiShop, name: "My Shop", path: "/me/my-shop" },
    { icon: IoIosRestaurant, name: "My Restaurant", path: "/my-restaurant" },
    { icon: IoCafeOutline, name: "My Cafe", path: "/me/my-cafe" },
    { icon: IoSettingsOutline, name: "Setting", path: "/me/setting" },
  ];
  const location = useLocation();
  return (
    <aside className="bg-white boxShadow rounded-md " id="update-profile">
      {/* Top Section with User Info */}

      {/* Profile Header */}
      <div className="flex items-center flex-col sm:flex-row space-x-2 bg-gray-50 p-3 shadow-sm ">
        <img
          src="https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg"
          alt="Profile Picture"
          className="w-20 object-cover h-20 rounded-full border-4 border-[#0FABCA] shadow-lg"
        />
        <div className="text-center sm:text-left">
          <h2 className="sm:text-3xl text-2xl font-semibold text-gray-900 uppercase">
            Abu Sayeed Riday
          </h2>
          <p className="text-lg text-[#0FABCA]">@abusayeed0022</p>
          <p className="text-sm text-gray-400">Joined on: January 1, 2022</p>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="container flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="mt-6 px-[20px] sm:w-[20%] w-full  shadow-lg  ">
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              // Determine if the current path matches the menu item path
              const isActive = location.pathname === item.path;

              return (
                <Link
                  to={item.path}
                  key={index}
                  className={`flex items-center gap-2 p-2 rounded-md cursor-pointer 
                  ${
                    isActive
                      ? "bg-[#0FABCA] text-white hover:bg-[#0FABCA] hover:text-white"
                      : "text-gray-500 hover:bg-cyan-500 hover:text-white"
                  }`}
                >
                  <Icon className="text-xl" />

                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Outlet (Desktop Only) */}
        <div className="  mt-6 px-[20px] w-full sm:w-[80%] transition-all duration-500 ease-in-out">
          <Outlet />
        </div>
      </div>
    </aside>
  );
};

export default ProfilePage;
