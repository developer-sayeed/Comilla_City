import { Link } from "react-router";
import hospital from "../../assets/003-hospital-building.png";
import BannerSlider from "../../components/Banner/BannerSlider";
import { hospitals } from "./data";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { useState } from "react";
import CustomCrad from "../../components/Card/CustomCrad";
import NotFoud from "../../components/Card/NotFoud";
const Hospital = () => {
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  // Filter doctors based on name or specialty
  const filteredHospital = hospitals.filter((hospital) => {
    return (
      (searchName
        ? hospital.name.toLowerCase().includes(searchName.toLowerCase())
        : true) &&
      (searchCategory
        ? hospital.thana.toLowerCase().includes(searchCategory.toLowerCase())
        : true)
    );
  });
  return (
    <>
      <BannerSlider />
      <CustomHeading tittel={"হাসপাতালের তালিকা"} />

      {/* Hospital  Serching  */}
      <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-md">
        <form className="flex flex-wrap gap-4 items-end w-full sm:p-6 py-8 rounded-md z-[25] overflow-hidden">
          {/* Name Field */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              হাসপাতালের নাম লিখুন
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

          {/* Search Button */}
          <div className="w-full sm:w-auto">
            <button
              type="submit"
              className="w-full sm:w-auto rounded-md border border-blue-300 bg-blue-300 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
            >
              খুঁজুন
            </button>
          </div>
        </form>
      </div>

      {/* Doctor List  */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8"></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Donor Card 1 */}
          {filteredHospital.length > 0 ? (
            filteredHospital.map((item) => {
              return (
                <CustomCrad
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  addressHeading={"ঠিকানা"}
                  address={item.address}
                  phoneHeading={"ফোন"}
                  phone={item.phone}
                  tittel1heading={"থানা"}
                  tittel1={item.thana}
                  tittel3heading={"ইমেইল"}
                  tittel3={item.email}
                />
              );
            })
          ) : (
            <NotFoud titel={"হাসপাতাল"} />
          )}
        </div>
      </div>
    </>
  );
};
export default Hospital;
