import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Footer, GenreMenu, Header, Poster, PosterDescription, FilmsList} from '../../components';
import {FilmType} from '../../types/film';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectFilterFilms} from '../../store/reducer';
import {changeGenre, fetchFilms} from '../../store/actions';

type MainProps = {
  promoFilm: FilmType;
}

function Main({promoFilm}: MainProps): JSX.Element {
  const {id, name, genre, released, posterImage, backgroundImage} = promoFilm;
  const {genreName} = useParams();
  const dispatch = useAppDispatch();
  const genreList = useAppSelector(selectFilterFilms);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeGenre(genreName));
  },[genreName, dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className="film-card__head"/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <Poster posterSrc={posterImage} posterTitle={name}/>

            <PosterDescription id={id} name={name} genre={genre} releaseDate={released}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreMenu genreName={genreName} />

          <FilmsList films={genreList} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Main;
