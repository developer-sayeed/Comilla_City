import { FiPhoneCall } from "react-icons/fi";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { houseRentData } from "./Data";
import { MdOutlineMail } from "react-icons/md";
import { Thana } from "../../components/Static_Data/Thana";
import { useState } from "react";
import NotFoud from "../../components/Card/NotFoud";

const HouseRent = () => {
  const [searchCategory, setSearchCategory] = useState("");

  // Filter doctors based on name or specialty
  const filteredHouse = houseRentData.filter((house) => {
    return searchCategory
      ? house.thana.toLowerCase().includes(searchCategory.toLowerCase())
      : true;
  });
  return (
    <>
      {/* Page Heading */}
      <CustomHeading tittel="বাসা ভাড়া বিজ্ঞাপন" />

      {/* House   Serching  */}
      <div className="w-full  mx-auto  bg-white rounded-lg shadow-md">
        <form className="flex flex-wrap gap-4 items-end w-full sm:p-6 py-8 rounded-md z-[25] overflow-hidden">
          {/* Thana Dropdown */}
          <div className="flex-1 w-[50%]">
            <select
              id="thana"
              name="thana"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-[#0FABCA]"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="">থানা নির্বাচন করুন</option>
              {Thana.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      {/* Card Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredHouse.length > 0 ? (
          filteredHouse.map((house) => {
            return (
              <div
                key={house.id}
                className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 m-auto flex flex-col justify-between"
              >
                {/* House Image */}
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover"
                    src={house.image}
                    alt="House"
                  />
                  <span className="absolute top-2 right-2 bg-[#0FABCA] text-white px-2 py-1 text-sm rounded">
                    {house.rent} /মাস
                  </span>
                  <span className="absolute top-2 left-2 bg-[#0FABCA] text-white px-2 py-1 text-sm rounded">
                    {house.houseType}
                  </span>
                </div>

                {/* House Details */}
                <div className="px-5 py-4 space-y-2">
                  <h2 className="font-bold text-lg text-blue-700">
                    {house.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    🛋️ <strong>বাড়ির রুম:</strong> {house.roomCount}
                  </p>
                  <p className="text-gray-600 text-sm">
                    📅 <strong>প্রবেশের তারিখ:</strong> {house.availabilityDate}
                  </p>
                  <p className="text-gray-600 text-sm">
                    🛡️ <strong>সুবিধা:</strong> {house.amenities}
                  </p>
                  <p>
                    📍 <strong>ঠিকানা:</strong> {house.address}
                  </p>
                  <p>
                    🏠 <strong>থানা:</strong> {house.thana}
                  </p>
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-200 mx-4" />

                {/* Contact Details */}
                <div className="px-5 py-3 bg-gray-50 rounded-b-xl">
                  <p className="text-gray-800 text-sm">
                    📜 <strong>শর্তাবলী:</strong> {house.terms}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-4">
                    {/* Call Button */}
                    <a
                      href={`tel:${house.contactInfo.phone}`}
                      className="flex items-center justify-center w-full sm:w-1/2 text-center bg-[#0FABCA] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#0E9AB0] transition-all duration-300 ease-in-out"
                    >
                      <FiPhoneCall className="mr-2 text-lg" />{" "}
                      {/* Adding icon margin */}
                      <span>Call Now</span>
                    </a>

                    {/* Email Button */}
                    <a
                      href={`mailto:${house.contactInfo.email}`}
                      className="flex items-center justify-center w-full sm:w-1/2 text-center bg-[#0FABCA] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#0E9AB0] transition-all duration-300 ease-in-out"
                    >
                      <MdOutlineMail className="mr-2 text-lg" />{" "}
                      {/* Adding icon margin */}
                      <span>Email Now</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NotFoud titel={"হাসপাতাল"} />
        )}
      </div>
    </>
  );
};

export default HouseRent;
