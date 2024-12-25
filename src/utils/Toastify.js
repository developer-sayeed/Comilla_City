import { toast } from "react-toastify";

//  Cretae a Toast

export const createtoast = (msg, type) => {
  toast[type](msg);
};
