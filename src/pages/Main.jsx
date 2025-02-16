// src/pages/Main.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "../RTK/pokemonSlice";

const Main = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPokemonData()).finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Pokemon List</h1>
      {loading ? (
        <div className="text-center text-lg">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pokemonData.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-32 h-32 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700">{pokemon.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
