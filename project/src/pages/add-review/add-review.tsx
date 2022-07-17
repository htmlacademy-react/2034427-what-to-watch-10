import {Header, Poster, CommentForm} from '../../components';
import {Link, Navigate, useParams} from 'react-router-dom';
import {RouteName} from '../../constants/route-name';
import {getAddReviewUrl, getFilmUrl} from '../../utils/route';
import {getFilm} from '../../utils/common';

function AddReview(): JSX.Element {
  const params = useParams();
  const film = getFilm(params.id as string);

  if (!film) {
    return <Navigate to={RouteName.NotFound} />;
  }

  const {id, name, posterImage} = film;

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
                  to={getFilmUrl(id)}
                  className="breadcrumbs__link"
                >
                  {name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  to={getAddReviewUrl(id)}
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
