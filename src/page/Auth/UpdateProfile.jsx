import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGenderless,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function UpdateProfile() {
  // State to store user profile data
  const [userData, setUserData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    profilePicture: "",
    occupation: "",
    gender: "",
    location: "",
    password: "",
  });

  // State for loading, error, and show password
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const navigate = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle file change (Profile Picture)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData({ ...userData, profilePicture: URL.createObjectURL(file) });
    }
  };

  // Handle URL input for profile picture
  const handleUrlChange = (e) => {
    setUserData({ ...userData, profilePicture: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    // Simulate an API response delay
    setTimeout(() => {
      setLoading(false);
      navigate("/me"); // Redirect after successful update
    }, 2000);
  };

  // Optionally, load user data from an API (when the component mounts)
  useEffect(() => {
    setUserData({
      username: "abusayeed0325", // Example username
      name: "Abu Sayeed Riday",
      email: "riday@example.com",
      phone: "0123456789",
      profilePicture: "https://example.com/profile.jpg",
      occupation: "Software Developer",
      gender: "Male",
      location: "Dhaka, Bangladesh",
      password: "123456", // Default password (can be kept empty or null)
    });
  }, []);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mx-auto  px-4">
      <h2 className="text-xl font-bold mb-4">Update Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full-width inputs on mobile and two-column layout on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Username (Disabled) */}
          <div className="relative">
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-[#3B9DF8] focus:ring-[#3B9DF8] bg-gray-200"
              placeholder="Enter your username"
              disabled
              required
            />
            <FaUser className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Email (Disabled) */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-[#3B9DF8] focus:ring-[#3B9DF8] bg-gray-200"
              placeholder="Enter your email"
              disabled
              required
            />
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-[#3B9DF8] focus:ring-[#3B9DF8] text-gray-700"
              placeholder="Enter your name"
              required
            />
            <FaUser className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-[#3B9DF8] focus:ring-[#3B9DF8] text-gray-700"
              placeholder="Enter your phone number"
              required
            />
            <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Occupation */}
          <div className="relative">
            <input
              type="text"
              name="occupation"
              value={userData.occupation}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-[#3B9DF8] focus:ring-[#3B9DF8] text-gray-700"
              placeholder="Enter your occupation"
              required
            />
            <FaBriefcase className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Gender */}
          <div className="relative">
            <select
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-[#3B9DF8] focus:ring-[#3B9DF8] text-gray-700"
              required
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <FaGenderless className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Location */}
          <div className="relative">
            <input
              type="text"
              name="location"
              value={userData.location}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-[#3B9DF8] focus:ring-[#3B9DF8] text-gray-700"
              placeholder="Enter your location"
              required
            />
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-[#3B9DF8] focus:ring-[#3B9DF8] text-gray-700"
              placeholder="Enter your password"
              required
            />
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            {/* Toggle Password Visibility Icon */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Profile Picture (URL or File upload) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Profile Picture (URL or File)
          </label>
          <div className="flex flex-col gap-2">
            {/* URL Input */}
            <input
              type="url"
              name="profilePicture"
              value={userData.profilePicture}
              onChange={handleUrlChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter image URL"
            />
            {/* File Upload */}
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {userData.profilePicture && (
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="w-20 h-20 mt-4 rounded-full object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#0FABCA] text-white font-semibold rounded-md hover:bg-[#0FABCA]"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
