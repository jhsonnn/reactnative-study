import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

createSlice({
  name: "basket",
  initialState,
  reducers: {},
});

export default basketSlice.reducer;
