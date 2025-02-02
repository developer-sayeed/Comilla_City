import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../features/auth/authSlice";
import { updateUserProfile } from "../../features/auth/authSliceApi";
import { IoIosInformationCircleOutline } from "react-icons/io";

function UpdateProfile() {
  const { user } = useSelector(userAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [thanas, setThanas] = useState([]); // State to hold thana options
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null); // Reference to the tooltip container

  // Handle Input Update
  const handleInputUpdate = (e) => {
    setEditInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Update
  const handleUserUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updateData = { ...editInput };
    delete updateData.email; // Don't allow email to be updated

    try {
      await dispatch(updateUserProfile(updateData)).unwrap();
      navigate("/me"); // Redirect to the profile page after successful update
    } catch (error) {
      console.error("Profile update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Pre-fill form with user data from Redux store
  useEffect(() => {
    if (user?.payload) {
      setEditInput((prev) => ({
        ...prev,
        _id: user.payload._id,
        name: user.payload.name,
        email: user.payload.email,
        phone: user.payload.phone,
        education: user.payload.education,
        occupation: user.payload.occupation,
        gender: user.payload.gender,
        bloodGroup: user.payload.bloodGroup,
        dob: user.payload.dob,
        city: user.payload.city,
        thana: user.payload.thana,
        fullAddress: user.payload.fullAddress,
        profilePicture: user.payload.profilePicture,
      }));
    }
  }, [user]);

  // Fetch Thana Data from API
  useEffect(() => {
    const fetchThanas = async () => {
      try {
        const response = await fetch("http://localhost:5050/api/v1/thana");
        const data = await response.json();
        if (data.payload && data.payload.thana) {
          setThanas(data.payload.thana); // Assuming API returns thana data in payload
        }
      } catch (error) {
        console.error("Error fetching thanas:", error);
      }
    };

    fetchThanas();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold mb-4">Update Your Profile</h2>
      <form onSubmit={handleUserUpdate} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            onChange={handleInputUpdate}
            value={editInput.name || ""}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            value={editInput.email || ""}
            disabled
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            name="phone"
            onChange={handleInputUpdate}
            value={editInput.phone || ""}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            name="education"
            onChange={handleInputUpdate}
            value={editInput.education || ""}
            placeholder="Enter your education"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            name="occupation"
            onChange={handleInputUpdate}
            value={editInput.occupation || ""}
            placeholder="Enter your occupation"
            className="w-full px-4 py-2 border rounded-md"
          />
          <select
            name="gender"
            onChange={handleInputUpdate}
            value={editInput.gender || ""}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select
            name="bloodGroup"
            onChange={handleInputUpdate}
            value={editInput.bloodGroup}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select your blood group</option>
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
          </select>
          <input
            type="date"
            name="dob"
            onChange={handleInputUpdate}
            value={editInput.dob || ""}
            className="w-full px-4 py-2 border rounded-md"
          />

          <select
            name="thana"
            onChange={handleInputUpdate}
            value={editInput.thana || ""}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select your thana</option>
            {thanas.length > 0 ? (
              thanas.map((thana) => (
                <option key={thana._id} value={thana._id}>
                  {thana.name}
                </option>
              ))
            ) : (
              <option value="">No thanas available</option>
            )}
          </select>
          <div className="relative">
            <input
              type="url"
              name="profilePicture"
              onChange={handleInputUpdate}
              value={editInput.profilePicture || ""}
              placeholder="Enter image URL"
              className="w-full px-4 py-2 border rounded-md"
            />
            <IoIosInformationCircleOutline
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => setShowTooltip((prev) => !prev)} // Toggle the tooltip visibility on click
              width={20}
              height={20}
            />
            {showTooltip && (
              <div
                ref={tooltipRef} // Attach ref to the tooltip
                className="absolute top-0 right-12  text-white text-sm rounded-md p-2"
              >
                <iframe
                  width="500px"
                  height="250px"
                  src="https://www.youtube-nocookie.com/embed/o-6PT_3tutI?si=R-6ZkDuSkc0P5eSn"
                  title="YouTube video player"
                  allow="accelerometer; picture-in-picture; web-share"
                  allowfullscreen
                  className="absolute top-[-350px] right-[-100px]"
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <input
          type="text"
          name="fullAddress"
          onChange={handleInputUpdate}
          value={editInput.fullAddress || ""}
          placeholder="Enter your full address"
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 rounded-md mt-4 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
