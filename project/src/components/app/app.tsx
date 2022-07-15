import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AddReview, Main, Movie, MyList, NotFound, Player, SignIn} from '../../pages';
import {PrivateRoute} from '../';
import {RouteName} from '../../constants/route-name';
import {AuthStatus} from '../../constants/auth-status';
import {RouteType} from '../../types/route-type';
import {FilmType} from '../../types/film';

type AppProps = {
  promoFilm: FilmType,
  films: FilmType[],
  similarFilms: FilmType[],
}

function App({promoFilm, films, similarFilms}: AppProps): JSX.Element {
  const authStatus = AuthStatus.Auth;
  const routes: RouteType[] = [
    {
      path: RouteName.Main,
      element: <Main promoFilm={promoFilm} films={films}/>
    },
    {
      path: RouteName.Genre,
      element: <Main promoFilm={promoFilm} films={films}/>
    },
    {
      path: RouteName.SignIn,
      element: <SignIn/>
    },
    {
      path: RouteName.MyList,
      element: (
        <PrivateRoute authStatus={authStatus}>
          <MyList films={films}/>
        </PrivateRoute>
      )
    },
    {
      path: RouteName.Film,
      element: <Movie similarFilms={similarFilms}/>
    },
    {
      path: RouteName.AddReview,
      element: (
        <PrivateRoute authStatus={authStatus}>
          <AddReview/>
        </PrivateRoute>
      )
    },
    {
      path: RouteName.Player,
      element: <Player films={films}/>
    },
    {
      path: RouteName.NotFound,
      element: <NotFound/>
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
