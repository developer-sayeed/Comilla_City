import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteGuard = () => {
  const { user } = useSelector((state) => state.auth);

  // User login চেক এবং রুট নির্ধারণ
  if (user) {
    // যদি user অ্যাডমিন হয়
    if (user.isAdmin == true) {
      return <Navigate to="/admin/overview" />;
    } else if (user.isAdmin === false) {
      return <Navigate to="/me" />;
    }
    // যদি সাধারণ ব্যবহারকারী হয়
    return <Outlet />;
  }

  // যদি user লগইন না করে থাকে
  return <Navigate to="/login" />;
};

export default PrivateRouteGuard;
