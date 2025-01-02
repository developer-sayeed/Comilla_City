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
      ...categoriesMenu.map((item) => ({
        path: item.href,
        element: item.element || <Page404 />,
        children: item.children?.map((subItem) => ({
          path: subItem.href.replace(`${item.href}/`, ""),
          element: subItem.element || <Page404 />,
        })),
      })),
    ],
  },
];

// export router
export default publicRouter;
