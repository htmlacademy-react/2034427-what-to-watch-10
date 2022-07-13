import {FilmCard, Footer, GenreMenu, Header, Poster, PosterDescription} from '../../components';
import {PromoInfoType} from '../../types/common';

type MainProps = {
  promoInfo: PromoInfoType;
}

function Main({promoInfo}: MainProps): JSX.Element {

  const {name, genre, releaseDate, posterSrc} = promoInfo;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className="film-card__head"/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <Poster posterSrc={posterSrc} posterTitle={name}/>

            <PosterDescription name={name} genre={genre} releaseDate={releaseDate}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreMenu />

          <div className="catalog__films-list">
            {[...Array(8).keys()].map((it) => <FilmCard key={it}/>)}
          </div>

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
