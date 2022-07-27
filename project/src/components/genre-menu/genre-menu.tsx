import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import classNames from 'classnames';
import {RouteName} from '../../constants/route-name';
import {getGenreUrl} from '../../utils/route';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectFilmGenres} from '../../store/select';
import {changeGenre} from '../../store/actions';
import {DEFAULT_SHOW_FILMS, MAX_COUNT_GENRES} from '../../constants/common';

type GenreMenuProps = {
  changeShowCount: (value: number) => void;
}

function GenreMenu({changeShowCount}: GenreMenuProps): JSX.Element {
  const genres = useAppSelector(selectFilmGenres);
  const {genreName} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeGenre(genreName));
    changeShowCount(DEFAULT_SHOW_FILMS);
  }, [genreName, dispatch, changeShowCount]);

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
