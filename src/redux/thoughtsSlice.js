import { createSlice } from "@reduxjs/toolkit";

const thoughtsSlice = createSlice({
  name: "thoughts",
  initialState: {
    value: []
  },
  reducers: {
    addThought: () => {},
    removeTought: () => {},
    getToughts: () => {}
  }
});

export default thoughtsSlice.reducer;
