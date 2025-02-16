import React from 'react';

const PokemonCard = React.memo(({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.frontImage} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
});

export default PokemonCard;
