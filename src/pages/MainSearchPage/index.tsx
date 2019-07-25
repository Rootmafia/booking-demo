import React, { useState } from 'react';
import shuffle from 'lodash/shuffle';
import { CloudBackground } from './components/CloudBackground';
import SearchBlock from './components/SearchBlock';
import { FilmList } from './components/FilmList';
import * as helpers from './helpers';

export default function MainSearchPage() {
  const [films, setFilm] = useState([]);
  const toggleFilm = helpers.toggleFilmCreator(films, setFilm);
  const addRandomFilm = helpers.addRandomFilmCreator(films, setFilm);
  const shuffleFilms = () => setFilm(shuffle(films || []));
  return (
    <>
      <CloudBackground />
      <SearchBlock toggleFilm={toggleFilm} films={films} addRandomFilm={addRandomFilm} />
      <FilmList films={films} toggleFilm={toggleFilm} shuffleFilms={shuffleFilms} />
    </>
  );
}
