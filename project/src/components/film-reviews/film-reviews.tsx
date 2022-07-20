import {comments} from '../../mocks/comments';
import Review from '../review/review';

function FilmReviews(): JSX.Element {
  return (
    <div className="film-card__row">
      <div className="film-card__reviews">
        {
          comments.map((review, index) =>
            <Review key={review.id} review={review}/>)
        }
      </div>
    </div>
  );
}

export default FilmReviews;
