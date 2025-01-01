import React, { useState, useEffect } from "react";

// react icons
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Setting = () => {
  const [isEyeOpen1, setIsEyeOpen1] = useState(false); // For current password
  const [isEyeOpen2, setIsEyeOpen2] = useState(false); // For new password
  const [isEyeOpen3, setIsEyeOpen3] = useState(false); // For confirm password
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For confirm new password
  const [signal, setSignal] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
    length: false,
    strong: false,
    match: true, // Match status for passwords
  });
  const [errorMessage, setErrorMessage] = useState(""); // For error message if passwords don't match

  useEffect(() => {
    // Update signal.match based on password match status
    setSignal((prevSignal) => ({
      ...prevSignal,
      match: newPassword === confirmPassword, // Check if passwords match
    }));
  }, [newPassword, confirmPassword]); // Re-evaluate match status whenever newPassword or confirmPassword changes

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setNewPassword(password);

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setSignal({
      lowercase: hasLowerCase,
      uppercase: hasUpperCase,
      number: hasNumber,
      symbol: hasSymbol,
      length: password.length >= 8,
      strong:
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSymbol &&
        password.length >= 8,
      match: newPassword === confirmPassword, // Check if passwords match
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the new password and confirm password match
    if (newPassword !== confirmPassword) {
      setSignal((prevSignal) => ({
        ...prevSignal,
        match: false, // Update match status if passwords don't match
      }));
      return;
    }

    setSignal((prevSignal) => ({
      ...prevSignal,
      match: true, // Reset match status if passwords match
    }));

    // Proceed with password change logic (e.g., API call)
    setErrorMessage(""); // Clear error if passwords match
    alert("Password changed successfully!"); // Success message (for demo purpose)
  };

  return (
    <div className="w-full">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Change Your Password
      </h1>

      {/* Current Password Field */}
      <label
        htmlFor="current-password"
        className="text-[15px] text-text font-[400]"
      >
        Current Password
      </label>
      <div className="w-full relative">
        <input
          type={isEyeOpen1 ? "text" : "password"}
          name="current-password"
          id="current-password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Enter current password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        {isEyeOpen1 ? (
          <IoEyeOutline
            className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen1(false)}
          />
        ) : (
          <IoEyeOffOutline
            className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen1(true)}
          />
        )}
      </div>

      {/* New Password Field */}
      <label
        htmlFor="new-password"
        className="text-[15px] text-text font-[400] mt-4"
      >
        New Password
      </label>
      <div className="w-full relative">
        <input
          type={isEyeOpen2 ? "text" : "password"}
          name="new-password"
          id="new-password"
          value={newPassword}
          onChange={handlePasswordChange}
          placeholder="Enter new password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        {isEyeOpen2 ? (
          <IoEyeOutline
            className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen2(false)}
          />
        ) : (
          <IoEyeOffOutline
            className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen2(true)}
          />
        )}
      </div>

      {/* Confirm New Password Field */}
      <label
        htmlFor="confirm-password"
        className="text-[15px] text-text font-[400] mt-4"
      >
        Confirm New Password
      </label>
      <div className="w-full relative">
        <input
          type={isEyeOpen3 ? "text" : "password"}
          name="confirm-password"
          min={8}
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
        />

        {isEyeOpen3 ? (
          <IoEyeOutline
            className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen3(false)}
          />
        ) : (
          <IoEyeOffOutline
            className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen3(true)}
          />
        )}
      </div>

      {/* Password Requirements Section */}
      <h3 className="text-gray-900 font-[500] text-[1rem] mt-6">
        Your new password must contain:
      </h3>
      <div className="w-full mt-2 flex-col flex gap-[6px]">
        <div
          className={`${
            signal.length ? "text-green-500" : "text-gray-500"
          } text-[0.8rem] flex items-center gap-[8px]`}
        >
          {signal.length ? <MdDone className="text-[1rem]" /> : <RxCross1 />}
          Minimum number of characters is 8.
        </div>
        <div
          className={`${
            signal.uppercase ? "text-green-500" : "text-gray-500"
          } text-[0.8rem] flex items-center gap-[8px]`}
        >
          {signal.uppercase ? <MdDone className="text-[1rem]" /> : <RxCross1 />}
          Should contain uppercase.
        </div>
        <div
          className={`${
            signal.lowercase ? "text-green-500" : "text-gray-500"
          } text-[0.8rem] flex items-center gap-[8px]`}
        >
          {signal.lowercase ? <MdDone className="text-[1rem]" /> : <RxCross1 />}
          Should contain lowercase.
        </div>
        <div
          className={`${
            signal.number ? "text-green-500" : "text-gray-500"
          } text-[0.8rem] flex items-center gap-[8px]`}
        >
          {signal.number ? <MdDone className="text-[1rem]" /> : <RxCross1 />}
          Should contain numbers.
        </div>
        <div
          className={`${
            signal.symbol ? "text-green-500" : "text-gray-500"
          } text-[0.8rem] flex items-center gap-[8px]`}
        >
          {signal.symbol ? <MdDone className="text-[1rem]" /> : <RxCross1 />}
          Should contain special characters.
        </div>
        <div
          className={`${
            signal.match ? "text-green-500" : "text-gray-500"
          } text-[0.8rem] flex items-center gap-[8px]`}
        >
          {signal.match ? <MdDone className="text-[1rem]" /> : <RxCross1 />}
          Passwords Match
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 bg-[#3B9DF8] text-white px-6 py-3 w-full rounded-md"
      >
        Change Password
      </button>
    </div>
  );
};

export default Setting;
