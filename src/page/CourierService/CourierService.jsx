import { useState } from "react";
import CustomCrad from "../../components/Card/CustomCrad";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { courierServices } from "./Data";
import NotFoud from "../../components/Card/NotFoud";
import { Thana } from "../../components/Static_Data/Thana";

const CourierService = () => {
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  // Filter doctors based on name or specialty
  const filteredcourier = courierServices.filter((courier) => {
    return (
      (searchName
        ? courier.name.toLowerCase().includes(searchName.toLowerCase())
        : true) &&
      (searchCategory
        ? courier.upazila.toLowerCase().includes(searchCategory.toLowerCase())
        : true)
    );
  });
  return (
    <>
      <CustomHeading tittel={"কুরিয়ার সার্ভিস"} />
      {/* courier  Serching  */}
      <div className="w-full  mx-auto mb-2 mt-1 bg-white rounded-lg shadow-md">
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
          <div className="flex-1 ">
            <select
              id="thana"
              name="thana"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
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
      {/* Card  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredcourier.length > 0 ? (
          filteredcourier.map((item) => {
            return (
              <CustomCrad
                key={item.name + item.id}
                name={item.name}
                addressHeading={"ঠিকানা"}
                address={item.location}
                phoneHeading={"ফোন"}
                phone={item.phone}
                tittel3heading={"ইমেইল"}
                tittel3={item.email}
                tittel1heading={"থানা"}
                tittel1={item.upazila}
                image={
                  "https://fulfillment-box.com/wp-content/uploads/2023/11/2592a6c2-4fbd-4f03-ae51-573d005308c7.png"
                }
              />
            );
          })
        ) : (
          <NotFoud titel={" কুরিয়ার সার্ভিস"} />
        )}
      </div>
    </>
  );
};
export default CourierService;
