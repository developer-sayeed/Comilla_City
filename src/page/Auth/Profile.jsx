import {
  IoCafeOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import user from "../../assets/men.png";

import { IoIosLogOut, IoIosRestaurant } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <aside className="bg-white boxShadow rounded-md " id="update-profile">
      {/* Top Section with User Info */}
      <div className="bg-gray-100 p-4 flex items-center justify-between rounded-t-md">
        <div className="flex items-center gap-3">
          {/* User Image */}
          <img
            src={user}
            alt="User"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-medium text-gray-700">
              Abu Sayeed Riday
            </p>
            <p className="text-sm text-gray-500">Software Developer</p>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className="container flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="mt-6 px-[20px] sm:w-[20%] w-full  shadow-lg  bg-white">
          <div className="flex flex-col gap-2">
            {/* Update Profile */}
            <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <FaRegUser className="text-xl text-gray-500" />
              <Link
                smooth
                to={"/me/update-profile#updateProfile"}
                className="text-lg font-medium text-gray-500"
              >
                Update Profile
              </Link>
            </div>

            {/* My Shop */}
            <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <CiShop className="text-xl text-gray-500" />
              <Link
                to={"/me/my-shop"}
                className="text-lg font-medium text-gray-500"
              >
                My Shop
              </Link>
            </div>

            {/* My Restaurant */}
            <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <IoIosRestaurant className="text-xl text-gray-500" />
              <Link
                to={"/me/my-restaurant"}
                className="text-lg font-medium text-gray-500"
              >
                My Restaurant
              </Link>
            </div>

            {/* My Cafe */}
            <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <IoCafeOutline className="text-xl text-gray-500" />
              <Link
                to={"/me/my-cafe"}
                className="text-lg font-medium text-gray-500"
              >
                My Cafe
              </Link>
            </div>

            {/* Notification */}
            <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <IoNotificationsOutline className="text-xl text-gray-500" />
              <Link
                to={"/me/notification"}
                className="text-lg font-medium text-gray-500"
              >
                Notification
              </Link>
            </div>

            {/* Setting */}
            <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <IoSettingsOutline className="text-xl text-gray-500" />
              <Link
                to={"/me/setting"}
                className="text-lg font-medium text-gray-500"
              >
                Setting
              </Link>
            </div>

            {/* Logout */}
            <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
              <IoIosLogOut className="text-xl text-gray-500" />
              <Link to={"/"} className="text-lg font-medium text-gray-500">
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Outlet (Desktop Only) */}
        <div className=" mt-6 px-[20px] w-full sm:w-[80%] transition-all duration-500 ease-in-out">
          <Outlet />
        </div>
      </div>
    </aside>
  );
};

export default ProfilePage;
