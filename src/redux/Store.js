import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./Slices/CartSlice";



export const store = configureStore ( {
    reducer: {
        cart : CartSlices,
    }
});