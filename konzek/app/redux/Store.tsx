import { configureStore } from "@reduxjs/toolkit";
import searchSlicer from "./SearchValue";

export const store = configureStore({
  reducer: {
    search: searchSlicer,
  },
});
