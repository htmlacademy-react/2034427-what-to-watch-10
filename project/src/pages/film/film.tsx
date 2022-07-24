import {Navigate, useParams} from 'react-router-dom';
import {Header, Footer, Poster, PosterDescription, FilmMenu, FilmDetails, FilmOverview, FilmReviews, FilmsList} from '../../components';
import {RouteName} from '../../constants/route-name';
import {getFilm, getFilmTab} from '../../utils/common';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectFilms} from '../../store/select';
import {fetchFilms} from '../../store/actions';
import {useEffect} from 'react';

const MAX_COUNT_SIMILAR_FILMS = 4;

export enum TabName {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

function Film(): JSX.Element {
  const dispatch = useAppDispatch();
  const similarFilms = useAppSelector(selectFilms)
    .slice(0, MAX_COUNT_SIMILAR_FILMS);
  const tab = getFilmTab();
  const params = useParams();
  const film = getFilm(params.id as string);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  if (!film) {
    return <Navigate to={RouteName.NotFound} />;
  }

  const {id, name, genre, released, posterImage, backgroundImage} = film;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head"/>

          <div className="film-card__wrap">
            <PosterDescription id={id} name={name} genre={genre} releaseDate={released}/>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster
              posterSrc={posterImage}
              posterTitle="The Grand Budapest Hotel poster"
              className="film-card__poster--big"
            />

            <div className="film-card__desc">
              <FilmMenu />

              {
                tab === TabName.Overview &&
                <FilmOverview film={film} />
              }

              {
                tab === TabName.Details &&
                <FilmDetails film={film} />
              }

              {
                tab === TabName.Reviews &&
                <FilmReviews />
              }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Film;
