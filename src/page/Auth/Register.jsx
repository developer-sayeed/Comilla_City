// icons
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

// react router dom
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createToast } from "../../utils/Toastify";
import { createUser } from "../../features/auth/authSliceApi";
import { setMessageEmpty } from "../../features/auth/authSlice";

const RegisterPage = () => {
  // Show hide password
  const [active, setActive] = useState(false);
  // dispatch events
  const dispatch = useDispatch();
  // Auth handler
  const { error, message } = useSelector((state) => state.auth);

  const [input, SetInput] = useState({
    name: "",
    username: "",
    occupation: "",
    email: "",
    phone: "",
    cemail: "",
    password: "",
    cpassword: "",
  });
  // Handle Input Chnage

  const handleInputChange = (e) => {
    SetInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserRegister = (e) => {
    e.preventDefault();

    if (
      !input.name ||
      !input.username ||
      !input.phone ||
      !input.email ||
      !input.cemail ||
      !input.occupation ||
      !input.password ||
      !input.cpassword
    ) {
      createToast("All Fields Required", "warning");
    } else if (input.password !== input.cpassword) {
      createToast("Password Doesn't Match", "warn");
    } else if (input.email !== input.cemail) {
      createToast("Email Doesn't Match", "warn");
    } else {
      // Dispatch createUser action
      dispatch(
        createUser({
          name: input.name,
          username: input.username,
          phone: input.phone,
          occupation: input.occupation,
          email: input.email,
          password: input.password,
        })
      )
        .then((result) => {
          // Check if registration was successful
          if (result.type === "createUser/fulfilled") {
            // Reset form input only on success
            createToast("Registration Successful!", "success");
            SetInput({
              name: "",
              username: "",
              phone: "",
              occupation: "",
              email: "",
              cemail: "",
              password: "",
              cpassword: "",
            });
          }
        })
        .catch((error) => {
          createToast("Registration Failed: " + error.message, "error");
        });
    }
  };

  // useEffect
  useEffect(() => {
    if (error) {
      createToast(error, "error");
      dispatch(setMessageEmpty());
    } else if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message]);
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
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            value={input.username}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
        </div>

        <div className="flex items-center justify-between gap-4 w-full sm:flex-row flex-col">
          <input
            type="text"
            placeholder="Phone number"
            name="phone"
            value={input.phone}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Occupation"
            name="occupation"
            value={input.occupation}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
        </div>

        <div className="flex items-center justify-between gap-4 w-full sm:flex-row flex-col">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Confirm Email"
            name="cemail"
            value={input.cemail}
            onChange={handleInputChange}
            className="py-3 px-4 border focus:outline-[#0FABCA] border-gray-300  rounded-lg w-full"
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

        {/* <div className="w-full my-1 flex items-center justify-center gap-3">
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
        </div> */}
      </form>
    </main>
  );
};

export default RegisterPage;
