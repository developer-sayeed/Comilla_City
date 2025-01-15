import { createSlice } from "@reduxjs/toolkit";
import {
  createBrand,
  createNewTag,
  createProductCategory,
  deleteProductCategory,
  deleteSingleBrand,
  getAllBrand,
  getAllTag,
  getProductCategory,
  singleTagDelete,
  updateBrand,
  updateBrandStatus,
  updateProductCategoryStatus,
  updateSingleTag,
  updateTagStatus,
} from "./productApiSlice";

// Create a user Slice

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    brand: null,
    category: null,
    tag: null,
    error: null,
    message: null,
    loader: false,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    // All Brands Section
    builder
      .addCase(createBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.brand = state.brand ?? [];
        state.brand.push(action.payload.brand);
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(getAllBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.brand = action.payload.brands;
        state.loader = false;
      })
      .addCase(deleteSingleBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(deleteSingleBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(deleteSingleBrand.fulfilled, (state, action) => {
        state.brand = state.brand.filter(
          (data) => data._id !== action.payload.brand._id
        );
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(updateBrandStatus.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(updateBrandStatus.fulfilled, (state, action) => {
        state.brand[
          state.brand.findIndex((data) => data._id == action.payload.brand._id)
        ] = action.payload.brand;
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(updateBrandStatus.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(updateBrand.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.brand[
          state.brand.findIndex((data) => data._id == action.payload.brand._id)
        ] = action.payload.brand;
        state.loader = false;
      });
    // All Tag Section
    builder
      .addCase(getAllTag.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getAllTag.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getAllTag.fulfilled, (state, action) => {
        state.tag = action.payload.allTags;
        state.loader = false;
      })
      .addCase(createNewTag.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createNewTag.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createNewTag.fulfilled, (state, action) => {
        state.tag = state.tag ?? [];
        state.tag.push(action.payload.tag);
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(singleTagDelete.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(singleTagDelete.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(singleTagDelete.fulfilled, (state, action) => {
        state.tag = state.tag.filter(
          (data) => data._id !== action.payload.tag._id
        );
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(updateTagStatus.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(updateTagStatus.fulfilled, (state, action) => {
        state.tag[
          state.tag.findIndex((data) => data._id == action.payload.tag._id)
        ] = action.payload.tag;
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(updateTagStatus.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(updateSingleTag.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(updateSingleTag.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(updateSingleTag.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.tag[
          state.tag.findIndex((data) => data._id == action.payload.tag._id)
        ] = action.payload.tag;
        state.loader = false;
      });

    // All Category  Section
    builder
      .addCase(getProductCategory.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getProductCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(getProductCategory.fulfilled, (state, action) => {
        state.category = action.payload.Categories;
        state.loader = false;
      })
      .addCase(createProductCategory.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(createProductCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(createProductCategory.fulfilled, (state, action) => {
        state.category = state.category ?? [];
        state.category.push(action.payload.category);
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(deleteProductCategory.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(deleteProductCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.loader = false;
      })
      .addCase(deleteProductCategory.fulfilled, (state, action) => {
        state.category = state.category.filter(
          (data) => data._id !== action.payload.category._id
        );
        state.message = action.payload.message;
        state.loader = false;
      })
      //Update Category Status
      .addCase(updateProductCategoryStatus.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(updateProductCategoryStatus.fulfilled, (state, action) => {
        state.category[
          state.category.findIndex(
            (data) => data._id == action.payload.category._id
          )
        ] = action.payload.category;
        state.message = action.payload.message;
        state.loader = false;
      })
      .addCase(updateProductCategoryStatus.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      });
  },
});

// Selectors

// Actions
export const { setMessageEmpty } = productSlice.actions;

// Export

export default productSlice.reducer;
