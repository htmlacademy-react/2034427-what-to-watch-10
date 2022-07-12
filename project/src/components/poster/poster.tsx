type FilmPosterProps = {
  posterSrc: string;
  posterTitle: string;
  className?: string;
}

function Poster(props: FilmPosterProps): JSX.Element {

  const {posterSrc, posterTitle, className} = props;

  return (
    <div className={`film-card__poster ${className || ''}`}>
      <img
        src={posterSrc}
        alt={posterTitle}
        width="218"
        height="327"
      />
    </div>
  );
}

export default Poster;
