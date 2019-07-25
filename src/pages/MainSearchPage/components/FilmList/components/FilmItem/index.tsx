import React from 'react';
import trashIcon from './assets/trashIcon.png';
import './index.css';
import { FilmType } from '../../../../../../types';

interface FilmItemProps {
  value: FilmType;
  toggleFilm(val: FilmType): void;
}

export default function FilmItem({ value, toggleFilm }: FilmItemProps) {
  const removeFilm = () => toggleFilm(value);
  const hasPoster = value.Poster && value.Poster !== 'N/A';
  return (
    <div className="card">
      <div className="img-poster" style={hasPoster ? { background: `url(${value.Poster})` } : undefined} />
      <div className="card-container">
        <div>{value.Title}</div>
        <a href={`https://www.imdb.com/title/${value.imdbID}`} target="_blank">
          open on imdb
        </a>
      </div>
      <div tabIndex={0} className="card-container_remove-btn" onClick={removeFilm}>
        <img src={trashIcon} alt="Remove" />
      </div>
    </div>
  );
}
