import React, { useState } from "react";

// react icons
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import {
  IoLocationOutline,
  IoNotificationsOutline,
  IoSearch,
} from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { GoHome, GoProjectSymlink } from "react-icons/go";
import { CiBank, CiLogout } from "react-icons/ci";
import { BsBuildings, BsThreeDots } from "react-icons/bs";
import { Link, Outlet } from "react-router";
import { PiBowlFoodLight, PiStudentLight } from "react-icons/pi";
import { MdDirectionsBike, MdOutlineHotel } from "react-icons/md";
import { FaCarAlt, FaFireExtinguisher, FaUserTie } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

const AdminSideBar = () => {
  // Separate state for each dropdown
  const [isEducationDropdownOpen, setEducationDropdownOpen] = useState(false);
  const [isHealthDropdownOpen, setHealthDropdownOpen] = useState(false);

  // Function to toggle dropdown and close other dropdowns
  const toggleDropdown = (dropdown) => {
    if (dropdown === "education") {
      setEducationDropdownOpen(!isEducationDropdownOpen);
      setHealthDropdownOpen(false); // Close health dropdown
    } else if (dropdown === "health") {
      setHealthDropdownOpen(!isHealthDropdownOpen);
      setEducationDropdownOpen(false); // Close education dropdown
    }
  };

  return (
    <>
      <div className="flex">
        <aside className="bg-slate-100 boxShadow rounded-md transition-all duration-300 ease w-[20%] shadow-lg fixed h-screen top-0 left-0 overflow-y-auto overflow-x-hidden">
          <div className="mt-5 px-[20px] transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-between">
              <img
                src="https://i.ibb.co/ZHYQ04D/footer-logo.png"
                alt="logo"
                className="w-[130px] cursor-pointer"
              />
            </div>

            {/* search bar */}
            <div className="relative mt-5">
              <input
                className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                placeholder="Search..."
              />
              <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
            </div>
          </div>

          {/* general section */}
          <div className="mt-6 px-[20px] transition-all duration-300 ease-in-out">
            <div className="mt-3 flex flex-col gap-[5px]">
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <Link to={"/admin"} className="flex items-center gap-[8px]">
                  <GoHome className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    ড্যাশবোর্ড
                  </p>
                </Link>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <Link
                  to={"/admin/upzilla"}
                  className="flex items-center gap-[8px]"
                >
                  <IoLocationOutline className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    উপজেলা বা থানা
                  </p>
                </Link>
              </div>
              {/* Education Dropdown */}
              <div
                className={`flex flex-col hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200`}
                onClick={() => toggleDropdown("education")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[8px]">
                    <PiStudentLight className="text-[1.3rem] text-gray-500" />
                    <p className="text-[1rem] font-[400] text-gray-500">
                      শিক্ষা প্রতিষ্ঠান
                    </p>
                  </div>
                  <IoIosArrowDown
                    className={`${
                      isEducationDropdownOpen ? "rotate-[180deg]" : "rotate-0"
                    } transition-all duration-300 text-[1rem] text-gray-500`}
                  />
                </div>
                {isEducationDropdownOpen && (
                  <ul className="my-3 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] text-gray-500">
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="/admin/primary_school">প্রাথমিক বিদ্যালয়</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">উচ্চ বিদ্যালয়</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">কলেজ</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">বিশ্ববিদ্যালয়</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">মাদ্রাসা</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">কোচিং সেন্টার</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">প্রাইভেট শিক্ষক</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">এতিমখানা</Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* Health Dropdown */}
              <div
                className={`flex flex-col hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200`}
                onClick={() => toggleDropdown("health")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[8px]">
                    <GoProjectSymlink className="text-[1.3rem] text-gray-500" />
                    <p className="text-[1rem] font-[400] text-gray-500">
                      স্বাস্থ্য সেবা
                    </p>
                  </div>
                  <IoIosArrowDown
                    className={`${
                      isHealthDropdownOpen ? "rotate-[180deg]" : "rotate-0"
                    } transition-all duration-300 text-[1rem] text-gray-500`}
                  />
                </div>
                {isHealthDropdownOpen && (
                  <ul className="my-3 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] text-gray-500">
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="/admin/doctor">ডাক্তার</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">বিশেষজ্ঞ</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">হাসপাতাল</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">অ্যাম্বুলেন্স</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">ডায়াগনস্টিক </Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">স্বাস্থ্য পরামর্শ</Link>
                    </li>
                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">
                      <Link to="">রক্তদাতা</Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <FaFireExtinguisher className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    ফায়ার সার্ভিস
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <MdDirectionsBike className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    কুরিয়ার সার্ভিস
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <MdOutlineHotel className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">হোটেল</p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <GrUserWorker className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    মিস্ত্রি
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <IoSearch className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">চাকরি</p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <FaUserTie className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    উদ্যোক্তা
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <CiBank className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">ব্যাংক</p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <PiBowlFoodLight className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    রেস্টুরেন্ট
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <BsBuildings className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    ফ্ল্যাট ও জমি
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <FaCarAlt className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    গাড়ি ভাড়া
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* setting section */}
          <div className="mt-6 px-[20px] border-t border-gray-200">
            <div className="mt-3 flex flex-col gap-[5px]">
              <div className="flex items-center justify-between hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-[8px]">
                  <IoNotificationsOutline className="text-[1.3rem] text-gray-500" />
                  <p className="text-[1rem] font-[400] text-gray-500">
                    Notification
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* profile section */}
          <div className="bg-gray-100 py-3 px-[20px] flex items-center justify-between mt-10">
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

            <div className="relative group">
              <BsThreeDots className="text-[1.2rem] text-gray-500 cursor-pointer" />

              <ul className="translate-y-[20px] opacity-0 z-[-1]  group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute bottom-0 right-[30px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px]">
                <li className="flex items-center gap-[7px] text-[0.9rem] text-gray-600 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
                  <RiAccountCircleLine />
                  Profile
                </li>
                <li className="flex items-center gap-[7px] text-[0.9rem] text-red-500 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
                  <CiLogout />
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Outlet (Desktop Only) */}
        <div className="mt-6 px-[20px] w-full  bg-white ml-[20%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
