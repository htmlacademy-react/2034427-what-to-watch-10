import {Link, useParams} from 'react-router-dom';
import {RouteName} from '../../constants/route-name';
import classNames from 'classnames';

function GenreMenu(): JSX.Element {

  const genres = [
    'Comedies',
    'Crime',
    'Documentary',
    'Dramas',
    'Horror',
    'Kids & Family',
    'Romance',
    'Sci-Fi',
    'Thrillers'
  ];

  const {genreName} = useParams();

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
