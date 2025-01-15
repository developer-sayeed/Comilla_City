import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// User Permission Section

/**
 * @DESC Get AllPermission
 * @ROUTE /api/v1/Permission
 * @method GET
 * @access private
 */
export const getPermission = createAsyncThunk(
  "user/getPermission",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/permission`,

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
 * @DESC Create AllPermission
 * @ROUTE /api/v1/Permission
 * @method POST
 * @access private
 */

export const createPermission = createAsyncThunk(
  "user/createPermission",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/permission`,
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

/**
 * @DESC Delete AllPermission
 * @ROUTE /api/v1/Permission
 * @method DELETE
 * @access private
 */

export const DdeletePermission = createAsyncThunk(
  "user/DdeletePermission",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/permission/${id}`,
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
 * @DESC Update Permission
 * @ROUTE /api/v1/Permission/:id
 * @method PATCH/PUT
 * @access private
 */

export const updatePermission = createAsyncThunk(
  "user/updatePermission",
  async (data) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/permission/${data.id}`,
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
/**
 * @DESC Update Permission Status
 * @ROUTE /api/v1/Permission/status/:id
 * @method PATCH/PUT
 * @access private
 */

export const updatePermissionStatus = createAsyncThunk(
  "user/updatePermissionStatus",
  async ({ id, status }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/permission/status/${id}`,
        { status: !status },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// User Role Section

/**
 * @DESC Careate Role
 * @ROUTE /api/v1/role
 * @method POST
 * @access private
 */

export const createRole = createAsyncThunk("user/createRole", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/role`,
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
 * @DESC Get Role
 * @ROUTE /api/v1/role
 * @method GET
 * @access private
 */

export const getRole = createAsyncThunk("user/getRole", async () => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/v1/role`,

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

export const DdeleteRole = createAsyncThunk("user/DdeleteRole", async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5050/api/v1/role/${id}`,
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

/**
 * @DESC Update Role Status
 * @ROUTE /api/v1/role/status/:id
 * @method PATCH/PUT
 * @access private
 */
export const updateRoleStatus = createAsyncThunk(
  "user/updateRoleStatus",
  async ({ id, status }) => {
    console.log(id);
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/role/status/${id}`,
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
 * @DESC Update Role
 * @ROUTE /api/v1/role/:id
 * @method PATCH/PUT
 * @access private
 */
export const updateRole = createAsyncThunk("user/updateRole", async (data) => {
  try {
    const response = await axios.patch(
      `http://localhost:5050/api/v1/role/${data.id}`,
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
