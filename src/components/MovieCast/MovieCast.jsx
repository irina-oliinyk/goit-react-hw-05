import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { geyMovieCredits } from '../../searchApi';
import css from './MovieCast.module.css';
import { Loader } from '../Loader/Loader';

export default function MoviesCast() {
  const [actor, setActor] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      setLoading(true);
      try {
        const response = await geyMovieCredits(movieId);
        setActor(response.cast);
        console.log(response.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.title}>Movie Cast</h2>

      {loading && <Loader />}

      {!loading && actor.length > 0 && (
        <ul className={css.list}>
          {actor.map(actor => (
            <li key={actor.cast_id} className={css.listItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={css.actorImage}
              />
              <div>
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p className={css.description}>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!loading && actor.length === 0 && (
        <p className={css.descriptionMsg}>No cast information available.</p>
      )}
    </div>
  );
}
