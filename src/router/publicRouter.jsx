import { element } from "prop-types";
import Page404 from "../components/404Page/NotFound";
import { categoriesMenu } from "../components/Categories_Menu/CategoriesMenu";
import LoginPage from "../page/Auth/LoginPage";
import RegisterPage from "../page/Auth/Register";
import Home from "../page/Home/Home";
import Pagelout from "../page/Pagelout";
import Shopping from "../page/Shopping/Shopping";
import ShoppingCrad from "../page/Shopping/ShoppingCrad";

// create public router
const publicRouter = [
  {
    element: <Page404 />,
    path: "*",
  },
  {
    element: <Pagelout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <LoginPage />,
        path: "/login",
      },
      {
        element: <RegisterPage />,
        path: "/register",
      },
      {
        element: <Shopping />,
        path: "/shopping",
        children: [
          {
            element: <ShoppingCrad />,
            path: "/shopping/:id",
          },
        ],
      },

      ...categoriesMenu.map((item) => ({
        element: item.component ? item.component : null,
        path: item.href,
        children: item.children?.map((subItem) => ({
          element: subItem.component,
          path: subItem.href,
        })),
      })),
    ],
  },
];

// export router
export default publicRouter;
