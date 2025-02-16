import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../RTK/favoriteSlice';

function FavoriteButton({ pokemon }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = favorites.some(fav => fav.id === pokemon.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(pokemon.id));
    } else {
      dispatch(addToFavorite(pokemon));
    }
  };

  return (
    <button onClick={handleClick}>
      {isFavorite ? '❤️' : '🤍'} Add to Favorite
    </button>
  );
}

export default FavoriteButton;
