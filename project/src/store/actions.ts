import {createAction} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {DEFAULT_GENRE} from '../constants/common';

export const changeGenre = createAction(
  'films/changeGenre',
  (name = DEFAULT_GENRE) => ({payload: name})
);

export const fetchFilms = createAction(
  'films/fetchFilms',
  () => ({payload: films})
);
