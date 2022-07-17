import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {FilmType} from '../../types/film';
import {getFilmUrl} from '../../utils/route';

type FilmCardProps = {
  film: FilmType;
  activeCard: number | null;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, activeCard, onMouseEnter, onMouseLeave} = props;
  const {id, previewImage, name} = film;

  return (
    <article
      className={
        classNames(
          'small-film-card',
          'catalog__films-card',
          {'active': activeCard === id}
        )
      }
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>

      <h3 className="small-film-card__title">
        <Link
          to={getFilmUrl(id)}
          className="small-film-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
