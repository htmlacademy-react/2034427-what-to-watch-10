import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, fetchFilms} from './actions';
import {State} from '../types/state';
import {FilmType} from '../types/film';

type FilmsStateType = {
  genre: string;
  filter: FilmType[];
  films: FilmType[];
}

const initialState: FilmsStateType = {
  genre: '',
  filter: [],
  films: [],
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(fetchFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filter = state.genre
        ? state.films.filter((item: FilmType) => item.genre.toLowerCase() === state.genre)
        : state.films;
    });
}));

export const selectFilms = (state: State) => state.films;

export const selectFilterFilms = (state: State) => state.filter;
