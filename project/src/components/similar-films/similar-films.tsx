import {FilmsList} from '../index';
import {useAppSelector} from '../../hooks';
import {selectFilms} from '../../store/select';
import {MAX_COUNT_SIMILAR_FILMS} from '../../constants/common';

function SimilarFilms(): JSX.Element {
  const similarFilms = useAppSelector(selectFilms)
    .slice(0, MAX_COUNT_SIMILAR_FILMS);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmsList films={similarFilms}/>
    </section>
  );
}

export default SimilarFilms;
