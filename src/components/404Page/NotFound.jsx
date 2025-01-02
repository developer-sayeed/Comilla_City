import React from "react";
import { Link } from "react-router";

const Page404 = () => {
  return (
    <div className="boxShadow bg-white px-10 w-full h-svh lg:flex-row gap-[30px] lg:gap-0 flex-col flex items-center justify-evenly py-20 rounded-xl">
      <div className="w-[80%] lg:w-[40%]">
        <img
          src="https://i.ibb.co/HdHH4Pb/Frame-6.png"
          alt="illustration"
          className="w-full"
        />
      </div>

      <div className="w-full lg:w-[30%] text-center lg:text-start">
        <h1 className="text-[2.5rem] sm:text-[4rem] font-[800] text-[#566FA7] leading-[80px]">
          OOPS!
        </h1>

        <h3 className="text-[#8093B8] text-[0.9rem] sm:text-[1.2rem]">
          Looks like big foot has broken the link
        </h3>

        <Link
          to={"/"}
          className="py-3 mt-8 inline-block px-6 sm:px-8 text-[0.9rem] sm:text-[1rem] rounded-full bg-[#566FA7] text-white"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Page404;
