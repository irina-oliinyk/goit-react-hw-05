// import MovieCast from '../../components/MovieCast/MovieCast';
// import MovieReviews from '../../components/MovieReviews/MovieReviews';
import {
  useParams,
  Outlet,
  NavLink,
  useLocation,
  Link,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../searchApi';
import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';
import css from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieDetails() {
      setLoading(true);
      setError(null);
      try {
        const response = await getMovieDetails(movieId);
        setMovie(response);
        // console.log(response);
      } catch (error) {
        setError('Error fetching movie details.');
        console.log(error);

        toast.error('Error fetching movie details.');
      } finally {
        setLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state || '/'}>
        <button className={css.goBackBtn}>Go back</button>
      </Link>
      {loading && <Loader />}
      {movie && !loading && (
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={css.img}
          />
          <div className={css.containerDescription}>
            <h1 className={css.title}>{movie.title}</h1>
            <p className={css.overview}>{movie.overview}</p>
            <p className={css.description}>
              Release Date: <span>{movie.release_date}</span>
            </p>
            <p className={css.description}>
              Runtime: <span>{movie.runtime}</span>
            </p>
            <p className={css.description}>
              Genres:{' '}
              <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
            </p>
            <p className={css.description}>
              Budget: <span>${movie.budget.toLocaleString()}</span>
            </p>
            <p className={css.description}>
              Revenue: <span>${movie.revenue.toLocaleString()}</span>
            </p>
            <p className={css.description}>
              Vote Average: <span>{movie.vote_average}</span>
            </p>
            <p className={css.description}>
              Vote Count: <span>{movie.vote_count}</span>
            </p>
            <p className={css.description}>
              Status: <span>{movie.status}</span>
            </p>
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={css.movieLink}
            >
              Official Website
            </a>
          </div>
        </div>
      )}
      <h2 className={css.titleDescription}>Additional information</h2>
      <ul className={css.list}>
        <li>
          <NavLink
            to="cast"
            className={({ isActive }) => {
              isActive ? css.active : css.link;
            }}
            state={location.state}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) => {
              isActive ? css.active : css.link;
            }}
            state={location.state}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
