import CustomCrad from "../../components/Card/CustomCrad";
import CustomHeading from "../../components/CustomHeading/CustomHeading";
import { superintendentOffice } from "./data";
import { useEffect, useState } from "react";
import thana from "../../assets/policeman.png";
import { Link } from "react-router";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import {
  MdContactPhone,
  MdLocationCity,
  MdOutlineContactPhone,
} from "react-icons/md";

const PoliceStation = () => {
  const [thanas, setThanas] = useState([]); // State to hold thana options

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
    <>
      <CustomHeading tittel={"Comilla Zilla Police Station List"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {thanas.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="max-w-full">
                <div className="imagescetion">
                  <img
                    className="w-full h-32 object-fill group-hover:scale-125 transition-transform duration-300 ease-in-out"
                    src={item.photo || item.photo}
                    alt={item.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = thana; // Fallback image if error
                    }}
                  />
                </div>

                <div className="content">
                  <div className="px-2 pt-3">
                    <h1 className="text-xl font-bold text-gray-800 mb-2 flex gap-2 items-center">
                      {item.name} থানা
                    </h1>

                    <p className="text-[12px] text-gray-600 mb-2 flex items-center gap-1">
                      <MdLocationCity className="h-3  w-3 text-[#0FABCA]" />
                      <strong>Upzilla:- </strong> {`${item.name} উপজেলা`}
                    </p>
                    <p className="text-[12px] text-gray-600 mb-2 flex items-center gap-1">
                      <FaPhoneAlt className="h-3  w-3 text-[#0FABCA]" />
                      <strong>Officer in charge :- </strong> {item.oc[0]}
                    </p>
                    <p className="text-[12px] text-gray-600 mb-2 flex items-center gap-1">
                      <MdContactPhone className="h-3  w-3 text-[#0FABCA]" />
                      <strong>Inspector :- </strong> {item.inspector[0]}
                    </p>
                    <p className="text-[12px] text-gray-600 mb-2 flex items-center gap-1">
                      <MdOutlineContactPhone className="h-3  w-3 text-[#0FABCA]" />
                      <strong>Duty Officer :- </strong> {item.duty_officer[0]}
                    </p>
                    <p className="text-[12px] text-gray-600 mb-2 flex items-center gap-1">
                      <FaEnvelope className="h-3  w-3 text-[#0FABCA]" />
                      <strong>Email </strong> {item.email}
                    </p>
                    <p className="text-[12px] text-gray-600 mb-2 flex items-center gap-1">
                      <FaMapMarkerAlt className="h-3  w-3 text-[#0FABCA]" />
                      <strong>Address:- </strong> {item.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="px-4 pb-4 pt-2">
                <div className="flex space-x-2">
                  <Link
                    to={item.googleMap}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto rounded-md border border-[#0FABCA] text-[#0FABCA] hover:bg-[#0FABCA] hover:border-[#0FABCA] hover:text-white transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                  >
                    Google Map
                  </Link>

                  <Link
                    to={`tel:${item.phone}`}
                    className="w-full sm:w-auto rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                  >
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* পুলিশ সুপার */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
          Important Contact Numbers of Cumilla District Police
        </h2>

        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left md:text-center text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-4 py-2 text-left md:text-center text-sm font-semibold text-gray-700">
                  Phone Numbers
                </th>
                <th className="px-4 py-2 text-left md:text-center text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-4 py-2 text-left md:text-center text-sm font-semibold text-gray-700">
                  Phone Numbers
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 text-sm text-gray-800">
                  Control Room
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  +88-081-65021, 01727-115500
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  Cumilla Police Super
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  +88-081-76392, 01713-373678
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-2 text-sm text-gray-800">
                  Additional Police Super (ASP-Cumilla North)
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  +88-081-77114, 01713-373680
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  Additional Police Super (ASP-Cumilla South)
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  +88-081-76712, 01713-372679
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-2 text-sm text-gray-800">
                  Additional Police Super (DSB-Comilla)
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  +88-081-76837, 01769-690063
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">
                  Additional Police Super (Headquarter)
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  +88-081-650099, 01713-373681
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row md:justify-around mt-6 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              To Make Any Complaint:
            </h3>
            <a
              href="mailto:complain@comillapolice.gov.bd"
              className="text-blue-600 hover:text-blue-800 transition duration-200 block"
            >
              complain@comillapolice.gov.bd
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              For Any Kind of Information:
            </h3>
            <a
              href="mailto:info@comillapolice.gov.bd"
              className="text-blue-600 hover:text-blue-800 transition duration-200 block"
            >
              info@comillapolice.gov.bd
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Media Contact:
            </h3>
            <a
              href="mailto:media@comillapolice.gov.bd"
              className="text-blue-600 hover:text-blue-800 transition duration-200 block"
            >
              media@comillapolice.gov.bd
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default PoliceStation;
