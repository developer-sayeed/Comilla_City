import { useParams } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import Banner from "../../components/Banner/BannerSlider";
import { shopsData } from "./data";

const ShoppingCrad = () => {
  const [rating, setRating] = useState(5);
  const { id } = useParams();

  const shop = shopsData.find((item) => item.id === parseInt(id));

  if (!shop) {
    return <div>Shop not found</div>;
  }

  // Banner img

  return (
    <>
      {shop.banner && <Banner bannerImages={shop.banner} />}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Left Side - Shop Info */}
        <div className="bg-white  p-6 rounded-lg shadow-lg sticky top-0 ">
          {/* Shop Logo or Image */}
          <div className="flex justify-center">
            <img
              src={shop.image}
              alt="Shop Logo"
              className="w-40 h-40 object-cover rounded-full border-2 border-[#0FABCA] shadow-xl"
            />
          </div>

          {/* Shop Name */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mt-4">
            {shop.name}
          </h2>

          {/* Shop Description */}
          <p className="text-gray-700 mt-4">{shop.description}</p>

          {/* Social Media Links */}
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href={shop.socialMedia.facebook}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href={shop.socialMedia.instagram}
              className="text-pink-600 hover:text-pink-800 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={shop.socialMedia.twitter}
              className="text-blue-400 hover:text-blue-600 transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Address */}
          <div className="mt-4 flex items-center space-x-2">
            <FaMapMarkerAlt className="text-gray-600" />
            <p className="text-gray-700">{shop.address}</p>
          </div>

          {/* Phone */}
          <div className="mt-2 flex items-center space-x-2">
            <FaPhoneAlt className="text-gray-600" />
            <p className="text-gray-700">{shop.phone}</p>
          </div>

          {/* Email */}
          <div className="mt-2 flex items-center space-x-2">
            <FaEnvelope className="text-gray-600" />
            <p className="text-gray-700">{shop.email}</p>
          </div>
        </div>

        {/* Right Side - Product List */}
        <div className="lg:col-span-2 sm:max-h-screen overflow-y-auto ">
          <CustomHeading
            tittel={"Our Products"}
            className={"py-0 pt-2 pb-2 mb-2"}
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
            {shop.products?.map((product) => (
              <div
                key={product.id}
                className="border bg-white border-gray-300 rounded-xl p-2 w-full md:w-[100%]"
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    alt="product/image"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
                    }
                    className="w-full h-32 object-fill"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-2 pt-0 p-1">
                  <h3 className="text-[1.1rem] font-medium line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Authors & Reviews */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mt-1">
                    <p className="text-gray-400 text-[0.9rem]">
                      by <span className="text-black">Criphin</span> in{" "}
                      <span className="text-black">Graphics</span>
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, index) => {
                          const starRating = index + 1;
                          return (
                            <FaStar
                              key={starRating}
                              className={`cursor-pointer ${
                                starRating <= rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              size={15}
                              onClick={() => setRating(starRating)}
                            />
                          );
                        })}
                      </div>
                      <span className="text-[0.8rem] text-gray-500">(4.8)</span>
                    </div>
                  </div>

                  {/* Price and Action Buttons */}
                  <div className="mt-1">
                    {/* Price above the buttons */}
                    <div className="mb-4 sm:flex-none flex items-center justify-between">
                      <span className="text-gray-400 text-[0.9rem]">
                        Price:-
                      </span>
                      <p className="text-[1.150rem] font-semibold text-[#0FABCA]">
                        ৳ 52.00
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-2 px-4 border border-[#0FABCA] text-white rounded-md flex items-center justify-center group gap-[0.5rem] text-[0.9rem] hover:bg-[#0FABCA] transition-all duration-200">
                        <IoCartOutline className="text-[1.3rem] group-hover:text-white text-[#0FABCA]" />
                      </button>

                      <button className="py-2 px-4 border border-[#0FABCA] text-[#0FABCA] hover:text-white rounded-md flex items-center justify-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0FABCA] transition-all duration-200">
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCrad;
