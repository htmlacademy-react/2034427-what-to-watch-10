export enum RouteName {
  Main = '/',
  Genre = '/genre/:genreName',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Player = '/player/:id',
  AddReview = '/films/:id/review',
  NotFound = '*',
}
