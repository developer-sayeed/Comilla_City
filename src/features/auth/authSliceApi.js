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
