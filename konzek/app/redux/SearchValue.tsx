import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const searchSlicer = createSlice({
  name: "SEARCH",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlicer.actions;
export default searchSlicer.reducer;
