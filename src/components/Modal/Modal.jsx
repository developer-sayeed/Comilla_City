import { RxCross1 } from "react-icons/rx";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
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
      className="w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Modal Content এ ক্লিক করলে ইভেন্ট বন্ধ হবে
        className="w-[90%] lg:w-[40%] bg-[#ffffff] rounded-lg p-4"
      >
        {/* Close Button */}
        <div className="w-full flex items-end justify-end">
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={onClose}
          />
        </div>
        {/* Modal Content */}
        <div className="w-full pl-3 lg:pl-8">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
