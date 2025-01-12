import Page404 from "../components/404Page/NotFound";
import { categoriesMenu } from "../components/Categories_Menu/CategoriesMenu";
import LoginPage from "../page/Auth/LoginPage";
import Home from "../page/Home/Home";
import Pagelout from "../page/Pagelout";
import ProfilePage from "../page/Auth/Profile";
import UpdateProfile from "../page/Auth/UpdateProfile";
import MyShop from "../page/Auth/MyShop";
import MyCafe from "../page/Auth/MyCafe";
import Setting from "../page/Auth/Setting";
import Notifaction from "../page/Auth/Notifaction";
import RegisterPage from "../page/Auth/Register";
import LostPassword from "../page/Auth/LostPassword";

const flattenRoutes = (routes) => {
  return routes.flatMap((item) => {
    const { children, ...rest } = item;
    const currentRoute = { ...rest }; // Keep the current route object
    const childRoutes = children ? flattenRoutes(children) : []; // Recursively flatten children
    return [currentRoute, ...childRoutes]; // Merge current route with flattened children
  });
};

const categoriesRoutes = flattenRoutes(
  categoriesMenu.map((item) => ({
    path: item.href,
    element: item.component,
    children: item.children
      ? item.children.map((subItem) => ({
          path: subItem.href,
          element: subItem.component,
        }))
      : [],
  }))
);

// create public router
const publicRouter = [
  {
    path: "*",
    element: <Page404 />,
  },
  {
    element: <Pagelout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forgot-password",
        element: <LostPassword />,
      },
      {
        path: "/me",
        element: <ProfilePage />,
        children: [
          {
            path: "update-profile",
            element: <UpdateProfile />,
          },
          {
            path: "my-shop",
            element: <MyShop />,
          },
          {
            path: "my-cafe",
            element: <MyCafe />,
          },
          {
            path: "setting",
            element: <Setting />,
          },
          {
            path: "notification",
            element: <Notifaction />,
          },
        ],
      },

      ...categoriesRoutes,
    ],
  },
];

// export router
export default publicRouter;
