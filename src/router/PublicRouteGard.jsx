import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouteGuard = () => {
  const { user } = useSelector((state) => state.auth);

  // Jodi user login na kore tahole sudhu Public Routes access korbe
  return <Outlet />;
};

export default PublicRouteGuard;
