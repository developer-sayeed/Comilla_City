import React from "react";

const OverView = () => {
  return (
    <div className="min-h-screen bg-gray-50  sm:py-0 ">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Profile Header */}
        {/* <div className="flex items-center flex-col sm:flex-row space-x-4 mb-3 ">
          <img
            src="https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg"
            alt="Profile Picture"
            className="w-28 object-cover h-28 rounded-full border-4 border-[#0FABCA] shadow-lg"
          />
          <div className="text-center sm:text-left">
            <h2 className="sm:text-3xl text-2xl font-semibold text-[#0FABCA] uppercase">
              Abu Sayeed Riday
            </h2>
            <p className="text-lg text-gray-500">@abusayeed0022</p>
            <p className="text-sm text-gray-400">Joined on: January 1, 2022</p>
          </div>
        </div> */}

        {/* Personal Information Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#0FABCA] mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">Full Name</span>
              <span className="text-gray-600 capitalize">
                Md abu sayeed riday
              </span>
            </div>
            {/* Email */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold ">
                Email Address
              </span>
              <span className="text-gray-600 lowercase">
                abusayeedriday@gmail.com
              </span>
            </div>
            {/* Phone */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">Phone Number</span>
              <span className="text-gray-600">+966-571858601</span>
            </div>
            {/* Education */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">Education</span>
              <span className="text-gray-600">
                Bachelor's in Computer Science
              </span>
            </div>
            {/* Occupation */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">Occupation</span>
              <span className="text-gray-600">Software Developer</span>
            </div>
            {/* Gender */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">Gender</span>
              <span className="text-gray-600">Male</span>
            </div>
            {/* Blood Group */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">Blood Group</span>
              <span className="text-gray-600">O+</span>
            </div>
            {/* Date of Birth */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">Date of Birth</span>
              <span className="text-gray-600 capitalize">
                december 30, 1996
              </span>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#0FABCA] mb-4">
            Addresses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {/* City */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">City</span>
              <span className="text-gray-600 capitalize">Comilla</span>
            </div>
            {/* Thana */}
            <div className="flex justify-between flex-col">
              <span className="text-gray-700 font-semibold">Thana</span>
              <span className="text-gray-600 capitalize">Adarsha Sadar</span>
            </div>
            {/* Full Address */}
            <div className="flex justify-between flex-col sm:col-span-2">
              <span className="text-gray-700 font-semibold">Full Address</span>
              <span className="text-gray-600 capitalize">
                1234 Elm St, Springfield, IL
              </span>
            </div>
          </div>
        </div>

        {/* Security Settings Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#0FABCA] mb-4">
            Security Settings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
            {/* Two-Factor Authentication */}
            <div className="flex justify-between ">
              <span className="text-gray-700 font-semibold">
                Two-Factor Authentication
              </span>
              <span className="text-gray-600">Enabled</span>
            </div>
            {/* Logout Button */}
            <div className="flex justify-between ">
              <span className="text-gray-700 font-semibold">Logout</span>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
