import {DEFAULT_SHOW_FILMS} from '../../constants/common';

type ShowMoreButtonProps = {
  showCount: number;
  changeShowCount: (count: number) => void;
}

function ShowMoreButton(props: ShowMoreButtonProps): JSX.Element {
  const {showCount, changeShowCount} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => changeShowCount(showCount + DEFAULT_SHOW_FILMS)}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreButton;
