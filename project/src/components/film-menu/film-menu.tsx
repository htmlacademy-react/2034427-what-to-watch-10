import {Link, useLocation} from 'react-router-dom';
import classNames from 'classnames';
import {TabName} from '../../pages/film/film';

type FilmMenuProps = {
  currentTab?: string|null;
}

function FilmMenu({currentTab}: FilmMenuProps): JSX.Element {
  const location = useLocation();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li
          className={classNames(
            'film-nav__item',
            {'film-nav__item--active': currentTab === TabName.Overview}
          )}
        >
          <Link
            to={`${location.pathname}?tab=${TabName.Overview}`}
            className="film-nav__link"
          >
            Overview
          </Link>
        </li>
        <li
          className={classNames(
            'film-nav__item',
            {'film-nav__item--active': currentTab === TabName.Details}
          )}
        >
          <Link
            to={`${location.pathname}?tab=${TabName.Details}`}
            className="film-nav__link"
          >
            Details
          </Link>
        </li>
        <li
          className={classNames(
            'film-nav__item',
            {'film-nav__item--active': currentTab === TabName.Reviews}
          )}
        >
          <Link
            to={`${location.pathname}?tab=${TabName.Reviews}`}
            className="film-nav__link"
          >
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FilmMenu;
