import { createSlice } from "@reduxjs/toolkit";
import {
  activateAccount,
  createUser,
  getLoggedInUser,
  logOutUser,
  loginUser,
  resendOtp,
  updateUserProfile,
} from "./authSliceApi";

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
    isAuthenticated: !!localStorage.getItem("user"),
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(activateAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(activateAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload.message;
      })
      .addCase(activateAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(resendOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        const { userId, email, name } =
          action.payload.payload.userWithoutPassword;
        state.message = action.payload.message;
        state.user = { userId, email, name };
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify({ userId, email, name }));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logOutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.user = null;
        state.isAuthenticated = false;
        localStorage.removeItem("user");
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.user = action.payload.payload;
        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setMessageEmpty } = authSlice.actions;
export const userAuth = (state) => state.auth;
export default authSlice.reducer;
