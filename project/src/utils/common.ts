import {FilmType} from '../types/film';
import {films} from '../mocks/films';
import {TabName} from '../pages/film/film';

export const getGenres = (filmList: FilmType[]): string[] =>
  [...new Set(filmList.map((film) => film.genre))];

export const getFilm = (id: string) =>
  films.find((item) => item.id === parseInt(id, 10));

export const getFilmTab = () => {
  const queryParams = (new URL(document.location.href)).searchParams;
  return queryParams.get('tab') ?? TabName.Overview;
};
