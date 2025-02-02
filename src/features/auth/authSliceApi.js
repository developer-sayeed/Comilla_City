import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//   Registration User
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/user/register`,
      data,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
// Activate Login Account User
export const activateAccount = createAsyncThunk(
  "auth/activateAccount",
  async ({ otp, token }) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/user/verify",
        { otp, token }
      );
      return response.data; // Success message after account activation
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
// Resend Activation Email Token & OTP
export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/v1/user/resend-verify",
        { email }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
//   Login User
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/auth/login`,
      data,
      {
        withCredentials: true,
      }
    );
    return response?.data;
  } catch (error) {
    throw new Error(error.response?.data.message);
  }
});

//  LogOut User
export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/auth/logout`,
      "",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// LoggedIn User
export const getLoggedInUser = createAsyncThunk(
  "auth/getLoggedInUser",
  async () => {
    try {
      const response = await axios.get(`http://localhost:5050/api/v1/auth/me`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

/**
 * @DESC Update user profile
 * @ROUTE /api/v1/user/profile
 * @method PUT
 * @access private
 */

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/user/profile`, // Static URL for the logged-in user's profile
        data,
        { withCredentials: true } // Sends cookies (e.g., JWT) for authentication
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
