import {Footer} from '../../components';
import './not-found.css';
import {RouteName} from '../../constants/route-name';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <div className="error-page__content">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to={RouteName.Main} className="to-back">
          Go to home page
        </Link>
      </div>

      <Footer/>
    </div>
  );
}

export default NotFound;
