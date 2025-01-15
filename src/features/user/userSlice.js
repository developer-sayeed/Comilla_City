import { createSlice } from "@reduxjs/toolkit";
import {
  DdeletePermission,
  DdeleteRole,
  createPermission,
  createRole,
  createUser,
  deleteUser,
  getPermission,
  getRole,
  getUsers,
  updatePermission,
  updatePermissionStatus,
  updateRole,
  updateRoleStatus,
} from "./userApiSlice";

// Create a user Slice

const userSlice = createSlice({
  name: "user",
  initialState: {
    permission: null,
    role: null,
    user: null,
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
    builder
      .addCase(getPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getPermission.fulfilled, (state, action) => {
        state.permission = action.payload;
      })
      .addCase(createPermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createPermission.fulfilled, (state, action) => {
        state.permission = state.permission ?? [];
        state.permission.push(action.payload.permission);
        state.message = action.payload.message;
      })
      .addCase(DdeletePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(DdeletePermission.fulfilled, (state, action) => {
        state.permission = state.permission.filter(
          (data) => data._id !== action.payload.permission._id
        );
        state.message = action.payload.message;
      })
      .addCase(updatePermissionStatus.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updatePermissionStatus.fulfilled, (state, action) => {
        state.permission[
          state.permission.findIndex(
            (data) => data._id == action.payload.permission._id
          )
        ] = action.payload.permission;
        state.message = action.payload.message;
      })
      .addCase(updatePermission.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updatePermission.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.permission[
          state.permission.findIndex(
            (data) => data._id == action.payload.permission._id
          )
        ] = action.payload.permission;
      });
    // Role Section
    builder
      .addCase(getRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getRole.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.role = action.payload;
      })
      .addCase(createRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createRole.fulfilled, (state, action) => {
        state.role = state.role ?? [];
        state.role.push(action.payload.role);
        state.message = action.payload.message;
      })
      .addCase(DdeleteRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(DdeleteRole.fulfilled, (state, action) => {
        state.role = state.role.filter(
          (data) => data._id !== action.payload.role._id
        );
        state.message = action.payload.message;
      })
      .addCase(updateRoleStatus.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateRoleStatus.fulfilled, (state, action) => {
        state.role[
          state.role.findIndex((data) => data._id == action.payload.role._id)
        ] = action.payload.role;
        state.message = action.payload.message;
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.role[
          state.role.findIndex((data) => data._id == action.payload.role._id)
        ] = action.payload.role;
      });
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
      });
  },
});

// Selectors

export const getAllUserData = (state) => state.user;

// Actions
export const { setMessageEmpty } = userSlice.actions;

// Export

export default userSlice.reducer;
