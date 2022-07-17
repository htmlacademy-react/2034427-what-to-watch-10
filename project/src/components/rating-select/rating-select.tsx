import React from 'react';

const RATING_LENGTH = 10;

type RatingSelectProps = {
  rating: number;
  onChangeRating: (value: string) => void;
}

function RatingSelect({rating, onChangeRating}: RatingSelectProps): JSX.Element {
  return (
    <div className="rating">
      <div className="rating__stars">
        {
          Array.from({length: RATING_LENGTH}, (_, index) => (
            <React.Fragment key={`rating-${index}`}>
              <input
                className="rating__input"
                id={`star-${RATING_LENGTH - index}`}
                type="radio"
                name="rating"
                value={rating}
                onChange={(evt) => onChangeRating(evt.target.value)}
                defaultChecked={RATING_LENGTH - index === 8}
              />
              <label
                className="rating__label"
                htmlFor={`star-${RATING_LENGTH - index}`}
              >
                Rating {RATING_LENGTH - index}
              </label>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  );
}

export default RatingSelect;
