// src/pages/Detail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams(); // URL에서 ID를 가져옵니다.
  const pokemonData = useSelector((state) => state.pokemon.data);
  const pokemon = pokemonData.find((poke) => poke.id === parseInt(id)); // ID로 포켓몬을 찾습니다.

  if (!pokemon) return <div>Pokemon not found!</div>; // 해당 ID의 포켓몬이 없으면 표시합니다.

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-8">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-64 h-64 mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold text-center mb-4">{pokemon.name}</h1>
        <p className="text-lg text-gray-600">{pokemon.description}</p>
      </div>
    </div>
  );
};

export default Detail;
