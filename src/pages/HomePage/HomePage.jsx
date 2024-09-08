import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../searchApi';
import { Loader } from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import toast, { Toaster } from 'react-hot-toast';

export default function HomePage() {
  const [trendsMovie, setTrendsMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const responce = await getTrendingMovies();
        setTrendsMovie(responce.results);
      } catch (error) {
        setError(error.message);
        toast.error("This didn't work.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : trendsMovie.length > 0 ? (
        <MovieList trendsMovie={trendsMovie} />
      ) : (
        <p>No movies found.</p>
      )}
      {error && <Toaster position="top-right" reverseOrder={false} />}
    </div>
  );
}
