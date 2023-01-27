import { createSlice } from "@reduxjs/toolkit";

export const ThemeTogglerSlice = createSlice({
  name: "themeData",
  initialState: {
    toggled: false,
  },

  reducers: {
    isToggled(state, action) {
      const toggledData = action.payload;
      state.toggled = toggledData;
    },
  },
});

export const toggleAction = ThemeTogglerSlice.actions;
