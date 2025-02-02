import { IoCafeOutline, IoSettingsOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import user from "../../assets/men.png";

import { IoIosRestaurant } from "react-icons/io";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router-dom";
import UseAuthUserState from "../../hooks/UseAuthUserState";
import { formatDate } from "../../hooks/FormateDate";

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
  const { user } = UseAuthUserState();
  console.log(user.user);

  const location = useLocation();
  return (
    <aside className="bg-white boxShadow rounded-md " id="update-profile">
      {/* Top Section with User Info */}

      {/* Profile Header */}
      <div className="relative w-full">
        {/* Cover Photo */}
        <div
          className="h-[350px] bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url(https://codilime.com/img/an-introduction-to-low-level-programming.jpg)",
          }}
        ></div>

        {/* Auth User Information */}
        <div className="absolute left-1/2 top-[65%] sm:top-[75%] transform -translate-x-1/2 -translate-y-1/2 w-[90%]   text-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center">
          {/* Left Section: Profile Photo & Details */}
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="https://srdreamit.com/front/custom/img/profile.png"
                alt={user?.user?.name || "user"}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h5 className="text-lg sm:text-xl font-semibold">
                {user?.user?.name || "Full Name"}
              </h5>
              <ul className="mt-2 space-y-1 text-gray-300 text-sm">
                <li className="flex items-center">
                  <i className="feather-user mr-2"></i> @
                  {user?.user?.username || "username"}
                </li>
                <li className="flex items-center">
                  <i className="feather-inbox mr-2"></i>{" "}
                  {user?.user?.email || "email@example.com"}
                </li>
                <li className="flex items-center">
                  <i className="feather-phone mr-2"></i>{" "}
                  {user?.user?.phone || "000-000-0000"}
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Additional Details */}
          <div className="mt-4 sm:mt-0">
            <ul className="text-gray-300 text-sm">
              <li>IP Address: </li>
              <li>
                User Type:{" "}
                <span className="capitalize">
                  {user?.user?.isAdmin ? "Admin" : "User"}
                </span>
              </li>
            </ul>
          </div>
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
