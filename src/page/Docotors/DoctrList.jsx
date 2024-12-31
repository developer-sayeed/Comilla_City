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
import Modal from "../../components/Modal/Modal";
const DoctrList = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

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

  // Modal ওপেন করার ফাংশন
  const handleViewDoctor = (id) => {
    const doctor = doctorData.find((doc) => doc.id === id); // ID দিয়ে ডাক্তার খুঁজুন
    console.log("Selected Doctor by ID:", doctor); // ✅ Debugging জন্য লগ
    if (doctor) {
      setSelectedDoctor(doctor); // ডাক্তার সেট করুন
      setIsModalOpen(true); // Modal ওপেন করুন
    } else {
      console.error("Doctor not found!");
    }
  };
  return (
    <>
      <BannerSlider bannerImages={bannerImages} />
      <CustomHeading tittel={"ডাক্তারদের তালিকা"} />

      {/* Docotr Serching  */}
      <div className="w-full  mx-auto mt-1 mb-4 bg-white rounded-lg shadow-md">
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

          {/* Selected Doctor  Field */}
          <div className="flex-1 w-[50%]">
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
                <p className="pb-2">{item.summary}</p>
                <div className="flex justify-between items-center gap-2">
                  <a
                    href={`tel:${item.phone || "+880123456789"}`}
                    className="w-full sm:w-auto rounded-md border border-blue-300 bg-blue-300 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 py-3 px-4 text-sm font-bold cursor-pointer"
                  >
                    কল করুন
                  </a>

                  <button
                    onClick={() => handleViewDoctor(item.id)}
                    className="w-full sm:w-auto rounded-md border border-blue-900 bg-blue-900 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 py-3 px-4 text-sm font-bold cursor-pointer"
                  >
                    আরো জানুন
                  </button>
                  {/* Modal */}
                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  >
                    {selectedDoctor ? (
                      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                        <h2 className="text-2xl text-center font-bold mb-4">
                          {selectedDoctor.name}
                        </h2>
                        <ul className="space-y-3">
                          <li>
                            <b>বিশেষজ্ঞ :</b> {selectedDoctor.specialty}
                          </li>
                          <li>
                            <b>শিক্ষাগত অভিজ্ঞতা :</b>{" "}
                            {selectedDoctor.education}
                          </li>
                          <li>
                            <b>বর্তমানে কর্মরত :</b> {selectedDoctor.working}
                          </li>
                          <li>
                            <b>চেম্বার :</b> {selectedDoctor.chamber}
                          </li>
                          <li>
                            <b>রোগী দেখার সময় :</b>{" "}
                            {selectedDoctor.appointmentTime}
                          </li>
                        </ul>

                        <div className="flex justify-between mt-6">
                          <a
                            href={`mailto:${selectedDoctor.email}`}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                          >
                            ইমেইল করুন
                          </a>
                          <a
                            href={`tel:${
                              selectedDoctor.phone || "+880123456789"
                            }`}
                            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600"
                          >
                            সিরিয়াল নিন
                          </a>
                        </div>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </Modal>
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
export default DoctrList;
