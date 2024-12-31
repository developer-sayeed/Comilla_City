import { Link } from "react-router";
import hospital from "../../assets/003-hospital-building.png";
import BannerSlider from "../../components/Banner/BannerSlider";
import { hospitals } from "./data";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { useState } from "react";
import CustomCrad from "../../components/Card/CustomCrad";
import NotFoud from "../../components/Card/NotFoud";
import { Thana } from "../../components/Static_Data/Thana";
import banner1 from "../../assets/banner/Dental-Clinic-Sing-Board-768x316.jpg";
import banner2 from "../../assets/banner/hospital.jpg";

const Hospital = () => {
  const bannerImages = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
  ];
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

      {/* Doctor List  */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {/* Donor Card 1 */}
          {filteredHospital.length > 0 ? (
            filteredHospital.map((item) => {
              return (
                <CustomCrad
                  key={item.id}
                  image={hospital}
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
