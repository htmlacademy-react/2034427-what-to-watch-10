import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import classNames from 'classnames';
import {RouteName} from '../../constants/route-name';
import {getGenreUrl} from '../../utils/route';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectFilmGenres} from '../../store/select';
import {changeGenre} from '../../store/actions';

const MAX_COUNT_GENRES = 9;

function GenreMenu(): JSX.Element {
  const genres = useAppSelector(selectFilmGenres);
  const {genreName} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeGenre(genreName));
  },[genreName, dispatch]);

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
