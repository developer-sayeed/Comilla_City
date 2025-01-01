import NotFoud from "../../components/Card/NotFoud";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Thana } from "../../components/Static_Data/Thana";
import { useState } from "react";
import { carRent } from "./Data";
import { MdEmail } from "react-icons/md";

const CarRent = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchName, setSearchName] = useState("");
  // Filter doctors based on name or specialty
  const filteredcar = carRent.filter((car) => {
    return (
      (searchName
        ? car.carModel.toLowerCase().includes(searchName.toLowerCase())
        : true) &&
      (searchCategory
        ? car.thana.toLowerCase().includes(searchCategory.toLowerCase())
        : true)
    );
  });
  return (
    <>
      {/* Page Heading */}
      <CustomHeading tittel="গাড়ি ভাড়া" />
      {/* Restarunt   Serching  */}
      <div className="w-full  mx-auto  bg-white rounded-lg shadow-md">
        <form className="flex flex-wrap gap-4 items-end w-full sm:p-6 py-8 rounded-md z-[25] overflow-hidden">
          {/* Name Field */}
          <label className="relative w-[45%]">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" " /* placeholder ফাঁকা রাখুন */
              className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <span
              className={`absolute left-5 px-1 text-[#777777] bg-white transition-all duration-300 
    ${searchName ? "-top-3 scale-[0.9] left-2 text-[#3B9DF8]" : "top-3.5"}`}
            >
              নাম লিখুন
            </span>
          </label>
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
      {/* Restarunt Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredcar.length > 0 ? (
          filteredcar.map((item) => {
            return (
              <div
                key={item.id}
                className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 m-auto flex flex-col justify-between"
              >
                {/* Hotel Image */}
                <div className="relative">
                  <img
                    className="w-full h-56 object-fill"
                    src={
                      item.image
                        ? item.image
                        : "https://www.spoton.com/blog/content/images/2023/11/Seafood_Restaurant-1.jpg"
                    }
                    alt={item.carModel}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://www.spoton.com/blog/content/images/2023/11/Seafood_Restaurant-1.jpg"; // Fallback image if error
                    }}
                  />
                  <span className="absolute top-2 right-2 bg-[#0FABCA] text-white px-2 py-1 text-sm rounded">
                    {item.rentalPrice} টাকা দিন
                  </span>
                </div>

                {/* Hotel Details */}
                <div className="px-5 py-4 space-y-2">
                  <h2 className="font-bold text-lg text-blue-700">
                    {item.carModel}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    📋 <strong>তথ্য:</strong> {item.rentalInfo}
                  </p>

                  <p className="text-gray-600 text-sm">
                    🛡️ <strong>সুবিধা:</strong> {item.amenities}
                  </p>

                  <p className="text-gray-600 text-sm">
                    <FaMapMarkerAlt className="inline-block mr-1" />
                    <strong>ঠিকানা:</strong> {item.location}
                  </p>
                  <p>
                    🏢 <strong>থানা:</strong> {item.thana}
                  </p>
                </div>

                {/* Contact Details */}
                <div className="px-5 py-3 bg-gray-50 rounded-b-xl">
                  <div className="flex gap-4">
                    {/* Call Button */}
                    <a
                      href={`tel:${item.contactInfo.phone}`}
                      className="flex items-center justify-center w-full sm:w-1/2 text-center bg-[#0FABCA] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#0E9AB0] transition-all duration-300 ease-in-out"
                    >
                      <FaPhoneAlt className="mr-2 text-lg" /> Call Now
                    </a>

                    {/* Website Button */}
                    <a
                      href={item.contactInfo.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full sm:w-1/2 text-center bg-[#0FABCA] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#0E9AB0] transition-all duration-300 ease-in-out"
                    >
                      <MdEmail className="mr-2 text-lg" /> Email
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NotFoud titel={"ক্যাফে"} />
        )}
      </div>
    </>
  );
};
export default CarRent;
