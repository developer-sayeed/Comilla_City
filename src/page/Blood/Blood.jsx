import Banner from "../../components/Banner/BannerSlider";
import bloodimg1 from "../../assets/banner/blood.jpg";
import bloodimg2 from "../../assets/banner/blood_donation.png";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import CustomNotice from "../../components/Card/CustomNotice";
import CustomCrad from "../../components/Card/CustomCrad";
import { bloodDonors } from "./data";
import { Link } from "react-router";
import donner from "../../assets/men.png";
import { useState } from "react";
import { Thana } from "../../components/Static_Data/Thana";
import NotFoud from "../../components/Card/NotFoud";

const Blood = () => {
  const bloodGroups = [
    { id: 1, group: "A+" },
    { id: 2, group: "A-" },
    { id: 3, group: "B+" },
    { id: 4, group: "B-" },
    { id: 5, group: "AB+" },
    { id: 6, group: "AB-" },
    { id: 7, group: "O+" },
    { id: 8, group: "O-" },
  ];

  const bloodimg = [{ image: bloodimg1 }, { image: bloodimg2 }];

  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchBlood, setSearchBlood] = useState("");

  // Filter doctors based on name or specialty
  const filteredDonner = bloodDonors.filter((blood) => {
    return (
      (searchName
        ? blood.Name.toLowerCase().includes(searchName.toLowerCase())
        : true) &&
      (searchCategory
        ? blood.Thana.toLowerCase().includes(searchCategory.toLowerCase())
        : true) &&
      (searchBlood
        ? blood.BloodGroup.toLowerCase().includes(searchBlood.toLowerCase())
        : true)
    );
  });
  return (
    <>
      <Banner bannerImages={bloodimg} />
      <CustomNotice
        heading={"Notice"}
        content={
          "আপনার এক ফোঁটা রক্ত একটি জীবন বাঁচাতে পারে। রক্তদান করুন, মানবতার সেবায় অংশ নিন।"
        }
        className={"text-red-500"}
      />
      <CustomHeading tittel={"Blood Donner"} />

      {/* Hospital  Serching  */}
      <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-md mb-4">
        <form className="flex flex-wrap gap-4 items-end w-full sm:p-6 py-8 rounded-md z-[25] overflow-hidden">
          {/* Name Field */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              নাম লিখুন
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" নাম লিখুন"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          {/* Blood Group Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="thana"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              রক্তের গ্রুপ নির্বাচন করুন
            </label>
            <select
              id="thana"
              name="thana"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
              value={searchBlood}
              onChange={(e) => setSearchBlood(e.target.value)}
            >
              <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
              {bloodGroups.map((item) => {
                return (
                  <option key={item.id} value={item.group}>
                    {item.group}
                  </option>
                );
              })}
            </select>
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
      {/* Donner Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDonner.length > 0 ? (
          filteredDonner.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="max-w-full flex items-center justify-center">
                  <img
                    className="w-32 h-32 object-cover"
                    src={item.image ? item.image : `${donner}`}
                    alt={item.Name || "Doctor"}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = donner;
                    }}
                  />
                  <div className="px-2 pt-3">
                    <h1 className="text-sm font-bold text-gray-800 mb-2 flex gap-2 items-center">
                      {item.Name}
                    </h1>
                    <p className="text-[12px] text-gray-600 mb-2">
                      <strong>রক্তের গ্রুপ : </strong>
                      <b className="text-red-600 text-[18px]">
                        {item.BloodGroup}
                      </b>
                    </p>
                    <p className="text-[12px] text-gray-600 mb-2">
                      <strong>শেষ রক্তদানের তারিখ: </strong>
                      {item.LastDonationDate}
                    </p>
                    <p className="text-[12px] text-gray-600 mb-2">
                      <strong>থানা: </strong> {item.Thana}
                    </p>
                    <p className="text-[12px] text-gray-600 mb-4">
                      <strong>ঠিকানা: </strong> {item.Address}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <p className="pb-2">
                    {item.Remark}, Lorem ipsum dolor, sit amet consectetur
                    adipisicing.
                  </p>
                  <div className="flex justify-between items-center gap-2">
                    <a
                      href={`tel:${item.Number || "+880123456789"}`}
                      className="w-full sm:w-auto rounded-md border border-blue-900 bg-blue-900 text-white hover:text-red-900 hover:bg-white hover:border-red-900 transition duration-300 py-3 px-4 text-sm font-bold cursor-pointer"
                    >
                      কল করুন
                    </a>
                    <a
                      href={`https://wa.me/${item.Number}`}
                      className="w-full sm:w-auto rounded-md border border-blue-900 bg-blue-900 text-white hover:bg-red-900 hover:border-red-900 transition duration-300 py-3 px-4 text-sm font-bold cursor-pointer"
                    >
                      ম্যাসেজ করুন
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NotFoud />
        )}
      </div>
    </>
  );
};
export default Blood;
