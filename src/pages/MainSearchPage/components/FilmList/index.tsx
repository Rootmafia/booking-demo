import React from 'react';
import ShuffleButton from './components/ShuffleButton';
import './index.css';
import FilmItem from './components/FilmItem';

export function FilmList({ films, toggleFilm, shuffleFilms }: any) {
  if (!films.length) {
    return null;
  }

  return (
    <div className="film_list">
      {films.length > 1 && (
        <>
          <div className="film_list-header">
            <ShuffleButton onClick={shuffleFilms} />
          </div>
          <hr />
        </>
      )}
      <div className="film_list_container">
        {films.map((e: any) => (
          <FilmItem key={e.imdbID} value={e} toggleFilm={toggleFilm} />
        ))}
      </div>
    </div>
  );
}
