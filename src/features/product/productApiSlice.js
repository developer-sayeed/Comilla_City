import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// All Brand API Section
/**
 * @DESC Create Brand
 * @ROUTE /api/v1/brand
 * @method POST
 * @access private
 */
export const createBrand = createAsyncThunk(
  "product/createBrand",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/brand`,
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
 * @DESC Get All Brand
 * @ROUTE /api/v1/brand
 * @method GET
 * @access private
 */
export const getAllBrand = createAsyncThunk("product/getAllBrand", async () => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/v1/brand`,

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
 * @DESC Delete Single Brand
 * @ROUTE /api/v1/brand
 * @method GET
 * @access private
 */
export const deleteSingleBrand = createAsyncThunk(
  "product/deleteSingleBrand",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/brand/${id}`,

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
 * @DESC Update Brand Status
 * @ROUTE /api/v1/brand/status/:id
 * @method PATCH/PUT
 * @access private
 */

export const updateBrandStatus = createAsyncThunk(
  "product/updateBrandStatus",
  async ({ id, status }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/brand/status/${id}`,
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
 * @DESC Update Brand Status
 * @ROUTE /api/v1/brand/status/:id
 * @method PATCH/PUT
 * @access private
 */

export const updateBrand = createAsyncThunk(
  "product/updateBrand",
  async (data) => {
    try {
      console.log(data);
      const response = await axios.patch(
        `http://localhost:5050/api/v1/brand/${data.id}`,
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

// All Tag API Section

/**
 * @DESC Get All Product Tag
 * @ROUTE /api/v1/tag
 * @method GET
 * @access private
 */
export const getAllTag = createAsyncThunk("product/getAllTag", async () => {
  try {
    const response = await axios.get(
      `http://localhost:5050/api/v1/tag`,

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
 * @DESC Create New Tag
 * @ROUTE /api/v1/tag
 * @method POST
 * @access private
 */
export const createNewTag = createAsyncThunk(
  "product/createNewTag",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/tag`,
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
 * @DESC Delete Product Tag
 * @ROUTE /api/v1/tag/${id}
 * @method DELETE
 * @access private
 */
export const singleTagDelete = createAsyncThunk(
  "product/singleTagDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/tag/${id}`,
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
 * @DESC Update Tag Status
 * @ROUTE /api/v1/tag/status/${id}
 * @method PUT/PATCH
 * @access private
 */
export const updateTagStatus = createAsyncThunk(
  "product/updateTagStatus",
  async ({ id, status }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/tag/status/${id}`,
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
 * @DESC Edit Product Tag
 * @ROUTE /api/v1/tag/${id}
 * @method PUT/PATCH
 * @access private
 */
export const updateSingleTag = createAsyncThunk(
  "product/updateSingleTag",
  async (data) => {
    try {
      const response = await axios.patch(
        `http://localhost:5050/api/v1/tag/${data.id}`,
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

// All Category API Section

/**
 * @DESC Get All Product Category
 * @ROUTE /api/v1/category
 * @method GET
 * @access private
 */
export const getProductCategory = createAsyncThunk(
  "product/getProductCategory",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/category`,

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
 * @DESC Get All Product Category
 * @ROUTE /api/v1/category
 * @method POST
 * @access private
 */
export const createProductCategory = createAsyncThunk(
  "product/createProductCategory",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/category`,
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
 * @DESC Delete a category
 * @ROUTE /api/v1/category
 * @method GET
 * @access private
 */
export const deleteProductCategory = createAsyncThunk(
  "product/deleteProductCategory",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5050/api/v1/category/${id}`,
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
 * @DESC Delete a category
 * @ROUTE /api/v1/category
 * @method GET
 * @access private
 */
export const updateProductCategoryStatus = createAsyncThunk(
  "product/updateProductCategoryStatus",
  async ({ id, status }) => {
    try {
      console.log(id, status);
      const response = await axios.patch(
        `http://localhost:5050/api/v1/category/status/${id}`,
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
