import { configureStore } from "@reduxjs/toolkit";
import  weatherSlice  from "./currentCity.slice";

export const store = configureStore(
    {
        reducer: {weatherSlice}
    }
)