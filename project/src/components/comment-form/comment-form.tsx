import {RatingSelect} from '../index';
import {useState} from 'react';

function CommentForm(): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleSetRating = (value: string) => {
    setRating(parseInt(value, 10));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <RatingSelect rating={rating} onChangeRating={handleSetRating}/>

        <div className="add-review__text">
          <textarea
            value={comment}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            onChange={(evt) => setComment(evt.target.value)}
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
