import {FilmType} from '../types/film';

const MAX_COUNT_GENRES = 9;

export const getGenres = (filmList: FilmType[]): string[] => {
  const result = [
    ...new Set(filmList.map((film) => film.genre))
  ];

  return result.length > MAX_COUNT_GENRES
    ? result.slice(0, MAX_COUNT_GENRES)
    : result;
};
