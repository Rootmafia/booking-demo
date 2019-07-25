import React from 'react';
import ShuffleButton from './components/ShuffleButton';
import './index.css';
import FilmItem from './components/FilmItem';
import { FilmType, SearchResult } from '../../../../types';

interface FilmListProps {
  films: FilmType[];
  toggleFilm(val: FilmType): void;
  shuffleFilms(): void;
}

export function FilmList({ films, toggleFilm, shuffleFilms }: FilmListProps) {
  if (!films.length) {
    return null;
  }

  const isShuffleVisible = films.length > 1;
  return (
    <div className="film-list">
      {isShuffleVisible && (
        <>
          <div className="film_list-header">
            <ShuffleButton onClick={shuffleFilms} />
          </div>
          <hr />
        </>
      )}
      <div className="film-list_container">
        {films.map((e: any) => (
          <FilmItem key={e.imdbID} value={e} toggleFilm={toggleFilm} />
        ))}
      </div>
    </div>
  );
}
