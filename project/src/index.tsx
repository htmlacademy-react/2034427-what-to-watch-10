import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components';
import {films} from './mocks/films';
import {PromoFilm} from './mocks/promo-film';
import {SimilarFilms} from './mocks/similar-films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoFilm={PromoFilm} similarFilms={SimilarFilms} films={films}/>
  </React.StrictMode>,
);
