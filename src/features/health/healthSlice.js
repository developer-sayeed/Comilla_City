import { createSlice } from "@reduxjs/toolkit";
import {
  createDoctor,
  createHospital,
  deleteSingleDoctor,
  getAllDoctor,
  getAllDoctorSpecialist,
  getAllHospital,
  getSingleDoctor,
} from "./helathSliceApi";

const healthSlice = createSlice({
  name: "health",
  initialState: {
    doctor: [],
    health_specialists: [],
    hospital: [],
    blood_donner: [],
    diagnostic: [],
    health_consultation: [],
    ambulance: [],
    error: null,
    message: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // All Doctor Here
    builder
      .addCase(createDoctor.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(createDoctor.rejected, (state, action) => {
        const error = (state.error = action.payload);
        state.loader = false;
        console.log(error);
      })
      .addCase(createDoctor.fulfilled, (state, action) => {
        state.doctor = action.payload.payload ?? []; // Ensure state.doctor is an array
        state.doctor.push(action.payload.doctor); // Correctly update the array

        console.log("Updated doctors list:", state.doctor); // Log the updated array

        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(getAllDoctor.pending, (state) => {
        state.loader = true;
      })
      .addCase(getAllDoctor.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getAllDoctor.fulfilled, (state, action) => {
        state.doctor = action.payload.payload.doctors;
      })
      .addCase(getSingleDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSingleDoctor.fulfilled, (state, action) => {
        state.loading = false;
        state.doctor = action.payload;
      })
      .addCase(getSingleDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteSingleDoctor.pending, (state) => {
        state.loader = true;
      })
      .addCase(deleteSingleDoctor.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(deleteSingleDoctor.fulfilled, (state, action) => {
        state.doctor = state.doctor.filter(
          (data) => data._id !== action.payload.doctor._id
        );
        state.message = action.payload.message;
        state.loader = false;
      });
    // All Doctor Splist Here
    builder
      .addCase(getAllDoctorSpecialist.pending, (state) => {
        state.loader = true;
      })
      .addCase(getAllDoctorSpecialist.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getAllDoctorSpecialist.fulfilled, (state, action) => {
        state.health_specialists = action.payload.payload; // Redux State Update
      });
    // All Hospital  Splist Here
    builder
      .addCase(getAllHospital.pending, (state) => {
        state.loader = true;
      })
      .addCase(getAllHospital.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getAllHospital.fulfilled, (state, action) => {
        state.hospital = action.payload.payload; // Redux State Update
      })
      .addCase(createHospital.pending, (state) => {
        state.loading = true;
      })
      .addCase(createHospital.fulfilled, (state, action) => {
        state.loading = false;
        const data = state.hospital.push(action.payload);
        console.log(data);
      })
      .addCase(createHospital.rejected, (state, action) => {
        state.loading = false;
        const error = (state.error = action.payload);
        console.log(error);
      });
  },
});

// Selectors
export const doctor = (state) => state.health.doctor;
export const health_specialists = (state) => state.health.health_specialists;

// Actions
export const { setMessageEmpty } = healthSlice.actions;

// Export
export default healthSlice.reducer;
