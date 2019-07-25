import random from 'lodash/random';
import { randomFilms } from '../components/SearchBlock/service/fake';

export const toggleFilmCreator = (films: any, setFilms: (a: any) => void) => (film: any) => {
  if (!film || !film.Title) {
    return;
  }

  if (films.some((e: any) => e.imdbID === film.imdbID)) {
    return setFilms(films.filter((e: any) => e.imdbID !== film.imdbID));
  }

  return setFilms([...(films || []), film]);
};

export const addRandomFilmCreator = (films: any, setFilms: (a: any) => void) => () => {
  return toggleFilmCreator(films, setFilms)(randomFilms[random(randomFilms.length - 1)]);
};
