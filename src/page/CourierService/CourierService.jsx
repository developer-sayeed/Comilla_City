import { useState } from "react";
import CustomCrad from "../../components/Card/CustomCrad";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { courierServices } from "./Data";
import NotFoud from "../../components/Card/NotFoud";

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
      <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-md">
        <form className="flex flex-wrap gap-4 items-end w-full sm:p-6 py-8 rounded-md z-[25] overflow-hidden">
          {/* Name Field */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              কুরিয়ার নাম লিখুন
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="হাসপাতালের নাম লিখুন"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          {/* Thana Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="thana"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              থানা নির্বাচন করুন
            </label>
            <select
              id="thana"
              name="thana"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="">থানা নির্বাচন করুন</option>
              <option value="কুমিল্লা সদর">কুমিল্লা সদর</option>
              <option value="আদর্শ সদর">আদর্শ সদর</option>
              <option value="দাউদকান্দি">দাউদকান্দি</option>
              <option value="বুড়িচং">বুড়িচং</option>
              <option value="ব্রাহ্মণপাড়া">ব্রাহ্মণপাড়া</option>
              <option value="চান্দিনা">চান্দিনা</option>
              <option value="দেবিদ্বার">দেবিদ্বার</option>
              <option value="হোমনা">হোমনা</option>
              <option value="লাকসাম">লাকসাম</option>
              <option value="মেঘনা">মেঘনা</option>
              <option value="মুরাদনগর">মুরাদনগর</option>
              <option value="নাঙ্গলকোট">নাঙ্গলকোট</option>
              <option value="তিতাস">তিতাস</option>
              <option value="মনোহরগঞ্জ">মনোহরগঞ্জ</option>
              <option value="বরুড়া">বরুড়া</option>
              <option value="কুমিল্লা সদর দক্ষিণ">কুমিল্লা সদর দক্ষিণ</option>
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
