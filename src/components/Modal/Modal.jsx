import { RxCross1 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children, heading }) => {
  if (!isOpen) return null; // Modal বন্ধ থাকলে কিছুই দেখাবে না

  // Modal বাইরে ক্লিক হ্যান্ডলার
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300 backdrop-blur-sm overflow-x-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Modal Content এ ক্লিক করলে ইভেন্ট বন্ধ হবে
        className="w-[90%] lg:w-[40%] bg-[#ffffff] rounded-lg p-4 max-h-[80vh] overflow-y-auto" // Add max-height and scroll
      >
        {/* Close Button */}
        <div className="w-full flex items-center justify-between border-b border-[#0FABCA] py-1">
          <h2 className="text-lg font-medium text-center text-[#0FABCA]">
            {heading}
          </h2>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={onClose}
          />
        </div>
        {/* Modal Content */}
        <div className="w-full pl-1 lg:pl-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
