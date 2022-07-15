import {Link} from 'react-router-dom';
import {RouteName} from '../../constants/route-name';
import classNames from 'classnames';
import {films} from '../../mocks/films';
import {getGenres} from '../../utils/common';

type GenreMenuProps = {
  genreName?: string;
}

function GenreMenu({genreName}: GenreMenuProps): JSX.Element {
  const genres = getGenres(films);

  const getGenreRoute = (genre: string): string =>
    RouteName.Genre.replace(/:genreName/, genre.toLowerCase());

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
              to={getGenreRoute(genre)}
              className="catalog__genres-link"
            >
              {genre}
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

export default GenreMenu;
