import {FilmCard, Header, Footer, Poster, PosterDescription, FilmMenu} from '../../components';
import {useSearchParams} from 'react-router-dom';
import {FilmDetails} from '../../components';
import {FilmOverview} from '../../components';
import {FilmReviews} from '../../components';

export enum TabName {
  Overview = 'overview',
  Details = 'details',
  Reviews = 'reviews',
}

function Film(): JSX.Element {
  const [searchParams] = useSearchParams({tab: 'overview'});
  const currentTab = searchParams.get('tab');

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="film-card__head"/>

          <div className="film-card__wrap">
            <PosterDescription name="The Grand Budapest Hotel" genre="Drama" releaseDate={2014}/>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster
              posterSrc="img/the-grand-budapest-hotel-poster.jpg"
              posterTitle="The Grand Budapest Hotel poster"
              className="film-card__poster--big"
            />

            <div className="film-card__desc">
              <FilmMenu currentTab={currentTab} />

              {
                currentTab === TabName.Overview &&
                <FilmOverview />
              }

              {
                currentTab === TabName.Details &&
                <FilmDetails />
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

          <div className="catalog__films-list">
            {[...Array(4).keys()].map((it) => <FilmCard key={it}/>)}
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Film;
