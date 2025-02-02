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
    user: JSON.parse(localStorage.getItem("user")) || null,
    accessToken: localStorage.getItem("accessToken") || null,
    isAuthenticated: !!localStorage.getItem("accessToken"),
    message: null,
    error: null,
    loading: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
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
      // authSlice.js
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        const { userId, email, name } =
          action.payload.payload.userWithoutPassword;

        // ✅ accessToken রেসপন্স থেকে নিন
        const accessToken = action.payload.payload.accessToken; // Updated path

        // Redux স্টেট ও localStorage-এ সেভ করুন
        state.accessToken = accessToken;
        localStorage.setItem("accessToken", accessToken);

        // ইউজার ডেটা সেভ করুন
        state.user = { userId, email, name }; // ✅ নতুন অবজেক্ট তৈরি করুন
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify({ userId, email, name }));

        state.message = action.payload.message;
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

export const { setMessageEmpty, setCredentials, logout } = authSlice.actions;
export const userAuth = (state) => state.auth;
export default authSlice.reducer;
