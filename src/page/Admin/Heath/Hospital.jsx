import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import CustomHeading from "../../../components/CustomHeading/CustomHeading";
import { IoEyeOutline } from "react-icons/io5";
import { createToast } from "../../../utils/Toastify";
import { HospitalInitialData } from "./Data";
import doctor from "../../../assets/001-doctor.png";
import { useSelector } from "react-redux";

const Hospital = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // View modal state
  const [formData, setFormData] = useState({
    hospitalName: "",
    than: "",
    fullAddress: "",
    status: "Active",
    photoLink: "",
    phone: "",
    email: "",
  });
  const [data, setData] = useState(HospitalInitialData);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [viewingHospital, setViewingHospital] = useState(null); // Store the hospital for view mode
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const Allhospital = useSelector((state) => state.health.hospital);
  const { thana } = useSelector((state) => state.user);

  // Handle Search
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  // Handle Sort
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return filteredData;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Handle Form Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Form Submit (Add/Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editingId ? { ...item, ...formData } : item
        )
      );
      createToast("Data updated successfully!", "success");
      setEditMode(false);
      setEditingId(null);
    } else {
      setData((prevData) => [...prevData, { id: Date.now(), ...formData }]);
      createToast("Data Added successfully!", "success");
    }
    setFormData({
      hospitalName: "",
      than: "",
      fullAddress: "",
      status: "Active",
    });
    setIsModalOpen(false);
  };

  // Handle Edit
  const handleEdit = (item) => {
    setFormData({
      hospitalName: item.name,
      than: item.than,
      fullAddress: item.address,
      status: item.status,
      photoLink: item.photo,
      phone: item.phone,
      email: item.email,
    });
    setEditMode(true);
    setEditingId(item.id);
    setIsModalOpen(true);
  };

  // Handle Delete with Confirmation
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (confirmed) {
      setData((prevData) => {
        const filteredData = prevData.filter((item) => item.id !== id);
        if (filteredData.length !== prevData.length) {
          createToast("Data Deleted successfully!", "danger");
        }
        return filteredData;
      });
    }
  };

  // Handle View
  const handleView = (item) => {
    setViewingHospital(item);
    setIsViewModalOpen(true);
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-50 rounded-md shadow-md overflow-hidden">
      <CustomHeading
        tittel={"Hospital List Of Comilla"}
        className={"py-[7px]"}
      />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-6 py-2 text-sm font-bold"
        >
          Add Hospital
        </button>
        <input
          placeholder="Searching..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 py-2.5 px-4 border border-gray-300 rounded-md outline-none focus:border-blue-400"
        />
      </div>

      <div className="w-full overflow-x-auto border border-gray-200 rounded-md">
        <table className="w-full text-sm table-auto bg-white">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="p-3 text-center font-medium">Serial</th>
              <th
                className="p-3 text-center font-medium cursor-pointer"
                onClick={() => handleSort("hospitalName")}
              >
                <div className="flex items-center gap-1 justify-center">
                  Hospital Name
                  <HiOutlineArrowsUpDown
                    className={`text-[1.2rem] ${
                      sortConfig.key === "hospitalName" ? "text-blue-500" : ""
                    }`}
                  />
                </div>
              </th>
              <th
                className="p-3 text-center font-medium cursor-pointer"
                onClick={() => handleSort("phone")}
              >
                <div className="flex items-center gap-1 justify-center">
                  Mobile
                  <HiOutlineArrowsUpDown
                    className={`text-[1.2rem] ${
                      sortConfig.key === "phone" ? "text-blue-500" : ""
                    }`}
                  />
                </div>
              </th>
              <th
                className="p-3 text-center font-medium cursor-pointer"
                onClick={() => handleSort("fullAddress")}
              >
                <div className="flex items-center gap-1 justify-center">
                  Full Address
                  <HiOutlineArrowsUpDown
                    className={`text-[1.2rem] ${
                      sortConfig.key === "fullAddress" ? "text-blue-500" : ""
                    }`}
                  />
                </div>
              </th>
              <th
                className="p-3 text-center font-medium cursor-pointer"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center gap-1 justify-center">
                  Status
                  <HiOutlineArrowsUpDown
                    className={`text-[1.2rem] ${
                      sortConfig.key === "status" ? "text-blue-500" : ""
                    }`}
                  />
                </div>
              </th>
              <th className="p-3 text-center font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Allhospital.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 border-t border-gray-200`}
              >
                <td className="p-3 text-center text-gray-700">{index + 1}</td>
                <td className="p-3 text-left text-gray-700">{item.name}</td>
                <td className="p-3 text-center text-gray-700">{item.phone}</td>
                <td className="p-3 text-center text-gray-700">
                  {item.address}
                </td>

                <td
                  className={`p-3 text-center font-medium  ${
                    item.status ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.status ? "Active" : "Unactive"}
                </td>
                <td className="p-3 text-center flex">
                  <button
                    onClick={() => handleEdit(item)}
                    className="text-blue-600 hover:bg-blue-50 rounded-md p-1 mx-1"
                  >
                    <MdOutlineEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:bg-red-50 rounded-md p-1 mx-1"
                  >
                    <MdDeleteOutline />
                  </button>
                  <button
                    onClick={() => handleView(item)}
                    className="text-green-600 hover:bg-green-50 rounded-md p-1 mx-1"
                  >
                    <IoEyeOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!sortedData.length && (
          <p className="text-[0.9rem] text-gray-500 py-6 text-center w-full">
            🚫 No data found!
          </p>
        )}
      </div>
      {/* Add New Hospital Modal  */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading={`${editMode ? "Edit" : "Add"} Hospital`}
      >
        <div className="p-4 bg-white rounded-md w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Hospital Name</label>
              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Thana / Upzilla</label>
              <select
                name="than"
                value={formData.than}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              >
                <option selected>Select Thana</option>
                {thana?.map((item, index) => {
                  return (
                    <option key={index + 1} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Full Address</label>
              <input
                type="text"
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Image URL</label>
              <input
                type="text"
                name="photoLink"
                value={formData.photoLink}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-gray-300 text-black rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#0FABCA] text-white rounded-md"
              >
                {editMode ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* View Hospital Modal */}
      {isViewModalOpen && (
        <Modal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          heading={viewingHospital.name}
        >
          <div className="p-6 bg-white rounded-md w-full max-w-2xl mx-auto ">
            {/* Hospital Photo */}
            <div className="mb-6 flex justify-center">
              <img
                className="w-full h-48 object-fill rounded-lg border-2 border-gray-300"
                src={
                  viewingHospital.photo
                    ? viewingHospital.photo
                    : `https://static.vecteezy.com/system/resources/previews/038/252/707/non_2x/hospital-building-illustration-medical-clinic-isolated-on-white-background-vector.jpg`
                }
                alt={viewingHospital.name || "Doctor"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://static.vecteezy.com/system/resources/previews/038/252/707/non_2x/hospital-building-illustration-medical-clinic-isolated-on-white-background-vector.jpg`;
                }}
              />
            </div>

            {/* Table for Hospital Details */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">
                      Hospital Name
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      {viewingHospital.name}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">
                      Phone
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      {viewingHospital.phone}
                    </td>
                  </tr>
                  {viewingHospital.email && (
                    <tr className="border-b">
                      <td className="px-4 py-2 font-semibold text-gray-700">
                        Email
                      </td>

                      <td className="px-4 py-2 text-gray-600">
                        {viewingHospital.email}
                      </td>
                    </tr>
                  )}
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">
                      Full Address
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      {viewingHospital.address}
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">
                      Upzilla
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      {viewingHospital.thana?.name} উপজেলা
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2 font-semibold text-gray-700">
                      Status
                    </td>
                    <td
                      className={`p-3 text-center font-medium  ${
                        viewingHospital.status
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {viewingHospital.status ? "Active" : "Unactive"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-6 py-2 bg-gray-300 text-black rounded-md font-semibold hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Hospital;
