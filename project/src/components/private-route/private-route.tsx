import {Navigate} from 'react-router-dom';
import {RouteName} from '../../constants/route-name';
import {AuthStatus} from '../../constants/auth-status';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={RouteName.SignIn}/>
  );
}

export default PrivateRoute;
