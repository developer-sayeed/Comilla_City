// icons
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";

// react router dom
import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [active, setActive] = useState(false);

  return (
    <main className="w-full min-h-[100vh] h-auto bg-[#0FABCA] flex items-center justify-center sm:py-12 p-6">
      <form className="w-full sm:w-[900px] sm:max-w-[1000px]: bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5">
        <h3 className="text-[1.8rem] font-[700] text-gray-900 text-center uppercase">
          Create a New Account
        </h3>
        <div className="flex items-center justify-between gap-4 w-full mt-5 sm:flex-row flex-col">
          <input
            type="text"
            placeholder="Full name"
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="username"
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
        </div>

        <div className="flex items-center justify-between gap-4 w-full sm:flex-row flex-col">
          <input
            type="text"
            placeholder="Phone number"
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Occupation"
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
        </div>

        <div className="flex items-center justify-between gap-4 w-full sm:flex-row flex-col">
          <input
            type="email"
            placeholder="Email"
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Confirm Email"
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
        </div>

        <div className="w-full flex items-center gap-4 justify-between sm:flex-row flex-col">
          <div className="w-full relative">
            <input
              type={active ? "text" : "password"}
              placeholder="Password"
              className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 rounded-lg w-full"
            />
            {active ? (
              <BsEyeSlash
                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                onClick={() => setActive(false)}
              />
            ) : (
              <BsEye
                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                onClick={() => setActive(true)}
              />
            )}
          </div>
          <div className="w-full relative">
            <input
              type={active ? "text" : "password"}
              placeholder="Confirm password"
              className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 rounded-lg w-full"
            />
            {active ? (
              <BsEyeSlash
                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                onClick={() => setActive(false)}
              />
            ) : (
              <BsEye
                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                onClick={() => setActive(true)}
              />
            )}
          </div>
        </div>

        <div className="text-[1rem] ">
          <input type="checkbox" name="checkbox" id="checkbox" />{" "}
          <label htmlFor="checkbox" className="cursor-pointer">
            By clicking, I agree to signup{" "}
            <Link href="#" className=" text-[#0FABCA]">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="#" className=" text-[#0FABCA]">
              Privacy Policy
            </Link>
          </label>
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer w-full sm:w-[50%]"
          >
            Create a New Account
          </button>
        </div>
        <div className="flex items-center justify-center w-full gap-1 flex-col sm:flex-row ">
          <span className="text-[1rem] text-gray-600 font-[500]">
            have already an account?{" "}
          </span>
          <span>
            <Link
              to={"/login"}
              className="text-[1rem] text-[#0FABCA] font-[500]"
            >
              Login Your Account
            </Link>
          </span>
        </div>

        <div className="w-full my-1 flex items-center justify-center gap-3">
          <hr className="w-[45%] bg-gray-400 h-[2px]" />
          <p>or</p>
          <hr className="w-[45%] bg-gray-400 h-[2px]" />
        </div>

        <div className="flex items-center justify-between w-full gap-5 sm:flex-row flex-col">
          <button className="flex items-center justify-center py-2.5 px-4 gap-4 bg-[#4267b2] rounded-lg w-full text-[1rem] font-[500] text-white">
            <FaFacebook className="text-[1.8rem] text-white" />
            Signup with Facebook
          </button>
          <button className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-[500] text-gray-600">
            <FcGoogle className="text-[2rem]" />
            Signup with Google
          </button>
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;
