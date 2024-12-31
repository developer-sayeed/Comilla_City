import React, { useState } from "react";

// react icons
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";

const ProductCard = () => {
  const [rating, setRating] = useState(5);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="border border-gray-300 rounded-xl p-2 w-full md:w-[95%] mb-4">
      {/* product image */}
      <div className="relative">
        <img
          alt="product/image"
          src="https://i.ibb.co.com/cTTfNRw/Link-1.png"
          className="w-full"
        />
      </div>

      {/* product details */}
      <div className="mt-2 pt-0 p-1">
        <h3 className="text-[1.1rem] font-medium line-clamp-1">
          Redmi Note 12 Pro
        </h3>

        {/* authors & reviews */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-1">
          <p className="text-gray-400 text-[0.9rem]">
            <span className="text-black">Smart Phone</span>
          </p>
        </div>

        {/* price and action btn */}
        <div className="">
          <div>
            <p className="text-[1.150rem] font-semibold text-[#0FABCA]">
              $52.00
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <button className="py-2 px-4 border border-[#0FABCA] text-white rounded-md flex items-center group gap-[0.5rem] text-[0.9rem] hover:bg-[#0FABCA] transition-all duration-200">
              <IoCartOutline className="text-[1.3rem] group-hover:text-white text-[#0FABCA]" />
            </button>

            <button className="py-2 px-4 border border-[#0FABCA] text-[#0FABCA] hover:text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0FABCA] transition-all duration-200">
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
