import apis from "@/services/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async () => {
    const data = await apis.getAllProducts();
    return data;
  }
);
console.log("🚀 ~ fetchAllProducts:", fetchAllProducts);

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isError = false;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
