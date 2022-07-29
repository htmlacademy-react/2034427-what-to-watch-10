import {createAction} from '@reduxjs/toolkit';
import {DEFAULT_GENRE} from '../constants/common';
import {FilmType} from '../types/film';

export const changeGenre = createAction(
  'films/changeGenre',
  (name = DEFAULT_GENRE) => ({payload: name})
);

export const loadFilms = createAction<FilmType[]>('films/loadFilms');

export const loadPromoFilms = createAction<FilmType>('films/loadPromoFilms');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
