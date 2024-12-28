/* eslint-disable react/prop-types */
import { Link } from "react-router";
import diagnosticimg from "../../assets/013-diagnostic.png";
const CustomCrad = ({
  className,
  image,
  name,
  addressHeading,
  address,
  phoneHeading,
  phone,
  tittel1heading,
  tittel1,
  tittel2heading,
  tittel2,
  tittel3heading,
  tittel3,
  tittel4heading,
  tittel4,
  tittel5heading,
  tittel5,
}) => {
  return (
    <>
      <div className={`bg-white shadow-lg rounded-lg overflow-hidden `}>
        <div className={` max-w-full ${className}`}>
          {image && (
            <div className="imagescetion">
              <img
                className="w-full h-32 object-contain group-hover:scale-125 transition-transform duration-300 ease-in-out"
                src={image || diagnosticimg}
                alt={name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = diagnosticimg; // Fallback image if error
                }}
              />
            </div>
          )}

          <div className="content">
            {/* content */}
            <div className="px-2 pt-3">
              <h1 className="text-sm font-bold  text-gray-800 mb-2 flex gap-2 items-center ">
                {name}
              </h1>
              {tittel1heading && (
                <p className="text-[12px] text-gray-600 mb-2">
                  <strong>{tittel1heading}: </strong>
                  {tittel1}
                </p>
              )}
              {tittel2heading && (
                <p className="text-[12px] text-gray-600 mb-2">
                  <strong>{tittel2heading}: </strong>
                  {tittel2}
                </p>
              )}
              {tittel3heading && (
                <p className="text-[12px] text-gray-600 mb-2">
                  <strong>{tittel3heading}: </strong>
                  {tittel3}
                </p>
              )}
              {tittel4heading && (
                <p className="text-[12px] text-gray-600 mb-2">
                  <strong>{tittel4heading}: </strong>
                  {tittel4}
                </p>
              )}

              {tittel5heading && (
                <p className="text-[12px] text-gray-600 mb-2">
                  <strong>{tittel5heading}: </strong>
                  {tittel5}
                </p>
              )}
              {phoneHeading && (
                <p className="text-[12px] text-gray-600 mb-2">
                  <strong>{phoneHeading}: </strong>
                  {phone}
                </p>
              )}
              {addressHeading && (
                <p className="text-[12px] text-gray-600 mb-2">
                  <strong>{addressHeading}: </strong>
                  {address}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* button */}
        <div className="  px-4 pb-4 pt-2">
          <div className="flex space-x-2">
            {name && tittel1heading && (
              <Link
                to={`https://www.google.com/maps/search/?q=${name},"+"${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-md border border-blue-900  text-blue-900 hover:bg-blue-900 hover:border-blue-900 hover:text-white transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
              >
                গুগল ম্যাপ
              </Link>
            )}
            {phone && (
              <Link
                to={`tel:${phone}`}
                className="w-full sm:w-auto rounded-md border border-blue-900 bg-blue-900 text-white hover:text-blue-950 hover:bg-white hover:border-blue-950 transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
              >
                কল করুন
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomCrad;
