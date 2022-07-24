import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, fetchFilms} from './actions';
import {FilmType} from '../types/film';

export const DEFAULT_GENRE = 'All genres';

type FilmsStateType = {
  genre: string;
  films: FilmType[];
}

const initialState: FilmsStateType = {
  genre: DEFAULT_GENRE,
  films: [],
};

export const reducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(fetchFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
}));

