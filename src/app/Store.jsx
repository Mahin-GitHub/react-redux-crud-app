import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Components/Redux/BookSlice/BookSlice"



const store = configureStore({
    reducer : {
        bookReducer : bookReducer,
    }
})


export default store;