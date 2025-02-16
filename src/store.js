// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './RTK/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
