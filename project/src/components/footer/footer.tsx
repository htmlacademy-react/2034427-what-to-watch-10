import {Link} from 'react-router-dom';
import {RouteName} from '../../constants/route-name';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to={RouteName.Main} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© {new Date().getFullYear()} What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
