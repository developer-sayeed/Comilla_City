import {
  FaUserMd,
  FaHospital,
  FaHeartbeat,
  FaBriefcaseMedical,
  FaAmbulance,
  FaTint,
  FaExchangeAlt,
  FaHome,
  FaSchool,
  FaFireExtinguisher,
  FaTruck,
  FaShieldAlt,
  FaHotel,
  FaWrench,
  FaSuitcase,
  FaIndustry,
  FaBuilding,
  FaCut,
  FaAppleAlt,
  FaTabletAlt,
  FaApple,
  FaFish,
  FaBook,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router";

const AdminDashboard = () => {
  const categories = [
    {
      name: "Doctor",
      icon: <FaUserMd />,
      color: "bg-blue-600",
      link: "/doctor",
      count: 50, // Add count
    },
    {
      name: "Hospital",
      icon: <FaHospital />,
      color: "bg-green-600",
      link: "/hospital",
      count: 100, // Add count
    },
    {
      name: "Health Consultation",
      icon: <FaHeartbeat />,
      color: "bg-yellow-600",
      link: "/health-consultation",
      count: 75, // Add count
    },
    {
      name: "Diagnostic",
      icon: <FaBriefcaseMedical />,
      color: "bg-red-600",
      link: "/diagnostic",
      count: 20, // Add count
    },
    {
      name: "Ambulance",
      icon: <FaAmbulance />,
      color: "bg-blue-700",
      link: "/ambulance",
      count: 12, // Add count
    },
    {
      name: "Blood Donner",
      icon: <FaTint />,
      color: "bg-red-700",
      link: "/blood-donner",
      count: 30, // Add count
    },
    {
      name: "Money Exchange",
      icon: <FaExchangeAlt />,
      color: "bg-green-700",
      link: "/money-exchange",
      count: 50, // Add count
    },
    {
      name: "House Rent",
      icon: <FaHome />,
      color: "bg-teal-600",
      link: "/house-rent",
      count: 25, // Add count
    },
    {
      name: "Institutions",
      icon: <FaSchool />,
      color: "bg-blue-500",
      link: "/educational-institutions",
      count: 15, // Add count
    },
    {
      name: "Fire Service",
      icon: <FaFireExtinguisher />,
      color: "bg-red-500",
      link: "/fire-service",
      count: 10, // Add count
    },
    {
      name: "Courier Service",
      icon: <FaTruck />,
      color: "bg-yellow-700",
      link: "/courier-service",
      count: 60, // Add count
    },
    {
      name: "Police Station",
      icon: <FaShieldAlt />,
      color: "bg-gray-800",
      link: "/police-station",
      count: 5, // Add count
    },
    {
      name: "Hotel",
      icon: <FaHotel />,
      color: "bg-blue-900",
      link: "/hotel",
      count: 20,
    },
    {
      name: "Mechanic",
      icon: <FaWrench />,
      color: "bg-gray-600",
      link: "/mechanic",
      count: 12, // Add count
    },
    {
      name: "Jobs",
      icon: <FaSuitcase />,
      color: "bg-purple-600",
      link: "/jobs",
      count: 80, // Add count
    },
    {
      name: "Entrepreneur",
      icon: <FaIndustry />,
      color: "bg-teal-700",
      link: "/entrepreneur",
      count: 25, // Add count
    },
    {
      name: "Bank",
      icon: <FaBuilding />,
      color: "bg-green-500",
      link: "/bank",
      count: 40, // Add count
    },
    {
      name: "Restaurant",
      icon: <FaCut />,
      color: "bg-orange-500",
      link: "/restaurant",
      count: 100, // Add count
    },
    {
      name: "Nursery",
      icon: <FaAppleAlt />,
      color: "bg-teal-500",
      link: "/nursery",
      count: 15, // Add count
    },
    {
      name: "IT Services",
      icon: <FaTabletAlt />,
      color: "bg-gray-500",
      link: "/it-services",
      count: 50, // Add count
    },
    {
      name: "Cafes",
      icon: <FaApple />,
      color: "bg-pink-600",
      link: "/cafes",
      count: 30,
    },
    {
      name: "Pharmacy",
      icon: <FaFish />,
      color: "bg-green-400",
      link: "/pharmacy",
      count: 45, // Add count
    },
    {
      name: "Beauty Parlour",
      icon: <FaCut />,
      color: "bg-pink-500",
      link: "/beauty-parlour",
      count: 60, // Add count
    },
    {
      name: "Gym Fitness",
      icon: <FaAppleAlt />,
      color: "bg-purple-800",
      link: "/gym-fitness",
      count: 80, // Add count
    },
    {
      name: "Internet Service",
      icon: <FaTabletAlt />,
      color: "bg-blue-400",
      link: "/internet-service",
      count: 35, // Add count
    },
    {
      name: "Animal Services",
      icon: <FaFish />,
      color: "bg-gray-300",
      link: "/animal-services",
      count: 20, // Add count
    },
    {
      name: "Public Library",
      icon: <FaBook />,
      color: "bg-indigo-600",
      link: "/public-library",
      count: 90, // Add count
    },
    {
      name: "Shopping Store",
      icon: <FaShoppingCart />,
      color: "bg-pink-700",
      link: "/shopping-store",
      count: 110, // Add count
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className={`flex items-center p-4  rounded-lg shadow-md transition-transform transform hover:scale-105`}
          >
            {/* Icon on the left */}
            <div className="p-3 bg-indigo-100 rounded-full text-4xl text-indigo-600 mr-4">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-semibold capitalize text-gray-800">
                {item.name}
              </h3>
              <span className="text-sm text-gray-500">
                {item.count} {item.name}
              </span>
            </div>

            {/* Hover Effects */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-indigo-600 transition-all"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
