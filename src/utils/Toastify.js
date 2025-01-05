import { toast } from "react-toastify";

// Create a Toast
export const createToast = (msg, type) => {
  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
    case "warning":
      toast.warning(msg);
      break;
    default:
      toast(msg); // Default to a basic toast if no type matches
  }
};
