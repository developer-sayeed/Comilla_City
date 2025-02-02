import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Import navigate hook
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { createToast } from "../../utils/Toastify";
import {
  activateAccount,
  createUser,
  resendOtp,
} from "../../features/auth/authSliceApi";
import UseAuthUserState from "../../hooks/UseAuthUserState";

const RegisterPage = () => {
  const { user } = UseAuthUserState();
  const [active, setActive] = useState();
  const navigate = useNavigate(); // Initialize navigate
  const dispatch = useDispatch();

  const [input, SetInput] = useState({
    name: "",
    username: "",
    email: "",
    cemail: "",
    password: "",
    cpassword: "",
  });
  const [otp, setOtp] = useState("");

  const { message, error, loading, isAuthenticated } = useSelector(
    (state) => state.auth
  ); // isAuthenticated added

  // handle input change
  const handleInputChange = (e) => {
    SetInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle user register
  const handleUserRegister = async (e) => {
    e.preventDefault();

    if (
      !input.name ||
      !input.username ||
      !input.email ||
      !input.cemail ||
      !input.password ||
      !input.cpassword
    ) {
      createToast("All Fields Required", "warning");
    } else if (input.email !== input.cemail) {
      createToast("Email Don't Match", "warning");
    } else if (input.password !== input.cpassword) {
      createToast("Passwords Don't Match", "warning");
    } else {
      try {
        const userData = {
          name: input.name,
          email: input.email,
          password: input.password,
          username: input.username,
        };
        dispatch(createUser(userData)); // Register and trigger OTP email
        createToast("Please check your email for OTP", "success");
      } catch (err) {
        createToast("Error registering user: " + err.message, "error");
      }
    }
  };

  // Handle OTP Submit and Auto Login after OTP verification
  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      createToast("Please enter the OTP", "warning");
      return;
    }

    try {
      // Dispatch action to activate account
      const response = await dispatch(activateAccount({ otp })).unwrap(); // unwrap() ব্যবহার করলে সরাসরি response পাওয়া যায়

      if (response.success) {
        createToast("Account successfully activated", "success");

        // Navigate to login page after successful OTP verification
        navigate("/login");
      } else {
        createToast("Invalid OTP! Please try again", "error");
      }
    } catch (err) {
      createToast("OTP Verification Failed: " + err.message, "error");
    }
  };

  //   Handle Resend OTP Verification
  const handleResendOtp = async () => {
    if (!input.email) {
      createToast("Email is required to resend OTP", "warning");
      return;
    }

    try {
      // Dispatch action to resend OTP
      dispatch(resendOtp(input.email));
      createToast("OTP has been resent to your email", "success");
    } catch (err) {
      createToast("Error resending OTP: " + err.message, "error");
    }
  };
  // Redirect if already authenticated
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/login"); // Redirect if the user is already authenticated
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <main className="w-full min-h-[100vh] h-auto bg-[#0FABCA] flex items-center justify-center sm:py-12 p-6">
      <form
        onSubmit={handleUserRegister}
        className="w-full sm:w-[900px] sm:max-w-[1000px]: bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5"
      >
        <h3 className="text-[1.8rem] font-[700] text-gray-900 text-center uppercase">
          Create a New Account
        </h3>
        <div className="flex items-center justify-between gap-4 w-full mt-5 sm:flex-row flex-col">
          <input
            type="text"
            placeholder="Full name"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            value={input.username}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="flex items-center justify-between gap-4 w-full sm:flex-row flex-col">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Confirm Email"
            name="cemail"
            value={input.cemail}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="w-full flex items-center gap-4 justify-between sm:flex-row flex-col">
          <div className="w-full relative">
            <input
              type={active ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
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
              name="cpassword"
              value={input.cpassword}
              onChange={handleInputChange}
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
        {error && createToast(error, "error")}
        {/* {message && createToast(message, "success")} */}
        {!user?.isActive && otp && (
          <>
            <input
              type="text"
              placeholder="Enter OTP 6 digit number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 rounded-lg w-full"
            />
            <button
              type="submit"
              onClick={handleOtpSubmit}
              className="rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer w-full sm:w-[50%]"
            >
              Verify OTP
            </button>
            <button
              type="button"
              onClick={handleResendOtp}
              className="rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer w-full sm:w-[50%]"
            >
              Resend OTP
            </button>
          </>
        )}

        <div className="text-[1rem] ">
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <label htmlFor="checkbox" className="cursor-pointer">
            By clicking, I agree to signup
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

        {/* <div className="w-full my-1 flex items-center gap-5">
          <div className="border-b border-[#0FABCA] w-[50%]"></div>
          <span className="text-gray-400">Or</span>
          <div className="border-b border-[#0FABCA] w-[50%]"></div>
        </div>
        <div className="flex items-center justify-between gap-5 mt-5">
          <div
            className="flex items-center justify-center gap-3 cursor-pointer px-6 py-3 border-[1px] border-gray-300 rounded-lg"
            onClick={() => handleGoogleAuth()}
          >
            <FcGoogle className="text-[2.2rem]" />
            <span className="font-[600]">Google</span>
          </div>
          <div
            className="flex items-center justify-center gap-3 cursor-pointer px-6 py-3 border-[1px] border-gray-300 rounded-lg"
            onClick={() => handleFacebookAuth()}
          >
            <FaFacebook className="text-[2.2rem] text-[#4267B2]" />
            <span className="font-[600]">Facebook</span>
          </div>
        </div> */}
      </form>
    </main>
  );
};

export default RegisterPage;
