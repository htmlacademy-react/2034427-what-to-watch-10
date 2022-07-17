import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {TabName} from '../../pages/film/film';
import {getFilmTab} from '../../utils/common';

function FilmMenu(): JSX.Element {
  const tab = getFilmTab();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li
          className={classNames(
            'film-nav__item',
            {'film-nav__item--active': tab === TabName.Overview}
          )}
        >
          <Link
            to={`?tab=${TabName.Overview}`}
            className="film-nav__link"
          >
            Overview
          </Link>
        </li>
        <li
          className={classNames(
            'film-nav__item',
            {'film-nav__item--active': tab === TabName.Details}
          )}
        >
          <Link
            to={`?tab=${TabName.Details}`}
            className="film-nav__link"
          >
            Details
          </Link>
        </li>
        <li
          className={classNames(
            'film-nav__item',
            {'film-nav__item--active': tab === TabName.Reviews}
          )}
        >
          <Link
            to={`?tab=${TabName.Reviews}`}
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
