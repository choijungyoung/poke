import React from 'react';
import { useSelector } from 'react-redux';

function Favorites() {
  const favorites = useSelector(state => state.favorites);

  return (
    <div>
      <h1>Your Favorites</h1>
      <div>
        {favorites.map(pokemon => (
          <div key={pokemon.id}>
            <img src={pokemon.frontImage} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
