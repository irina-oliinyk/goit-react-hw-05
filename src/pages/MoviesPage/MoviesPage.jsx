import css from './MoviesPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { useState, useEffect } from 'react';
import { searchMovie } from '../../searchApi';
import MovieList from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const query = params.get('query');
  // const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.currentTarget.elements.topic.value.trim();
    if (searchQuery) {
      setParams({ query: searchQuery });
    }
    evt.currentTarget.reset();
  };

  useEffect(() => {
    async function getMoviesByQuery() {
      if (!query) return;
      setLoading(true);
      setMovies([]);
      setError(null);
      try {
        const response = await searchMovie(query);
        if (response.data.results.length === 0) {
          alert('No results found.');
        } else {
          setMovies(response.data.results);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
        setError(null);
      }
    }
    getMoviesByQuery();
  }, [query]);

  return (
    <div>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="topic"
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </header>
      {loading && <Loader />}
      {error && <Toaster position="top-right" reverseOrder={false} />}
      {loading ? (
        <Loader />
      ) : movies.length > 0 ? (
        <MovieList trendsMovie={movies} />
      ) : (
        <p className={css.p}>Please enter your request.</p>
      )}

      {/* {movies.length > 0 && (
        <ul className={css.list}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                <h3 className={css.title}>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
