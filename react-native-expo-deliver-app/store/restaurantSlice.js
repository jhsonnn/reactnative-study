import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});
// 첫번째 restaurant : index.js에서 restuarnatReducer
// 두번째 restaurant : initialState의 restaurant
export const selectRestaurant = (state) => state.restaurant.restaurant;

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
