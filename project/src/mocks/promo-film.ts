import {FilmType} from '../types/film';

export const PromoFilm: FilmType = {
  id: 1,
  name: 'Fantastic Beasts: The Crimes of Grindelwald',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#FDFDFC',
  videoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  previewVideoLink: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore!',
  rating: 9.5,
  scoresCount: 234,
  director: 'Guy Ritchie',
  starring: [
    'Jason Statham',
    'Brad Pitt',
    'Benicio Del Toro'
  ],
  runTime: 104,
  genre: 'Comedy',
  released: 2000,
  isFavorite: true
};
