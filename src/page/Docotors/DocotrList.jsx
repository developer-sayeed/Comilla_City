import { Link } from "react-router";
import doctor from "../../assets/001-doctor.png";
import BannerSlider from "../../components/Banner/BannerSlider";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { useState } from "react";
import { doctorData } from "./data";
import NotFoud from "../../components/Card/NotFoud";
import { specialists } from "../../components/Static_Data/DoctorCategories";
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpg";
import banner3 from "../../assets/banner/banner-3.jpg";
import banner4 from "../../assets/banner/banner-4.jpg";
const DocotrList = () => {
  const bannerImages = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    },
    {
      image: banner4,
    },
  ];
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  // Filter doctors based on name or specialty
  const filteredDoctors = doctorData.filter((doctor) => {
    return (
      (searchName
        ? doctor.name.toLowerCase().includes(searchName.toLowerCase())
        : true) &&
      (searchCategory
        ? doctor.specialty.toLowerCase().includes(searchCategory.toLowerCase())
        : true)
    );
  });
  return (
    <>
      <BannerSlider bannerImages={bannerImages} />
      <CustomHeading tittel={"ডাক্তারদের তালিকা"} />

      {/* Docotr Serching  */}
      <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-md">
        <form className="flex flex-wrap gap-4 items-end w-full sm:p-6 py-8 rounded-md z-[25] overflow-hidden">
          {/* Name Field */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ডাক্তারের নাম লিখুন
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="ডাক্তারের নাম লিখুন"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-blue-900"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          {/* Selected Doctor  Field */}
          <div className="flex-1 min-w-[200px]">
            <label
              htmlFor="doctor-category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              ডাক্তার ক্যাটাগরি নির্বাচন করুন
            </label>
            <select
              id="doctor-category"
              name="doctor-category"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-blue-900"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="">ডাক্তার নির্বাচন করুন</option>
              {specialists.map((item) => {
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

      {/* Doctor List  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="max-w-full flex items-center justify-center">
                <img
                  className="w-32 h-40 object-cover"
                  src={item.image ? item.image : `${doctor}`}
                  alt={item.name || "Doctor"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = doctor;
                  }}
                />
                <div className="px-2 pt-3">
                  <h1 className="text-sm font-bold text-gray-800 mb-2 flex gap-2 items-center">
                    {item.name}
                  </h1>
                  <p className="text-[12px] text-gray-600 mb-2">
                    <strong>বিশেষজ্ঞ: </strong>
                    {item.specialty}
                  </p>
                  <p className="text-[12px] text-gray-600 mb-2">
                    <strong>শিক্ষাগত অভিজ্ঞতা: </strong>
                    {item.education}
                  </p>
                  <p className="text-[12px] text-gray-600 mb-4">
                    <strong>বর্তমানে কর্মরত: </strong> {item.working}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4">
                <p className="pb-2">{item.expertOn}</p>
                <div className="flex justify-between items-center gap-2">
                  <a
                    href={`tel:${item.phone || "+880123456789"}`}
                    className="w-full sm:w-auto rounded-md border border-blue-300 bg-blue-300 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 py-3 px-4 text-sm font-bold cursor-pointer"
                  >
                    কল করুন
                  </a>

                  <Link
                    to={`/doctor/${item.id}`}
                    className="w-full sm:w-auto rounded-md border border-blue-900 bg-blue-900 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 py-3 px-4 text-sm font-bold cursor-pointer"
                  >
                    আরো জানুন
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NotFoud titel={"ডাক্তার"} />
        )}
      </div>
    </>
  );
};
export default DocotrList;
