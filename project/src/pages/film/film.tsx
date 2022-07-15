import {Navigate, useParams, useSearchParams} from 'react-router-dom';
import {Header, Footer, Poster, PosterDescription, FilmMenu, FilmDetails, FilmOverview, FilmReviews, FilmsList} from '../../components';
import {FilmType} from '../../types/film';
import {films} from '../../mocks/films';
import {RouteName} from '../../constants/route-name';

export enum TabName {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

type FilmProps = {
  similarFilms: FilmType[],
}

function Film({similarFilms}: FilmProps): JSX.Element {
  const {id} = useParams();
  const [searchParams] = useSearchParams({tab: 'overview'});
  const currentTab = searchParams.get('tab');
  const film = id && films.find((item) => item.id === parseInt(id, 10));

  if (!film) {
    return <Navigate to={RouteName.NotFound} />;
  }

  const {name, genre, released, posterImage, backgroundImage} = film;

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
            <PosterDescription id={film.id} name={name} genre={genre} releaseDate={released}/>
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
                currentTab === TabName.Overview &&
                <FilmOverview film={film} />
              }

              {
                currentTab === TabName.Details &&
                <FilmDetails film={film} />
              }

              {
                currentTab === TabName.Reviews &&
                <FilmReviews />
              }
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Film;
