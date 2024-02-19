const { configureStore } = require("@reduxjs/toolkit");
import todoSlice from './slices/todoSlice';
import todoReducer from './slices/todoSlice';

export const store = configureStore({
    reducer:{
        todo: todoReducer
    }
})

export default todoSlice.reducer;