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
        path: "/me",
        element: <ProfilePage />,
        children: [
          {
            path: "/me/update-profile",
            element: <UpdateProfile />,
          },
          {
            path: "/me/my-shop",
            element: <MyShop />,
          },
          {
            path: "/me/my-cafe",
            element: <MyCafe />,
          },
          {
            path: "/me/Setting",
            element: <Setting />,
          },
          {
            path: "/me/notification",
            element: <Notifaction />,
          },
        ],
      },
      ...categoriesRoutes,
      // ...categoriesMenu.map((item) => ({
      //   element: item.component ? item.component : null,
      //   path: item.href,
      //   children: item.children?.map((subItem) => ({
      //     element: subItem.component,
      //     path: subItem.href,
      //   })),
      // })),
    ],
  },
];

// export router
export default publicRouter;
