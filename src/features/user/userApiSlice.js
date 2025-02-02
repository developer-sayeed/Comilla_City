import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// User  Section

/**
 * @DESC Get User
 * @ROUTE /api/v1/user
 * @method GET
 * @access private
 */

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/v1/user`,

      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
/**
 * @DESC Get User
 * @ROUTE /api/v1/user
 * @method POST
 * @access private
 */

export const createUser = createAsyncThunk("user/createUser", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/user`,
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

/**
 * @DESC Delete Role
 * @ROUTE /api/v1/role
 * @method DELETE
 * @access private
 */

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5050/api/v1/user/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

/**
 * @DESC Update user profile
 * @ROUTE /api/v1/user
 * @method PUT
 * @access private
 */

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5050/api/v1/user/${data.id}`,
        data,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

// All Hospital  Api CAll
/**
 * @DESC Get All Hospital
 * @ROUTE /api/v1/hospital
 * @method GET
 * @access public
 */
export const getAllThana = createAsyncThunk(
  "health/getAllThana",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/thana");

      return response.data; // Ensure this matches the expected Redux structure
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch doctors");
    }
  }
);
