import { Link } from "react-router";
import doctor from "../../assets/001-doctor.png";
import BannerSlider from "../../components/Banner/BannerSlider";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { useState } from "react";
import { doctorData } from "./data";
import NotFoud from "../../components/Card/NotFoud";
const DocotrList = () => {
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
      <BannerSlider />
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
              <option value="">ডাক্তার ক্যাটাগরি</option>
              <option value="মনোরোগ বিশেষজ্ঞ">মনোরোগ বিশেষজ্ঞ</option>
              <option value="হৃদরোগ বিশেষজ্ঞ">হৃদরোগ বিশেষজ্ঞ</option>
              <option value="পাইলস বিশেষজ্ঞ">পাইলস বিশেষজ্ঞ</option>
              <option value="ডেন্টিস্ট">ডেন্টিস্ট</option>
              <option value="চর্ম ও যৌন রোগ বিশেষজ্ঞ">
                চর্ম ও যৌন রোগ বিশেষজ্ঞ
              </option>
              <option value="ডায়াবেটিস ও হরমোন">ডায়াবেটিস ও হরমোন</option>
              <option value="নাক, কান ও গলা বিশেষজ্ঞ">
                নাক, কান ও গলা বিশেষজ্ঞ
              </option>
              <option value="চোখ বিশেষজ্ঞ">চোখ বিশেষজ্ঞ</option>
              <option value="লিভার বিশেষজ্ঞ">লিভার বিশেষজ্ঞ</option>
              <option value="ইউরোলজি">ইউরোলজি</option>
              <option value="সার্জারি">সার্জারি</option>
              <option value="গাইন বিশেষজ্ঞ">গাইন বিশেষজ্ঞ</option>
              <option value="রক্তরোগ বিশেষজ্ঞ">রক্তরোগ বিশেষজ্ঞ</option>
              <option value="হোমিওপ্যাথি">হোমিওপ্যাথি</option>
              <option value="লেজার সার্জারি">লেজার সার্জারি</option>
              <option value="মেডিসিন বিশেষজ্ঞ">মেডিসিন বিশেষজ্ঞ</option>
              <option value="কিডনি রোগ বিশেষজ্ঞ">কিডনি রোগ বিশেষজ্ঞ</option>
              <option value="নিউরো-সার্জারি">নিউরো-সার্জারি</option>
              <option value="স্বাস্থ্য রোগ বিশেষজ্ঞ">
                স্বাস্থ্য রোগ বিশেষজ্ঞ
              </option>
              <option value="পুষ্টি বিশেষজ্ঞ">পুষ্টি বিশেষজ্ঞ</option>
              <option value="চর্মরোগ বিশেষজ্ঞ">চর্মরোগ বিশেষজ্ঞ</option>
              <option value="নিউরোলজিস্ট">নিউরোলজিস্ট</option>
              <option value="ক্যান্সার বিশেষজ্ঞ">ক্যান্সার বিশেষজ্ঞ</option>
              <option value="অর্থোপেডিক">অর্থোপেডিক</option>
              <option value="ব্যথা বিশেষজ্ঞ">ব্যথা বিশেষজ্ঞ</option>
              <option value="শিশু রোগ বিশেষজ্ঞ">শিশু রোগ বিশেষজ্ঞ</option>
              <option value="ফিজিকাল মেডিসিন">ফিজিকাল মেডিসিন</option>
              <option value="ফিজিওথেরাপিস্ট">ফিজিওথেরাপিস্ট</option>
              <option value="প্লাস্টিক সার্জারি">প্লাস্টিক সার্জারি</option>
              <option value="অ্যাজমা, ব্রঙ্কাইটিস বিশেষজ্ঞ">
                অ্যাজমা, ব্রঙ্কাইটিস বিশেষজ্ঞ
              </option>
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
