import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {RouteName} from '../../constants/route-name';
import {getGenres} from '../../utils/common';
import {getGenreUrl} from '../../utils/route';
import {useAppSelector} from '../../hooks';
import {selectFilms} from '../../store/reducer';

const MAX_COUNT_GENRES = 9;

type GenreMenuProps = {
  genreName?: string;
}

function GenreMenu({genreName}: GenreMenuProps): JSX.Element {
  const films = useAppSelector(selectFilms);
  const genres = getGenres(films);

  return (
    <ul className="catalog__genres-list">
      <li
        className={classNames(
          'catalog__genres-item',
          {'catalog__genres-item--active': !genreName}
        )}
      >
        <Link
          to={RouteName.Main}
          className="catalog__genres-link"
        >
          All genres
        </Link>
      </li>
      {
        genres.map((genre) => (
          <li
            key={genre}
            className={classNames(
              'catalog__genres-item',
              {'catalog__genres-item--active': genreName === genre.toLowerCase()}
            )}
          >
            <Link
              to={getGenreUrl(genre)}
              className="catalog__genres-link"
            >
              {genre}
            </Link>
          </li>
        )).slice(0, MAX_COUNT_GENRES)
      }
    </ul>
  );
}

export default GenreMenu;
