import AdminDashboard from "../page/Admin/Dashboard/AdminDashboard";
import Doctors from "../page/Admin/Heath/Doctors";
import Hospital from "../page/Admin/Heath/Hospital";
import AdminSideBar from "../page/Admin/SideBar/AdminSideBar";
import Upzilla from "../page/Admin/Upzilla/Upzilla";

// create Private router
const privateRouter = [
  {
    path: "admin",
    element: <AdminSideBar />,
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
];

// export router
export default privateRouter;
