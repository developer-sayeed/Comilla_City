import {
  IoCafeOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FiBarChart, FiPieChart } from "react-icons/fi";
import { CiCalendar, CiShop } from "react-icons/ci";
import user from "../../assets/men.png";
import { Link } from "react-router";
import { IoIosLogOut, IoIosRestaurant } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <aside className="bg-white boxShadow rounded-md h-lvh block sm:hidden">
      {/* Top Section with User Info */}
      <div className="bg-gray-100 p-4 flex items-center justify-between rounded-t-md">
        <div className="flex items-center gap-3">
          {/* User Image */}
          <img
            src={user} // Replace with actual user image
            alt="User"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-medium text-gray-700">
              Abu Sayeed Riday
            </p>
            {/* Occupation under the name */}
            <p className="text-sm text-gray-500">Software Developer</p>{" "}
            {/* Replace with actual occupation */}
          </div>
        </div>
      </div>

      {/* general section */}
      <div className="mt-6 px-[20px]">
        <div className="flex flex-col gap-2">
          {/* Update Profile */}
          <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
            <FaRegUser className="text-xl text-gray-500" />
            <Link
              to={"/me/update-profile"}
              className="text-lg font-medium text-gray-500"
            >
              Update Profile
            </Link>
          </div>

          {/* My Shop */}
          <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
            <CiShop className="text-xl text-gray-500" />
            <Link
              to={"/shopping"}
              className="text-lg font-medium text-gray-500"
            >
              My Shop
            </Link>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
            <IoIosRestaurant className="text-xl text-gray-500" />
            <Link to={"/"} className="text-lg font-medium text-gray-500">
              My Restaurant
            </Link>
          </div>

          {/* Goals */}
          <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
            <IoCafeOutline className="text-xl text-gray-500" />
            <Link to={"/"} className="text-lg font-medium text-gray-500">
              My Cafe
            </Link>
          </div>

          {/* Notification */}
          <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
            <IoNotificationsOutline className="text-xl text-gray-500" />
            <Link to={"/"} className="text-lg font-medium text-gray-500">
              Notification
            </Link>
          </div>

          {/* Setting */}
          <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
            <IoSettingsOutline className="text-xl text-gray-500" />
            <Link to={"/"} className="text-lg font-medium text-gray-500">
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
    </aside>
  );
};

export default ProfilePage;
