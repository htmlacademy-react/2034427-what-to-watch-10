import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AddReview, Main, Movie, MyList, NotFound, Player, SignIn} from '../../pages';
import {PrivateRoute} from '../';
import {PromoInfoType} from '../../types/common';
import {RouteName} from '../../constants/route-name';
import {AuthStatus} from '../../constants/auth-status';
import {RouteType} from '../../types/route-type';

type AppProps = {
  promoInfo: PromoInfoType
}

function App({promoInfo}: AppProps): JSX.Element {
  const authStatus = AuthStatus.Auth;
  const routes: RouteType[] = [
    {
      path: RouteName.Main,
      element: <Main promoInfo={promoInfo}/>
    },
    {
      path: RouteName.Genre,
      element: <Main promoInfo={promoInfo}/>
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
      path: RouteName.Film,
      element: <Movie/>
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
      element: <Player/>
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
