import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {PromoInfoType} from './types/types';

const promoInfo: PromoInfoType = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseDate: 2014,
  poster: 'img/the-grand-budapest-hotel-poster.jpg',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoInfo={promoInfo}/>
  </React.StrictMode>,
);
