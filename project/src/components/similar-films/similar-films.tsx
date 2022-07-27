import {FilmsList} from '../index';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectFilms} from '../../store/select';
import {useEffect} from 'react';
import {fetchFilms} from '../../store/actions';
import {MAX_COUNT_SIMILAR_FILMS} from '../../constants/common';

function SimilarFilms(): JSX.Element {
  const dispatch = useAppDispatch();
  const similarFilms = useAppSelector(selectFilms)
    .slice(0, MAX_COUNT_SIMILAR_FILMS);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={similarFilms}/>
    </section>
  );
}

export default SimilarFilms;
