import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createToast } from "../../utils/Toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { loginUser } from "../../features/auth/authSliceApi";

const LoginPage = () => {
  const [active, setActive] = useState(false); // Password visibility toggle state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error, message } = useSelector((state) => state.auth);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    if (!input.password || !input.email) {
      createToast("All Fields are required", "warn"); // If fields are empty, show warning
    } else {
      dispatch(loginUser(input)); // Dispatch login action
    }
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

    // Redirect after login success
    if (user) {
      if (user.isAdmin) {
        navigate("/admin/overview", { replace: true }); // Redirect to admin dashboard if admin
      } else {
        navigate("/me", { replace: true }); // Redirect to user dashboard if normal user
      }
    }
  }, [error, message, dispatch, user, navigate]);

  return (
    <main className="w-full h-auto sm:h-[110vh] bg-[#0FABCA] flex items-center justify-center sm:p-0 p-6">
      <form
        onSubmit={handleUserLogin}
        className="w-full sm:w-[40%] bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex items-center justify-center flex-col gap-5"
      >
        <h3 className="text-[1.8rem] font-[700] text-gray-900 uppercase">
          Login
        </h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={input.email}
          onChange={handleInputChange}
          className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300 mt-5 rounded-lg w-full"
        />
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
              onClick={() => setActive(false)} // Hide password
            />
          ) : (
            <BsEye
              className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
              onClick={() => setActive(true)} // Show password
            />
          )}
        </div>
        <Link
          to="/forgot-password"
          className="text-[1rem] text-[#0FABCA] font-[500]"
        >
          Forget password
        </Link>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#0FABCA] text-white border-none outline-none rounded-lg mt-3"
        >
          Login Your Account
        </button>
        <div className="flex items-center justify-center w-full gap-1">
          <span className="text-[1rem] text-gray-600 font-[500]">
            Don't have an account?{" "}
          </span>
          <span>
            <Link
              to={"/register"}
              className="text-[1rem] text-[#0FABCA] font-[500]"
            >
              Signup
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
