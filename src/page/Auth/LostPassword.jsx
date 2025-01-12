import React, { useState } from "react";

// icons
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";

// react router dom
import { Link } from "react-router-dom";

const LostPassword = () => {
  const [active, setActive] = useState(false);

  return (
    <main className="w-full h-auto sm:h-[100vh] bg-[#0FABCA] flex items-center justify-center sm:p-0 p-6">
      <form className="w-full sm:w-[40%] bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex items-center justify-center flex-col gap-5">
        <h3 className="text-[1.8rem] font-[700] text-gray-900 ">
          Forgot Password
        </h3>
        <input
          type="email"
          placeholder="Email"
          className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 mt-5 rounded-lg w-full"
        />

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#0FABCA] text-white border-none outline-none rounded-lg mt-3"
        >
          Reset Password
        </button>
        <div className="flex items-center justify-center w-full gap-1">
          <span className="text-[1rem] text-gray-600 font-[500]">
            Rember password
          </span>
          <span>
            <Link
              to={"/login"}
              className="text-[1rem] text-[#0FABCA] font-[500]"
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
};

export default LostPassword;
