import { FaWhatsapp } from "react-icons/fa";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { mechanicData, mechanicProfessions } from "./data";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { Thana } from "../../components/Static_Data/Thana";
import NotFoud from "../../components/Card/NotFoud";
import Banner from "../../components/Banner/BannerSlider";

const Mechanic = () => {
  const bannerImages = [
    {
      image: "https://i.ytimg.com/vi/OIxrhMBYUIY/sddefault.jpg?v=675049d2",
    },
    {
      image:
        "https://scontent.fjed5-1.fna.fbcdn.net/v/t39.30808-6/458546996_489372237352869_8065494922057075456_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=DofdhHRWofIQ7kNvgFMd0Zs&_nc_oc=Adizc_SeHxMnaY9ijzfDuBl-A1KifAnaRa8jiPL_p3XsJqg7bPvaTcZejc_AXC1HPOQaUXS9wYKV27RLbDIxjfJ8&_nc_zt=23&_nc_ht=scontent.fjed5-1.fna&_nc_gid=AhGfWUHhI5ha0Y4eMZsYlfa&oh=00_AYCKjmaVru9EXfNOApIanQz-cVKSqSXzna2XHbaHpOJNig&oe=677B8532",
    },
  ];
  const [searchCategory, setSearchCategory] = useState("");
  const [searchProfession, setSearchpPofession] = useState("");
  const [searchName, setSearchName] = useState("");
  // Filter doctors based on name or specialty
  const filteredMechanic = mechanicData.filter((mechanic) => {
    return (
      (searchName
        ? mechanic.name.toLowerCase().includes(searchName.toLowerCase())
        : true) &&
      (searchProfession
        ? mechanic.profession
            .toLowerCase()
            .includes(searchProfession.toLowerCase())
        : true) &&
      (searchCategory
        ? mechanic.thana.toLowerCase().includes(searchCategory.toLowerCase())
        : true)
    );
  });
  return (
    <>
      <Banner bannerImages={bannerImages} />
      <CustomHeading tittel={"কাজ মিস্ত্রি"} />
      {/* Mechanic   Serching  */}
      <div className="w-full  mx-auto mb-2 bg-white rounded-lg shadow-md">
        <form className="flex flex-wrap gap-4 items-end w-full sm:p-6 py-8 rounded-md z-[25] overflow-hidden">
          {/* Name Field */}
          <label className="relative w-[33%]">
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
          ${
            searchName ? "-top-3 scale-[0.9] left-2 text-[#3B9DF8]" : "top-3.5"
          }`}
            >
              নাম লিখুন
            </span>
          </label>
          {/* profession Dropdown */}
          <div className="flex-1 w-[50%]">
            <select
              id="profession"
              name="profession"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-[#0FABCA]"
              value={searchProfession}
              onChange={(e) => setSearchpPofession(e.target.value)}
            >
              <option value="">পেশা নির্বাচন করুন</option>
              {mechanicProfessions.map((item) => {
                return (
                  <option key={item.id} value={item.profession}>
                    {item.profession}
                  </option>
                );
              })}
            </select>
          </div>
          {/* Thana Dropdown */}
          <div className="flex-1 w-[50%]">
            <select
              id="thana"
              name="thana"
              className="w-full rounded-md border border-gray-300 px-4 py-3 bg-gray-50 text-gray-700 outline-none focus:ring-2 focus:ring-[#0FABCA]"
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
      {/* Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredMechanic.length > 0 ? (
          filteredMechanic.map((item) => {
            return (
              <div
                key={item.id}
                className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                {/* Card Image */}
                <div className="relative">
                  <img
                    className="w-full h-56 object-cover"
                    src={
                      item.image
                        ? item.image
                        : "https://i.ytimg.com/vi/udv5kg_KYOk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgnn9dsnXhLZVHaPW9_7AeWDqvzw"
                    }
                    alt={item.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://i.ytimg.com/vi/udv5kg_KYOk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDgnn9dsnXhLZVHaPW9_7AeWDqvzw"; // Fallback image if error
                    }}
                  />
                  <span className="absolute top-2 right-2 bg-[#0FABCA] text-white px-2 py-1 text-sm rounded">
                    {item.profession}
                  </span>
                </div>

                {/* Card Content */}
                <div className="px-5 py-4 space-y-3">
                  <h3 className="font-semibold text-lg text-blue-700">
                    {item.name}
                  </h3>

                  <p className="text-gray-600">
                    <strong>অবস্থান:</strong> {item.location}
                  </p>
                  <p className="text-gray-600">
                    <strong>সেবা:</strong> {item.services}
                  </p>
                  <p className="text-gray-600">
                    <strong>অভিজ্ঞতা:</strong> {item.experience}
                  </p>
                  <p className="text-gray-600">
                    <strong>মূল্য:</strong> {item.price}
                  </p>

                  {/* Contact Details */}
                  <div className="flex gap-4 mt-4">
                    {/* Call Button */}
                    <a
                      href={`tel:${item.phone}`}
                      className="flex items-center justify-center w-full sm:w-1/2 text-center bg-[#0FABCA] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#0E9AB0] transition-all duration-300 ease-in-out"
                    >
                      <FiPhoneCall className="mr-2 text-lg" />{" "}
                      {/* Adding icon margin */}
                      <span>Call Now</span>
                    </a>

                    {/* Email Button */}
                    <a
                      href={`https://wa.me/${item.phone}`}
                      className="flex items-center justify-center w-full sm:w-1/2 text-center bg-[#0FABCA] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#0E9AB0] transition-all duration-300 ease-in-out"
                    >
                      <FaWhatsapp className="mr-2 text-lg" />{" "}
                      {/* Adding icon margin */}
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NotFoud titel={"মিস্ত্রি"} />
        )}
      </div>
    </>
  );
};
export default Mechanic;
