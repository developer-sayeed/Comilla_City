import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

// All Doctor API Section
/**
 * @DESC Create Doctor
 * @ROUTE /api/v1/doctor
 * @method POST
 * @access private
 */

export const createDoctor = createAsyncThunk(
  "health/createDoctor",
  async (doctorData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/doctor`, doctorData);
      console.log(response.data);

      return response.data.payload;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

/**
 * @DESC Create Doctor
 * @ROUTE /api/v1/doctor
 * @method POST
 * @access private
 */
export const getAllDoctor = createAsyncThunk(
  "health/getAllDoctor",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/doctor");

      return response.data; // Ensure this matches the expected Redux structure
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch doctors");
    }
  }
);

/**
 * @DESC Get Single doctor
 * @ROUTE /api/v1/doctor
 * @method GET
 * @access private
 */
export const getSingleDoctor = createAsyncThunk(
  "health/getSingleDoctor", // ✅ ঠিক করা হয়েছে
  async (id, { rejectWithValue }) => {
    if (!id) {
      return rejectWithValue("Doctor ID is missing!");
    }
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/doctor/${id}`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);

/**
 * @DESC Delete Single doctor
 * @ROUTE /api/v1/doctor
 * @method GET
 * @access private
 */
export const deleteSingleDoctor = createAsyncThunk(
  "health/deleteSingleDoctor",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/doctor/${id}`,

        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

/**
 * @DESC Update doctor Status
 * @ROUTE /api/v1/doctor/status/:id
 * @method PATCH/PUT
 * @access private
 */

export const updateDoctorStatus = createAsyncThunk(
  "health/updateBrandStatus",
  async ({ id, status }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/doctor/status/${id}`,
        { status: !status },
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
/**
 * @DESC Update Sinngle Doctor
 * @ROUTE /api/v1/doctor/:id
 * @method PATCH/PUT
 * @access private
 */

export const updateSingleDoctor = createAsyncThunk(
  "health/updateSingleDoctor",
  async (data) => {
    try {
      console.log(data);
      const response = await axios.patch(
        `http://localhost:5050/api/v1/doctor/${data.id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// All Doctor Seecialist Api CAll
/**
 * @DESC GET  doctor specialist
 * @ROUTE /api/v1/doctor-specialist
 * @method GET
 * @access public
 */
export const getAllDoctorSpecialist = createAsyncThunk(
  "health/getAllDoctorSpecialist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://localhost:5050/api/v1/doctor-specialist"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch specialists"
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
export const getAllHospital = createAsyncThunk(
  "health/getAllHospital",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/hospital");

      return response.data; // Ensure this matches the expected Redux structure
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch doctors");
    }
  }
);
/**
 * @DESC Create Hospital
 * @ROUTE /api/v1/hospital
 * @method POST
 * @access public
 */
export const createHospital = createAsyncThunk(
  "health/createHospital",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/hospital`, data);
      console.log(response);

      return response.data.payload;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong"
      );
    }
  }
);
