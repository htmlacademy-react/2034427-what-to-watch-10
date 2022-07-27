import {useEffect, useState} from 'react';
import {Footer, GenreMenu, FilmsList, ShowMoreButton, PromoFilm} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectFilterFilms} from '../../store/select';
import {fetchFilms} from '../../store/actions';
import {FilmType} from '../../types/film';
import {DEFAULT_SHOW_FILMS} from '../../constants/common';

type MainProps = {
  promoFilm: FilmType;
}

function Main({promoFilm}: MainProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [showCount, setShowCount] = useState<number>(DEFAULT_SHOW_FILMS);
  const filteredFilms = useAppSelector(selectFilterFilms);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  const getFilmsList = (films: FilmType[]) =>
    films.slice(0, showCount);

  return (
    <>
      <PromoFilm film={promoFilm}/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreMenu changeShowCount={setShowCount}/>

          <FilmsList films={getFilmsList(filteredFilms)}/>

          {
            filteredFilms.length > showCount &&
            <ShowMoreButton
              showCount={showCount}
              changeShowCount={setShowCount}
            />
          }
        </section>

        <Footer/>
      </div>
    </>
  );
}

export default Main;
