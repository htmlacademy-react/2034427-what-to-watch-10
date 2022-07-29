import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, loadFilms, loadPromoFilms, setDataLoadedStatus} from './actions';
import {FilmType} from '../types/film';
import {DEFAULT_GENRE} from '../constants/common';

type FilmsStateType = {
  genre: string;
  films: FilmType[];
  promoFilm: FilmType;
  isDataLoaded: boolean;
}

const initialState: FilmsStateType = {
  genre: DEFAULT_GENRE,
  films: [],
  promoFilm: {} as FilmType,
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadPromoFilms, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
}));

