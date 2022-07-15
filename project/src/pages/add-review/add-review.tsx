import {Header, Poster, CommentForm} from '../../components';
import {Link, Navigate, useParams} from 'react-router-dom';
import {films} from '../../mocks/films';
import {RouteName} from '../../constants/route-name';

function AddReview(): JSX.Element {
  const {id} = useParams();

  const film = id
    && films.find((item) => item.id === parseInt(id, 10));

  if (!film) {
    return <Navigate to={RouteName.NotFound} />;
  }

  const {name, posterImage} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={RouteName.Film.replace(/:id/, String(id))}
                  className="breadcrumbs__link"
                >
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  to={RouteName.AddReview.replace(/:id/, String(id))}
                  className="breadcrumbs__link"
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
        </Header>

        <Poster
          className="film-card__poster--small"
          posterSrc={posterImage}
          posterTitle={name}
        />
      </div>

      <CommentForm />
    </section>
  );
}

export default AddReview;
