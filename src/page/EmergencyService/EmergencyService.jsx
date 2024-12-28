import CustomHeading from "../../components/CustomHeading/CustomHeading";
import emergencyNumbers from "./data";
import { FaPhoneAlt } from "react-icons/fa";

const EmergencyService = () => {
  const handleCall = (number) => {
    window.location.href = `tel:${number}`; // This will initiate a phone call
  };
  return (
    <>
      <CustomHeading tittel={"বাংলাদেশের জরুরি নম্বর"} />
      <div className="max-w-full sm:max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
        <div className="space-y-4">
          {emergencyNumbers.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-1 border-b border-gray-200 rounded-md"
            >
              {/* Left side for service name */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-blue-900">
                  {item.service}
                </h3>
                <p className="text-lg text-gray-700">{item.number}</p>
              </div>

              {/* Right side for "Call Now" button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleCall(item.number)}
                  className="flex justify-center items-center bg-blue-900 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  <FaPhoneAlt className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default EmergencyService;
