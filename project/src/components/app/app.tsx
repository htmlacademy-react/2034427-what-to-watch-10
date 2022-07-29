import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AddReview, Main, Movie, MyList, NotFound, Player, SignIn} from '../../pages';
import {PrivateRoute} from '../';
import {RouteName} from '../../constants/route-name';
import {AuthStatus} from '../../constants/auth-status';
import {RouteType} from '../../types/route-type';
import {useAppSelector} from '../../hooks';
import {selectIsDataLoaded} from '../../store/select';
import Loader from '../loader/loader';

function App(): JSX.Element {
  const authStatus = AuthStatus.Auth;
  const isDataLoaded = useAppSelector(selectIsDataLoaded);
  const routes: RouteType[] = [
    {
      path: RouteName.Main,
      element: <Main/>
    },
    {
      path: RouteName.Genre.path,
      element: <Main/>
    },
    {
      path: RouteName.SignIn,
      element: <SignIn/>
    },
    {
      path: RouteName.MyList,
      element: (
        <PrivateRoute authStatus={authStatus}>
          <MyList/>
        </PrivateRoute>
      )
    },
    {
      path: RouteName.Film.path,
      element: <Movie/>
    },
    {
      path: RouteName.AddReview.path,
      element: (
        <PrivateRoute authStatus={authStatus}>
          <AddReview/>
        </PrivateRoute>
      )
    },
    {
      path: RouteName.Player.path,
      element: <Player/>
    },
    {
      path: RouteName.NotFound,
      element: <NotFound/>
    },
  ];

  if (isDataLoaded) {
    return <Loader/>;
  }

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
