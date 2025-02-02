import { IoIosInformationCircle } from "react-icons/io";

const Tooltip = ({ content }) => {
  return (
    <>
      <div className="relative group">
        <IoIosInformationCircle />

        <div className="absolute top-[-75px] left-[-70px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
          <p className="text-[0.9rem] w-max max-w-[200px] break-words bg-[#333] text-white rounded px-3 py-2 overflow-hidden">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default Tooltip;
