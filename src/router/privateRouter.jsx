import AdminDashboard from "../page/Admin/Dashboard/AdminDashboard";
import AdminSideBar from "../page/Admin/SideBar/AdminSideBar";
import Upzilla from "../page/Admin/Upzilla/Upzilla";

// create Private router
const privateRouter = [
  {
    path: "admin",
    element: <AdminSideBar />,
    children: [
      {
        path: "/admin/upzilla",
        element: <Upzilla />,
      },
    ],
  },
];

// export router
export default privateRouter;
