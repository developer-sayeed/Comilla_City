import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoggedInUser } from "./features/auth/authSliceApi";
import { getAllThana, getUsers } from "./features/user/userApiSlice";
import {
  getAllDoctor,
  getAllDoctorSpecialist,
  getAllHospital,
} from "./features/health/helathSliceApi";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(getLoggedInUser());
      dispatch(getAllDoctor());
      dispatch(getAllDoctorSpecialist());
      dispatch(getAllHospital());
      dispatch(getAllThana());
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}
