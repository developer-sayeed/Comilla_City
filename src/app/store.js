import { configureStore } from "@reduxjs/toolkit";
import authreducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";

//  Create Store

const store = configureStore({
  reducer: {
    auth: authreducer,
    user: userReducer,
    product: productReducer,
  },
  middleware: (getDefualtMiddlewares) => getDefualtMiddlewares(),
  devTools: true,
});

// Export

export default store;
