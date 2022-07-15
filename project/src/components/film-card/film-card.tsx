import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {FilmType} from '../../types/film';
import {RouteName} from '../../constants/route-name';

type FilmCardProps = {
  film: FilmType;
  activeCard: number|null;
  handleCardMouseOver: (id: number) => void;
  handleCardMouseOut: () => void;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {film, activeCard, handleCardMouseOver, handleCardMouseOut} = props;
  const {id, previewImage, name} = film;
  const playerUrl = RouteName.Film.replace(/:id/, String(id));

  return (
    <article
      className={
        classNames(
          'small-film-card',
          'catalog__films-card',
          {'active': activeCard === id}
        )
      }
      onMouseOver={() => handleCardMouseOver(id)}
      onMouseOut={handleCardMouseOut}
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
        <Link to={playerUrl} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
