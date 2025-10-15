import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProductsStatus",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
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
    builder.addCase(fetchAllProducts.pending, () => {});
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
