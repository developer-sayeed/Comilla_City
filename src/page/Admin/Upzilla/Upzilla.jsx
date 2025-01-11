import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import CustomHeading from "../../../components/CustomHeading/CustomHeading";
import { IoEyeOutline } from "react-icons/io5";
import { createToast } from "../../../utils/Toastify";

// 📌 Initial Data
const initialData = [
  {
    id: 1,
    name: "দেবিদ্বার",
    status: "Active",
    image: "https://via.placeholder.com/150",
    fullAddress: "দেবিদ্বার, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 2,
    name: "বরুড়া",
    status: "Inactive",
    image: "https://via.placeholder.com/150",
    fullAddress: "বরুড়া, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 3,
    name: "ব্রাহ্মণপাড়া",
    status: "Active",
    image: "https://via.placeholder.com/150",
    fullAddress: "ব্রাহ্মণপাড়া, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 4,
    name: "চান্দিনা",
    status: "Inactive",
    image: "https://via.placeholder.com/150",
    fullAddress: "চান্দিনা, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 5,
    name: "চৌদ্দগ্রাম",
    status: "Active",
    image: "https://via.placeholder.com/150",
    fullAddress: "চৌদ্দগ্রাম, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 6,
    name: "দাউদকান্দি",
    status: "Inactive",
    image: "https://via.placeholder.com/150",
    fullAddress: "দাউদকান্দি, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 7,
    name: "হোমনা",
    status: "Active",
    image: "https://via.placeholder.com/150",
    fullAddress: "হোমনা, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 8,
    name: "লাকসাম",
    status: "Inactive",
    image: "https://via.placeholder.com/150",
    fullAddress: "লাকসাম, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 9,
    name: "মুরাদনগর",
    status: "Active",
    image: "https://via.placeholder.com/150",
    fullAddress: "মুরাদনগর, কুমিল্লা, বাংলাদেশ",
  },
  {
    id: 10,
    name: "নাঙ্গলকোট",
    status: "Inactive",
    image: "https://via.placeholder.com/150",
    fullAddress: "নাঙ্গলকোট, কুমিল্লা, বাংলাদেশ",
  },
];

// 📌 Main Component
const Upzilla = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", status: "Active" });
  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // 📌 Handle Search
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  // 📌 Handle Sort
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

  // 📌 Handle Form Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 📌 Handle Form Submit (Add/Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      // Check if data has changed before updating
      if (
        formData.name !== "" &&
        formData.status !== "" &&
        (formData.name !== data.find((item) => item.id === editingId).name ||
          formData.status !== data.find((item) => item.id === editingId).status)
      ) {
        // Edit the data
        setData((prevData) =>
          prevData.map((item) =>
            item.id === editingId ? { ...item, ...formData } : item
          )
        );

        createToast("Data updated successfully!", "success"); // Toast notification for successful update
      }
      setEditMode(false);
      setEditingId(null);
    } else {
      // Add new data
      setData((prevData) => [
        ...prevData,
        { id: Date.now(), ...formData }, // using Date.now() as unique ID
      ]);
      createToast("Data Added successfully!", "success"); // Toast notification for successful add
    }
    setFormData({ name: "", status: "Active" }); // Reset form data
    setIsModalOpen(false); // Close the modal
  };

  // 📌 Handle Edit (Set Data in Form for Editing)
  const handleEdit = (item) => {
    setFormData({ name: item.name, status: item.status });
    setEditMode(true);
    setEditingId(item.id);
    setIsModalOpen(true);
  };

  // 📌 Handle Delete with Confirmation
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (confirmed) {
      setData((prevData) => {
        const filteredData = prevData.filter((item) => item.id !== id);
        if (filteredData.length !== prevData.length) {
          createToast("Data Deleted successfully!", "danger"); // Toast notification for successful delete
        }
        return filteredData;
      });
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-50 rounded-md shadow-md overflow-hidden">
      <CustomHeading tittel={"Thana & Upzilla List"} className={"py-[7px]"} />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-4">
        {/* Add Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-6 py-2 text-sm font-bold"
        >
          Add Thana & Upzilla
        </button>
        {/* 📌 Search Bar */}
        <input
          placeholder="অনুসন্ধান করুন..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 py-2.5 px-4 border border-gray-300 rounded-md outline-none focus:border-blue-400"
        />
      </div>

      {/* 📌 Table */}
      <div className="w-full overflow-x-auto border border-gray-200 rounded-md">
        <table className="w-full text-sm table-auto bg-white">
          {/* Table Header */}
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="p-3 text-center font-medium">Serial</th>
              <th
                className="p-3 text-center font-medium cursor-pointer"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1 justify-center">
                  Name
                  <HiOutlineArrowsUpDown
                    className={`text-[1.2rem] ${
                      sortConfig.key === "name" ? "text-blue-500" : ""
                    }`}
                  />
                </div>
              </th>
              <th className="p-3 text-center font-medium">Location</th>
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

          {/* Table Body */}
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 border-t border-gray-200`}
              >
                <td className="p-3 text-center text-gray-700">{index + 1}</td>
                <td className="p-3 text-left text-gray-700">{item.name}</td>
                <td className="p-3 text-center text-gray-700">
                  {item.fullAddress}
                </td>
                <td
                  className={`p-3 text-center font-medium ${
                    item.status === "Active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.status}
                </td>
                <td className="p-3 text-center">
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
                  <button className="text-green-600 hover:bg-green-50 rounded-md p-1 mx-1">
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

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        heading={`${editMode ? "Edit" : "Add"} Data`}
      >
        <div className="p-4 bg-white rounded-md  w-full ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Full Address</label>
              <input
                type="text"
                name="address"
                value={formData.fullAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Thana Photo</label>
              <input
                type="text"
                name="address"
                value={formData.fullAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#0FABCA] text-white px-6 py-2 rounded-md hover:bg-[#0FABCA] transition duration-200"
              >
                {editMode ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Upzilla;
