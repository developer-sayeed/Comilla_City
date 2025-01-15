import AdminDashboard from "../page/Admin/Dashboard/AdminDashboard";
import Doctors from "../page/Admin/Heath/Doctors";
import Hospital from "../page/Admin/Heath/Hospital";
import AdminSideBar from "../page/Admin/SideBar/AdminSideBar";
import Upzilla from "../page/Admin/Upzilla/Upzilla";
import OverView from "../page/Auth/OverView";
import ProfilePage from "../page/Auth/Profile";
import PrivateRouteGard from "./PrivateRouteGard";

import UpdateProfile from "../page/Auth/UpdateProfile";
import MyShop from "../page/Auth/MyShop";
import MyCafe from "../page/Auth/MyCafe";
import Setting from "../page/Auth/Setting";
import Notifaction from "../page/Auth/Notifaction"; // create Private router
import Pagelout from "../page/Pagelout";
import PrivateRouteGuard from "./PrivateRouteGard";
const privateRouter = [
  {
    element: <PrivateRouteGuard />,
    children: [
      {
        element: <Pagelout />,
        children: [
          {
            path: "/me",
            element: <ProfilePage />,
            children: [
              {
                path: "/me",
                element: <OverView />,
              },
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
        ],
      },
      {
        path: "/admin",
        element: <AdminSideBar />,
        children: [
          {
            element: <PrivateRouteGard />,
            children: [
              {
                path: "/admin/overview",
                element: <AdminDashboard />,
              },
              {
                path: "/admin/upzilla",
                element: <Upzilla />,
              },
              {
                path: "/admin/doctor",
                element: <Doctors />,
              },
              {
                path: "/admin/hospital",
                element: <Hospital />,
              },
            ],
          },
        ],
      },
    ],
  },
];

// export router
export default privateRouter;
