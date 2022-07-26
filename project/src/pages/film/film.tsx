import {SimilarFilms, FilmCardFull, Footer} from '../../components';

function Film(): JSX.Element {

  return (
    <>
      <FilmCardFull/>

      <div className="page-content">
        <SimilarFilms/>

        <Footer/>
      </div>
    </>
  );
}

export default Film;
