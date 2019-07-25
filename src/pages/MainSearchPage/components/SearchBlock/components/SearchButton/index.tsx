import React from 'react';
import './index.css';

export default function SearchButton({ addRandomFilm }: any) {
  return (
    <button className="search-button" onClick={addRandomFilm}>
      Add Random Film
    </button>
  );
}
