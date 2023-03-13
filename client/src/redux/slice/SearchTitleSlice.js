import { createSlice } from "@reduxjs/toolkit";

export const SearchTitleSlice = createSlice({
  name: "SearchTitleData",
  initialState: {
    title: "",
  },

  reducers: {
    searchTitle(state, action) {
      const titleData = action.payload;
      state.title = titleData;
    },
  },
});

export const searchAction = SearchTitleSlice.actions;
