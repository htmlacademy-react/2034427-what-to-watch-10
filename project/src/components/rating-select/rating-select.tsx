import React from 'react';

function RatingSelect(): JSX.Element {
  const ratings = [...Array(11).keys()]
    .slice(1)
    .reverse();

  return (
    <div className="rating">
      <div className="rating__stars">
        {
          ratings.map((item) => (
            <React.Fragment key={item}>
              <input
                className="rating__input"
                id={`star-${item}`}
                type="radio"
                name="rating"
                value={item}
                defaultChecked={item === 8}
              />
              <label
                className="rating__label"
                htmlFor={`star-${item}`}
              >
                Rating {item}
              </label>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  );
}

export default RatingSelect;
