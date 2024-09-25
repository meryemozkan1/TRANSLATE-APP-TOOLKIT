import { createSlice } from "@reduxjs/toolkit";
import getLanguages from "../actions";

const initialState = {
  isLoading: false,
  error: null,
  languages: [],
};

const languages = createSlice({
  name: "languages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLanguages.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;

      state.languages = action.payload; // Gelen veriler state'e kaydediliyor
    });
  },
});

export default languages.reducer;
