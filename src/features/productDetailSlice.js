import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const URL = "https://663cb12b17145c4d8c37466f.mockapi.io/card";
const URL = "https://fakestoreapi.com/products";

export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    const response = await fetch(URL);

    try {
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productDetailSlice = createSlice({
  name: "productDetailSlice",
  initialState: {
    loading: false,
    users: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAction(showUser.pending), (state) => {
        state.loading = true;
      })
      .addCase(createAction(showUser.fulfilled), (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(createAction(showUser.rejected), (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  },
});

export default productDetailSlice.reducer;
