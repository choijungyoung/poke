// src/RTK/pokemonSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 포켓몬 정보를 비동기적으로 가져오는 함수
export const fetchPokemonData = createAsyncThunk(
  'pokemon/fetchPokemonData',
  async () => {
    const response = await Promise.all(
      Array.from({ length: 151 }, (_, i) => i + 1).map(id =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
      )
    );
    return response;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPokemonData.rejected, state => {
        state.status = 'failed';
      });
  },
});

export default pokemonSlice.reducer;
