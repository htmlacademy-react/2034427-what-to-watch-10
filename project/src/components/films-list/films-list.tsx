import {useState} from 'react';
import {FilmCard} from '../index';
import {FilmType} from '../../types/film';

type FilmsListProps = {
  films: FilmType[];
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardMouseOver = (cardId: number): void =>
    setActiveCard(cardId);

  const handleCardMouseOut = (): void =>
    setActiveCard(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) =>
        (
          <FilmCard
            key={film.id}
            film={film}
            activeCard={activeCard}
            handleCardMouseOver={handleCardMouseOver}
            handleCardMouseOut={handleCardMouseOut}
          />
        )
      )}
    </div>
  );
}

export default FilmsList;
