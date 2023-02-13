import { createSlice } from "@reduxjs/toolkit";
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    index: null,
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    getIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { getData, getIndex } = weatherSlice.actions;

export default weatherSlice.reducer;
