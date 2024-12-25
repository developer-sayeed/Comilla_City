import { Link } from "react-router";
import diagnosticimg from "../../assets/013-diagnostic.png";
const CustomCrad = ({ image, name, address, thana, phone, email }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className=" max-w-full ">
          <img
            className="w-full h-40 object-contain group-hover:scale-125 transition-transform duration-300 ease-in-out"
            src={image || diagnosticimg}
            alt={name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = diagnosticimg; // Fallback image if error
            }}
          />
          <div className="px-2 pt-3">
            <h1 className="text-sm font-bold  text-gray-800 mb-2 flex gap-2 items-center ">
              {name}
            </h1>

            {address && (
              <p className="text-[12px] text-gray-600 mb-2">
                <strong>ঠিকানা: </strong>
                {address}
              </p>
            )}
            {thana && (
              <p className="text-[12px] text-gray-600 mb-2">
                <strong>থানা : </strong>
                {thana}
              </p>
            )}
            {phone && (
              <p className="text-[12px] text-gray-600 mb-2">
                <strong>ফোন: </strong>
                {phone}
              </p>
            )}
            {email && (
              <p className="text-[12px] text-gray-600 mb-2">
                <strong>ইমেইল: </strong>
                {email}
              </p>
            )}
          </div>
        </div>

        <div className="  px-4 pb-4">
          <div className="flex space-x-2">
            <Link
              to={`https://www.google.com/maps/search/?q=${name},"+"${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-md border border-blue-300 bg-blue-300 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
            >
              গুগল ম্যাপ
            </Link>

            <Link
              to={`tel:${phone}`}
              className="w-full sm:w-auto rounded-md border border-blue-900 bg-blue-900 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
            >
              কল করুন
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomCrad;
