import { useSelector } from "react-redux";
import { userAuth } from "../features/auth/authSlice";

const UseAuthUserState = () => {
  const { user } = useSelector(userAuth);
  return { user };
};

export default UseAuthUserState;
