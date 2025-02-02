import { createSlice } from "@reduxjs/toolkit";
import {
  createUser,
  deleteUser,
  getAllThana,
  getUsers,
  updateUser,
} from "./userApiSlice";

// Create a user Slice

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    thana: null,
    error: null,
    message: null,
    loader: null,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    // User Section
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loader = false;
      })
      .addCase(createUser.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = state.user ?? [];
        state.user.push(action.payload.user);
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.user = state.user.filter(
          (data) => data._id !== action.payload.user._id
        );
        state.message = action.payload.message;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
        state.user = action.payload.payload;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // All Hospital  Splist Here
    builder
      .addCase(getAllThana.pending, (state) => {
        state.loader = true;
      })
      .addCase(getAllThana.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getAllThana.fulfilled, (state, action) => {
        state.thana = action.payload.payload; // Redux State Update
      });
  },
});

// Selectors

export const getAllUserData = (state) => state.user;

// Actions
export const { setMessageEmpty } = userSlice.actions;

// Export

export default userSlice.reducer;
