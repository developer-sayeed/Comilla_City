import { Link } from "react-router";
import { categoriesMenu } from "./Categories_Menu/CategoriesMenu";
import CustomHeading from "./CustomHeading/CustomHeading";

const CardComponents = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-8 ">
        <CustomHeading tittel={"সার্ভিসসমূহ"} className={""} />
        <nav>
          <ul className="grid grid-cols-4 md:grid-cols-6 mt-3 z-[-10px] lg:grid-cols-8 gap-4 items-center justify-center">
            {categoriesMenu.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="w-full h-36 bg-white text-center flex flex-col justify-center items-center shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl sm:py-4"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-14 w-14 md:h-16 md:w-16 lg:h-16 lg:w-16 object-cover mb-2 sm:mb-0  transition-transform transform hover:scale-110"
                    />
                    <span className="text-xs md:text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600">
                      {" "}
                      {item.name}{" "}
                    </span>{" "}
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
};
export default CardComponents;
