import {RatingSelect} from '../index';
import {FormEvent, useState} from 'react';
import {NewCommentType} from '../../types/reviews';

function CommentForm(): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleSetRating = (value: string) => {
    setRating(parseInt(value, 10));
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const formData: NewCommentType = {comment, rating};
    // eslint-disable-next-line
    alert(JSON.stringify(formData));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={(evt) => handleSubmit(evt)}>
        <RatingSelect onChangeRating={handleSetRating}/>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            onChange={(evt) => setComment(evt.target.value)}
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
