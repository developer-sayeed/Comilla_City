// eslint-disable-next-line react/prop-types
const CustomNotice = ({ heading, content, className }) => {
  return (
    <>
      {/* <!-- Notice Banner --> */}
      {heading && (
        <div className=" w-full text-black text-center py-3 font-bold shadow-sm z-[5px] flex justify-between items-center">
          {/* <!-- "Notice" Text --> */}
          <div className="text-lg font-semibold z-10 bg-blue-900 py-1 px-6 text-white rounded-sm">
            {heading}
          </div>

          {/* <!-- Scrolling Text --> */}
          <div
            className={`scrolling-text whitespace-nowrap flex-1 px-5 ${className}`}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};
export default CustomNotice;
