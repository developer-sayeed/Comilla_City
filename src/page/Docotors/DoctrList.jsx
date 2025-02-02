import doctorimg from "../../assets/001-doctor.png";
import BannerSlider from "../../components/Banner/BannerSlider";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotFoud from "../../components/Card/NotFoud";
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpg";
import banner3 from "../../assets/banner/banner-3.jpg";
import banner4 from "../../assets/banner/banner-4.jpg";
import Modal from "../../components/Modal/Modal";
import SEO from "../../components/RecatHelmate/SEO";
import { FaPlus } from "react-icons/fa";
import {
  createDoctor,
  getAllDoctor,
} from "../../features/health/helathSliceApi";
import { createToast } from "../../utils/Toastify";
import { setMessageEmpty } from "../../features/health/healthSlice";
import Tooltip from "../../components/Tooltip/Tooltip";
import { ShortText } from "../../hooks/shortText";
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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [doctorsData, setDoctorsData] = useState({
    name: "",
    email: "",
    photo: "",
    gender: "",
    workplace: "",
    designation: "",
    thana: "",
    chambers: [
      {
        name: "",
        address: "",
        hospital: "",
        availableHours: "",
        consultationFee: "",
        phone: "",
      },
    ],
    qualifications: "",
    specialization: "",
    licenseNumber: "",
    profileDescription: "",
  });

  // Get All Doctor list By redux Store
  const dispatch = useDispatch();
  const { doctor, hospital, error, loader, message } = useSelector(
    (state) => state.health
  );
  // Get All Thana List By Redux
  const { thana } = useSelector((state) => state.user);

  // Get All doctor_specialists list By redux Store
  const doctor_specialists = useSelector(
    (state) => state.health.health_specialists
  );

  // Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorsData((prevState) => ({
      ...prevState, // keep the previous state
      [name]: value, // update the specific field
    }));
  };

  // handle Chamber Change
  const handleChamberChange = (index, e) => {
    const { name, value } = e.target;
    const chambers = [...doctorsData.chambers];
    chambers[index] = { ...chambers[index], [name]: value };
    setDoctorsData({ ...doctorsData, chambers });
  };

  // Add Chamber
  const addChamber = () => {
    setDoctorsData({
      ...doctorsData,
      chambers: [
        ...doctorsData.chambers,
        {
          name: "",
          address: "",
          hospital: "",
          availableHours: "",
          consultationFee: "",
          phone: "",
        },
      ],
    });
  };
  //  Remove Chamber

  const removeChamber = (index) => {
    const chambers = [...doctorsData.chambers];
    chambers.splice(index, 1); // Remove the chamber at the given index
    setDoctorsData({ ...doctorsData, chambers });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createDoctor(doctorsData))
      .unwrap()
      .then(() => {
        dispatch(getAllDoctor()); // ✅ নতুন ডাটা ফেচ করো

        // ✅ সফল হলে ইনপুট ফিল্ড খালি করো
        setDoctorsData({
          name: "",
          email: "",
          photo: "",
          gender: "",
          workplace: "",
          designation: "",
          thana: "",
          chambers: [
            {
              name: "",
              address: "",
              hospital: "",
              availableHours: "",
              consultationFee: "",
              phone: "",
            },
          ],
          qualifications: "",
          specialization: "",
          licenseNumber: "",
          profileDescription: "",
        });

        // ✅ মডাল বন্ধ করো
        setIsPopupOpen(false);
      })
      .catch((error) => {
        console.error("Doctor Create Failed", error);
      });
  };

  // Filter doctors based on name or specialty
  const filteredDoctors = Array.isArray(doctor)
    ? doctor?.filter((doctor) => {
        return (
          (!searchName ||
            doctor?.name
              ?.toLowerCase()
              .includes(searchName?.toLowerCase() || "")) &&
          (!searchCategory ||
            (doctor?.specializationDetails?.length > 0 &&
              doctor?.specializationDetails[0]?.name
                ?.toLowerCase()
                .includes(searchCategory?.toLowerCase() || "")))
        );
      })
    : [];

  // Modal View SingleDoctor
  const handleViewDoctor = (id) => {
    const selected = doctor?.find((doctor) => doctor?._id === id);
    setSelectedDoctor(selected); // Make sure selectedDoctor is being updated here
    setIsModalOpen(true); // Open the modal
  };

  useEffect(() => {
    // Error handling
    if (error) {
      createToast(error, "error");
      dispatch(setMessageEmpty()); // Clear error message after showing toast
    } else if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty()); // Clear success message after showing toast
    }
  }, [error, message, dispatch]);
  return (
    <>
      <SEO
        title={"Comilla City All Doctor List"}
        description={"All Doctors"}
        keywords={"doctor, comilla doctor, best doctor comilla, "}
      />
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
              {doctor_specialists.map((item) => {
                return (
                  <option key={item?.id} value={item?.name}>
                    {item?.name}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>

      {/* Doctor List  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredDoctors?.length > 0 ? (
          filteredDoctors?.map((item) => (
            <div
              key={`${item?.id}  ${item?.name}`}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="max-w-full flex items-center justify-center">
                <img
                  className="w-32 h-40 object-cover"
                  src={item?.photo ? item?.photo : `${doctorimg}`}
                  alt={item?.name || "Doctor"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = doctorimg;
                  }}
                />
                <div className="px-2 pt-3">
                  <h1 className="text-sm font-bold text-gray-800 mb-2 flex gap-2 items-center">
                    {item?.name}
                  </h1>
                  <p className="text-[12px] text-gray-600 mb-2">
                    <strong>বিশেষজ্ঞ: </strong>
                    {item?.specializationDetails?.[0]?.name}
                  </p>
                  <p className="text-[12px] text-gray-600 mb-2">
                    <strong>শিক্ষাগত অভিজ্ঞতা: </strong>
                    {item?.qualifications}
                  </p>
                  <p className="text-[12px] text-gray-600 mb-2">
                    <strong>চেম্বার: </strong>
                    {item?.chember?.hospital?.name}
                  </p>
                  <p className="text-[12px] text-gray-600 mb-4">
                    <strong>বর্তমানে কর্মরত: </strong>{" "}
                    {item?.workplace || "N/A"}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4">
                <p className="pb-2">
                  {ShortText(item?.profileDescription, 20)}
                </p>
                <div className="flex justify-between items-center gap-2">
                  <a
                    href={`tel:${item?.phone}`}
                    className="w-full sm:w-auto rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                  >
                    কল করুন
                  </a>

                  <button
                    onClick={() => handleViewDoctor(item?._id)}
                    className="w-full sm:w-auto rounded-md border border-[#0FABCA]  text-[#0FABCA] hover:bg-[#0FABCA] hover:border-[#0FABCA] hover:text-white transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                  >
                    আরো জানুন
                  </button>
                  {/* Modal */}

                  {isModalOpen && selectedDoctor._id === item?._id && (
                    <Modal
                      isOpen={isModalOpen}
                      onClose={() => setIsModalOpen(false)}
                      heading={item?.name}
                    >
                      <div className="bg-white  sm:p-0 rounded-lg max-w-xl mx-auto">
                        {/* Hospital Photo */}
                        <div className="mb-0 flex justify-center">
                          <img
                            src={item?.photo}
                            alt={item?.name}
                            className="w-48 h-48 object-fill rounded-lg border-2 border-gray-300"
                          />
                        </div>
                        {/*  About Doctors */}
                        <div className="border-b-2 py-3 border-cyan-500">
                          <h2 className="text-center font-semibold text-cyan-400 xl">
                            About {item.name}
                          </h2>
                          <p className="py-1 text-center text-md ">
                            {item?.profileDescription}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between border-b border-[#0fabca76] py-2">
                            <span className="font-semibold text-gray-700">
                              শিক্ষাগত অভিজ্ঞতা
                            </span>
                            <span className="text-gray-600">
                              {item?.qualifications}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-[#0fabca76] py-2">
                            <span className="font-semibold text-gray-700">
                              পদবী
                            </span>
                            <span className="text-gray-600">
                              {item?.designation}
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-[#0fabca76] py-2">
                            <span className="font-semibold text-gray-700">
                              বর্তমানে কর্মরত
                            </span>
                            <span className="text-gray-600">
                              {item?.workplace || "N/A"}
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-[#0fabca76] py-2 ">
                            <span className="font-semibold text-gray-700">
                              বিশেষজ্ঞ
                            </span>
                            <span className="text-gray-600">
                              {item?.specializationDetails?.[0]?.name}
                            </span>
                          </div>
                          {item?.email && (
                            <div className="flex justify-between border-b border-[#0fabca76] py-2">
                              <span className="font-semibold text-gray-700">
                                ইমেইল
                              </span>
                              <span className="text-gray-600">
                                {item?.email}
                              </span>
                            </div>
                          )}
                          {item?.licenseNumber && (
                            <div className="flex justify-between border-b border-[#0fabca76] py-2">
                              <span className="font-semibold text-gray-700">
                                লাইসেন্স নম্বর
                              </span>
                              <span className="text-gray-600">
                                {item?.licenseNumber}
                              </span>
                            </div>
                          )}

                          <div className="flex justify-between border-b border-[#0fabca76] py-2">
                            <span className="font-semibold text-gray-700">
                              উপজেলা
                            </span>
                            <span className="text-gray-600">
                              {item?.thanaDetails?.[0]?.name} উপজেলা
                            </span>
                          </div>
                        </div>

                        {/* Chambers data loop */}
                        {item.chambers && item.chambers.length > 0 ? (
                          item?.chambers?.map((chamber, index) => {
                            console.log(chamber.hospital?.name);

                            return (
                              <div
                                key={index + 1}
                                className="border-t-2 py-3 border-cyan-500"
                              >
                                <h2 className="text-center py-2 text-blue-500 font-semibold text-xl">
                                  Chamber & Appointment - {index + 1}
                                </h2>

                                <div className="flex justify-between border-b border-[#0fabca76] py-2">
                                  <span className="font-semibold text-gray-700">
                                    চেম্বার
                                  </span>
                                  <span className="text-gray-600">
                                    {chamber?.hospital}
                                  </span>
                                </div>
                                <div className="flex justify-between border-b border-[#0fabca76] py-2">
                                  <span className="font-semibold text-gray-700">
                                    চেম্বারের ঠিকানা
                                  </span>
                                  <span className="text-gray-600">
                                    {chamber?.address}
                                  </span>
                                </div>
                                <div className="flex justify-between border-b border-[#0fabca76] py-2">
                                  <span className="font-semibold text-gray-700">
                                    রোগী দেখার সময়
                                  </span>
                                  <span className="text-gray-600">
                                    {chamber?.availableHours}
                                  </span>
                                </div>
                                <div className="flex justify-between border-b border-[#0fabca76] py-2">
                                  <span className="font-semibold text-gray-700">
                                    পরামর্শ ফি
                                  </span>
                                  <span className="text-gray-600">
                                    {chamber?.consultationFee} TAKA Only
                                  </span>
                                </div>
                                <div className="flex justify-between ] mb-2 py-2 border-b border-[#0fabca76] ">
                                  <span className="font-semibold text-gray-700">
                                    এপয়েন্টমেন্ট
                                  </span>
                                  <span className="text-gray-600">
                                    {chamber?.phone}
                                  </span>
                                </div>
                                <div className="flex justify-center">
                                  <a
                                    href={`tel:${chamber?.phone}`}
                                    className="  rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                                  >
                                    সিরিয়াল নিন
                                  </a>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p>কোন চেম্বার তথ্য পাওয়া যায়নি।</p>
                        )}
                      </div>
                    </Modal>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <NotFoud titel={"ডাক্তার"} />
        )}
      </div>

      {/* Floating Button (Bottom to Top) */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-28 sm:bottom-5 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        <FaPlus />
      </button>

      {/* Popup Modal */}
      <Modal
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)} // এখানে `setIsPopupOpen` বদলে `setIsModalOpen`
        heading="Add Doctor"
      >
        <div className="p-4 bg-white rounded-md w-full">
          <form onSubmit={handleSubmit} className="">
            {/* Doctor Name */}
            <div className="mb-4">
              <label className="block mb-1">Doctor Name</label>
              <input
                type="text"
                name="name"
                placeholder="ডাক্তারের নাম"
                value={doctorsData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1">Doctor's Email</label>
              <input
                type="email"
                name="email"
                placeholder="ইমেইল"
                value={doctorsData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {/* Gender */}
            <div className="mb-4">
              <label className="block mb-1">Gender</label>
              <select
                name="gender"
                value={doctorsData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">লিঙ্গ নির্বাচন করুন</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* Qualifications  */}
            <div className="mb-4">
              <label className="block mb-1">Qualifications </label>
              <input
                type="text"
                name="qualifications"
                placeholder="আপনার ডিগ্রী এবং যোগ্যতা লিখুন"
                value={doctorsData.qualifications}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {/* Workplace   */}
            <div className="mb-4">
              <label className="block mb-1">Workplace </label>
              <input
                type="text"
                name="workplace"
                placeholder="Example: কুমিল্লা মেডিকেল কলেজ হাসপাতাল"
                value={doctorsData.workplace}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {/* Designation   */}
            <div className="mb-4">
              <label className="block mb-1">Designation </label>
              <input
                type="text"
                name="designation"
                placeholder="Example: সহকারী অধ্যাপক (মেডিসিন)"
                value={doctorsData.designation}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {/* Specialty */}
            <div className="mb-4">
              <label className="block mb-1">Specialty </label>
              <select
                name="specialization"
                value={doctorsData.specialization}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">বিশেষজ্ঞ নির্বাচন করুন</option>
                {doctor_specialists?.map((item, index) => {
                  return (
                    <option key={index.id} value={item?._id}>
                      {item?.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Thana */}
            <div className="mb-4">
              <label className="block mb-1">Thana</label>
              <select
                name="thana"
                value={doctorsData.thana}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">থানা নির্বাচন করুন</option>
                {thana?.map((item) => {
                  return (
                    <option key={item?._id} value={item?._id}>
                      {item?.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* License Number */}
            <div className="mb-4">
              <label className=" mb-1 flex items-center gap-2">
                <span>License Number</span>{" "}
                <Tooltip content={"আপনি যদি জানেন আপনার BMDC লাইসেন্স লিখুন"} />
              </label>
              <input
                type="text"
                name="licenseNumber"
                placeholder="ডাক্তার লাইসেন্স নম্বর"
                value={doctorsData.licenseNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Chambers */}
            <div>
              {doctorsData.chambers.map((chamber, index) => (
                <div key={index}>
                  <h3 className="text-center bg-blue-400 text-white py-1 font-semibold text-xl">
                    Chamber {index + 1} & Appointment
                  </h3>

                  {/* Hospital Name */}
                  <div className="mb-4">
                    <label className="block mb-1">Hospital Name</label>
                    <select
                      name="hospital"
                      value={chamber.hospital}
                      onChange={(e) => handleChamberChange(index, e)}
                      className="w-full px-4 py-2 border rounded-md"
                    >
                      <option value="">হাসপাতাল নির্বাচন করুন</option>
                      {hospital?.map((item) => {
                        return (
                          <option key={item?._id} value={item?._id}>
                            {item?.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* Address */}
                  <div className="mb-4">
                    <label className="block mb-1">Chamber Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Example: House # 16 Road No. 2, Comilla 1205"
                      value={chamber.address}
                      onChange={(e) => handleChamberChange(index, e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>

                  {/* Available Hours */}
                  <div className="mb-4">
                    <label className="block mb-1">Visiting Time</label>
                    <input
                      type="text"
                      name="availableHours"
                      placeholder="Example:- 10:00 AM to 1:00 PM and 5:00 PM to 8:00 PM"
                      value={chamber.availableHours}
                      onChange={(e) => handleChamberChange(index, e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>

                  {/* Consultation Fee */}
                  <div className="mb-4">
                    <label className="block mb-1">Consultation Fee</label>
                    <input
                      type="text"
                      name="consultationFee"
                      placeholder="পরামর্শ ফি"
                      value={chamber.consultationFee}
                      onChange={(e) => handleChamberChange(index, e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <label className="block mb-1">
                      Mobile Number (For Appointment)
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Example: +8801000000000"
                      value={chamber.phone}
                      onChange={(e) => handleChamberChange(index, e)}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                  </div>

                  {/* Conditionally show the Remove Chamber button */}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeChamber(index)}
                      className="px-6 py-2 bg-red-800 mr-2 text-white rounded-md"
                    >
                      Remove Chamber
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={addChamber}
                    className="px-6 py-2 bg-[#0FABCA] text-white rounded-md mb-2"
                  >
                    Add Chamber
                  </button>
                </div>
              ))}
            </div>

            {/* Image URL */}
            <div className="mb-4">
              <label className="flex item-center gap-2 mb-1">
                <span>Photo URL</span>
                <Tooltip
                  content={
                    "postimages.org-এ গিয়ে ছবি আপলোড করুন এবং ছবির লিঙ্ক পান এবং এখানে জমা দিন"
                  }
                />
              </label>
              <input
                type="text"
                name="photo"
                placeholder="ডাক্তারের ছবি"
                value={doctorsData.photo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Profile Description */}
            <div className="mb-4">
              <label className="block mb-1">About </label>
              <textarea
                name="profileDescription"
                placeholder="ডাক্তার সম্পর্কে"
                value={doctorsData.profileDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Buttons */}
            <div className="col-span-2 mt-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsPopupOpen(false)}
                className="px-6 py-2 bg-gray-300 text-black rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#0FABCA] text-white rounded-md"
              >
                Add Doctor
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
export default DoctrList;
