// src/RTK/favoriteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      return state.filter(pokemon => pokemon.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
