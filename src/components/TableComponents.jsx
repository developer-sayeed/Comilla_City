import doctor from "../assets/001-doctor.png";
import { Link } from "react-router";
import { navigation } from "./Categories_Menu/CategoriesMenu";

const TableComponents = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl text-center font-semibold text-blue-950 bg-blue-300 py-4">
          সার্ভিসসমূহ
        </h2>
        <nav>
          <ul className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 items-center justify-center">
            {navigation.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="w-full h-36 bg-slate-100 text-center flex flex-col justify-center items-center shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-14 w-14 md:h-16 md:w-16 lg:h-16 lg:w-16 object-cover mb-2  transition-transform transform hover:scale-110"
                    />
                    <span className="text-xs md:text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600">
                      {" "}
                      {item.name}{" "}
                    </span>{" "}
                  </Link>{" "}
                </li>
              );
            })}{" "}
          </ul>{" "}
        </nav>{" "}
      </section>
    </>
  );
};
export default TableComponents;
