import hospitalimg from "../../assets/003-hospital-building.png";
import BannerSlider from "../../components/Banner/BannerSlider";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { useEffect, useState } from "react";
import NotFoud from "../../components/Card/NotFoud";
import banner1 from "../../assets/banner/Dental-Clinic-Sing-Board-768x316.jpg";
import banner2 from "../../assets/banner/hospital.jpg";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import Modal from "../../components/Modal/Modal";
import Tooltip from "../../components/Tooltip/Tooltip";
import { createHospital } from "../../features/health/helathSliceApi";
import { createToast } from "../../utils/Toastify";
import { setMessageEmpty } from "../../features/health/healthSlice";

const Hospital = () => {
  const bannerImages = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
  ];
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [selectedhospital, setselectedhospital] = useState(null);
  const [hospital_Data, sethospital_Data] = useState({
    name: "",
    email: "",
    address: "",
    photo: "",
    thana: "",
    licenseNumber: "",
  });

  const hospitalSearch = useSelector((state) => state.health.hospital);
  // Get All Thana List By Redux
  const { thana, message, error } = useSelector((state) => state.user);

  // Filter doctors based on name or specialty
  const filteredHospital = Array.isArray(hospitalSearch)
    ? hospitalSearch.filter((hospital) => {
        return (
          (!searchName ||
            hospital?.name?.toLowerCase().includes(searchName.toLowerCase())) &&
          (!searchCategory ||
            (hospital?.thana?.name &&
              hospital.thana.name
                .toLowerCase()
                .includes(searchCategory.toLowerCase())))
        );
      })
    : [];

  // Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    sethospital_Data((prevState) => ({
      ...prevState, // keep the previous state
      [name]: value, // update the specific field
    }));
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createHospital(hospital_Data));
  };

  const handleViewHospital = (id) => {
    const selected = Hospital?.find((doctor) => doctor?._id === id);
    setselectedhospital(selected); // Make sure selectedDoctor is being updated here
    setIsModalOpen(true); // Open the modal
  };

  // useeffact
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
      <BannerSlider bannerImages={bannerImages} />
      <CustomHeading tittel={"হাসপাতালের তালিকা"} />

      {/* Hospital  Serching  */}
      <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-md">
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
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-red-400"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="">থানা নির্বাচন করুন</option>
              {thana?.map((item) => {
                return (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>

      {/* Doctor List  */}
      <div className="container mx-auto px-4 mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Donor Card 1 */}
          {filteredHospital.length > 0 ? (
            filteredHospital.map((item) => {
              return (
                <div
                  key={`${item.id}  ${item.name}`}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <div className="max-w-full ">
                    <img
                      className="w-full h-40 object-fill"
                      src={item.photo ? item.photo : `${hospitalimg}`}
                      alt={item.name || "Doctor"}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = hospitalimg;
                      }}
                    />
                    <div className="px-2 pt-3">
                      <h1 className="text-md text-center font-bold text-red-800 mb-2">
                        {item.name}
                      </h1>
                      <p className="text-[14px] text-gray-600 mb-2">
                        <strong>Email: </strong>
                        {item.email}
                      </p>
                      <p className="text-[14px] text-gray-600 mb-2">
                        <strong>Phone: </strong>
                        {item.phone}
                      </p>
                      <p className="text-[14px] text-gray-600 mb-2">
                        <strong>Upzilla : </strong> {item?.thana?.name}
                      </p>
                      <p className="text-[14px] text-gray-600 mb-2">
                        <strong>Address: </strong>
                        {item?.address}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <p className="pb-2">{item.profileDescription}</p>
                    <div className="flex justify-between items-center gap-2">
                      <a
                        href={`tel:${item.phone}`}
                        className="w-full sm:w-auto rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                      >
                        কল করুন
                      </a>

                      <button
                        onClick={() => handleViewHospital(item._id)}
                        className="w-full sm:w-auto rounded-md border border-[#0FABCA]  text-[#0FABCA] hover:bg-[#0FABCA] hover:border-[#0FABCA] hover:text-white transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                      >
                        আরো জানুন
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <NotFoud titel={"হাসপাতাল"} />
          )}
        </div>
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
        heading="Add Hospital "
      >
        <div className="p-4 bg-white rounded-md w-full">
          <form onSubmit={handleSubmit} className="">
            {/* Doctor Name */}
            <div className="mb-4">
              <label className="block mb-1">Hospital Name</label>
              <input
                type="text"
                name="name"
                placeholder="Hospital Name"
                value={hospital_Data.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1">Hospital Email</label>
              <input
                type="email"
                name="email"
                placeholder="Exapmle: hospital@exapmle.com"
                value={hospital_Data.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Qualifications  */}
            <div className="mb-4">
              <label className="block mb-1">Phone </label>
              <input
                type="text"
                name="phone"
                placeholder="Example: +88010000000"
                value={hospital_Data.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            {/* Workplace   */}
            <div className="mb-4">
              <label className="block mb-1">Address </label>
              <input
                type="text"
                name="address"
                placeholder="Example: Shishu Monagal Road, Badurtoal, Cumilla - 3500"
                value={hospital_Data.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Thana */}
            <div className="mb-4">
              <label className="block mb-1">Thana</label>
              <select
                name="thana"
                value={hospital_Data.thana}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="">থানা নির্বাচন করুন</option>
                {thana?.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* License Number */}
            <div className="mb-4">
              <label className=" mb-1 flex items-center gap-2">
                <span>License Number</span>{" "}
                <Tooltip content={"আপনি যদি জানেন  লাইসেন্স লিখুন"} />
              </label>
              <input
                type="text"
                name="licenseNumber"
                placeholder="ডাক্তার লাইসেন্স নম্বর"
                value={hospital_Data.licenseNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Image URL */}
            <div className="mb-4">
              <label className="flex item-center gap-2 mb-1">
                <span>Hospital Photo URL</span>

                <Tooltip
                  content={
                    "postimages.org-এ গিয়ে ছবি আপলোড করুন এবং ছবির লিঙ্ক পান এবং এখানে জমা দিন"
                  }
                />
                <a
                  target="blank"
                  className="text-red-700 font-semibold"
                  href="https://postimages.org/"
                >
                  Click Here
                </a>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="ডাক্তারের ছবি"
                value={hospital_Data.photo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Buttons */}
            <div className="col-span-2 mt-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
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
export default Hospital;
