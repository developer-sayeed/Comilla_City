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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000001e] transition-all duration-300 backdrop-blur-sm px-2"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Modal Content এ ক্লিক করলে ইভেন্ট বন্ধ হবে
        className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] bg-white rounded-lg p-4 max-h-[85vh] overflow-y-auto shadow-lg"
      >
        {/* Close Button */}
        <div className="w-full flex items-center justify-between border-b border-[#0FABCA] py-2">
          <h2 className="text-lg font-medium text-[#0FABCA] text-center flex-grow text-nowrap">
            {heading}
          </h2>
          <RxCross1
            className="p-2 text-[1.8rem] md:text-[2rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
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
