export const RouteName = {
  Main: '/',
  Genre: {
    path: '/genre/:genreName',
    name: 'genre'
  },
  SignIn: '/login',
  MyList: '/mylist',
  Film: {
    path: '/films/:id',
    name: 'films'
  },
  Player: {
    path: '/player/:id',
    name: 'player'
  },
  AddReview: {
    path: '/films/:id/review',
    name: 'films'
  },
  NotFound:  '*',
};
