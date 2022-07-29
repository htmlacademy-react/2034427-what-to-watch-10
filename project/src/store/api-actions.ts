import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {FilmType} from '../types/film';
import {loadFilms, loadPromoFilms, setDataLoadedStatus} from './actions';

enum APIRoute {
  Films = '/films',
  Promo = '/promo'
}

export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilms',
  async (_args, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  }
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchPromoFilm',
  async (_args, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType>(APIRoute.Promo);
    dispatch(loadPromoFilms(data));
  }
);
