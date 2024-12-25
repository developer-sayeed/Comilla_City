import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouteGard = () => {
  const { user } = useSelector((state) => state.auth);

  if (localStorage.getItem("user")) {
    return user ? <Navigate to="/" /> : <Outlet />;
  }
  return <Outlet />;
};

export default PublicRouteGard;
