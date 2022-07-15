import {Header, Footer} from '../../components';
import {FilmType} from '../../types/film';
import FilmsList from '../../components/films-list/films-list';

type MyListProps = {
  films: FilmType[];
}

function MyList({films}: MyListProps): JSX.Element {
  const myFilms = films.filter((item) => item.isFavorite);
  const myFilmsCount = myFilms.length;

  return (
    <div className="user-page">

      <Header className="user-page__head">
        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">{myFilmsCount}</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={myFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;

