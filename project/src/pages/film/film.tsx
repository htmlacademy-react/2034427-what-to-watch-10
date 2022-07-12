import {FilmCard, Header, Footer, Poster, PosterDescription, FilmMenu} from '../../components';

function Film(): JSX.Element {
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
              <FilmMenu />

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>
                  In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&#39;s friend and protege.
                </p>

                <p>
                  Gustave prides himself on providing first-class service to the hotel&#39;s guests, including
                  satisfying
                  the sexual needs of the many elderly women who stay there. When one of Gustave&#39;s lovers dies
                  mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
                  murder.
                </p>

                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                <p className="film-card__starring">
                  <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong>
                </p>
              </div>
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
