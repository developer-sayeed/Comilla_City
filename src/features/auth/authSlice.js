import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  getLoggedInUser,
  logOutUser,
  loginUser,
} from "./authSliceApi";

// Create a Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: (() => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser && storedUser !== "undefined") {
          return JSON.parse(storedUser);
        }
        return null;
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        return null;
      }
    })(),
    message: null,
    error: null,
    loading: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const user = action.payload.payload.userWithoutPassword;
        state.message = action.payload.message;
        state.user = user;
        console.log(user);

        localStorage.setItem("user", JSON.stringify(user));
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.user = null;
        localStorage.removeItem("user");
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.user = action.payload.payload;
      });
  },
});

// Selectors
export const userAuth = (state) => state.auth;

// Actions
export const { setMessageEmpty } = authSlice.actions;

// Export
export default authSlice.reducer;
