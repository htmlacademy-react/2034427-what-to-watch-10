import {Header, Poster, PosterDescription} from '../index';
import {useAppSelector} from '../../hooks';
import {selectPromoFilm} from '../../store/select';

function PromoFilm() {
  const promoFilm = useAppSelector(selectPromoFilm);
  const {id, name, genre, released, posterImage, backgroundImage} = promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className="film-card__head"/>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <Poster posterSrc={posterImage} posterTitle={name}/>

          <PosterDescription
            id={id}
            name={name}
            genre={genre}
            releaseDate={released}
          />
        </div>
      </div>
    </section>
  );
}

export default PromoFilm;
