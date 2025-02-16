import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRegExp } from 'korean-regexp'; // 한글 정규식 라이브러리

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  const pokemons = useSelector(state => state.pokemon.list);
  const filteredPokemons = pokemons.filter(pokemon =>
    getRegExp(query).test(pokemon.name)
  );

  return (
    <div>
      <h1>Search Results</h1>
      <div>
        {filteredPokemons.map(pokemon => (
          <div key={pokemon.id}>
            <img src={pokemon.frontImage} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
