import CustomHeading from "../../components/CustomHeading/CustomHeading";
import shopLogo from "../../assets/shop.png";
import { shopsData } from "./data";
import { Link } from "react-router";

const Shopping = () => {
  return (
    <>
      <CustomHeading tittel={"All Shops"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {shopsData.map((item) => {
          return (
            <div
              key={item.name + 1}
              className="  shadow-lg rounded-lg overflow-hidden"
            >
              <div className="max-w-full flex items-center justify-center gap-4">
                <img
                  className="w-20 h-20 leading-8 object-cover rounded-[100%]"
                  src={item.image ? item.image : `${shopLogo}`}
                  alt={item.name || "Doctor"}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = shopLogo;
                  }}
                />
                <div className="px-2 pt-3">
                  <h1 className="text-sm font-bold text-gray-800 mb-2 flex gap-2 items-center">
                    {item.name}
                  </h1>
                  <p className="text-[12px] text-gray-600 mb-2">
                    {item.address}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="flex justify-between items-center gap-1 mt-3">
                  <a
                    href={`tel:${item.phone || "+880123456789"}`}
                    className="w-full sm:w-auto rounded-md border border-[#0FABCA] bg-[#0FABCA] text-white hover:text-[#0FABCA] hover:bg-white hover:border-[#0FABCA] transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                  >
                    কল করুন
                  </a>

                  <Link
                    to={`/shopping/${item.id}`}
                    className="w-full sm:w-auto rounded-md border border-[#0FABCA] text-[#0FABCA] hover:bg-[#0FABCA] hover:border-[#0FABCA] hover:text-white transition duration-300 px-10 py-3 text-sm font-bold cursor-pointer"
                  >
                    পণ্য কিনুন
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Shopping;
