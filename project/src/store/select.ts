import {State} from '../types/state';
import {FilmType} from '../types/film';
import {DEFAULT_GENRE} from './reducer';
import {getGenres} from '../utils/common';

export const selectFilms = (state: State) => state.films;

export const selectFilterFilms = (state: State) =>
  state.genre !== DEFAULT_GENRE
    ? state.films.filter((item: FilmType) => item.genre.toLowerCase() === state.genre)
    : state.films;

export const selectFilmGenres = (state: State) =>
  getGenres(state.films);
