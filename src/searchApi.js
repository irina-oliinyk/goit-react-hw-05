import axios from 'axios';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.

export async function getTrendingMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDhkNzk5MjkwMDQ5OWM1ZDFmYzgxYjBmOTUyMDU3NyIsIm5iZiI6MTcyNTc0ODY2NS43MzcyMzMsInN1YiI6IjY2ZGEyZTRiNGEwODA4ZGE3YTVkYmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2PeKja5dtLpumxsAMk3GKhvurX6SXsNNh0oRQjrsgAk',
      },
    },
  );
  return response.data;
}

// пошук фільму за ключовим словом на сторінці фільмів

export async function searchMovie(query) {
  return axios.get('https://api.themoviedb.org/3/search/movie', {
    params: { language: 'en-US', query },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDhkNzk5MjkwMDQ5OWM1ZDFmYzgxYjBmOTUyMDU3NyIsIm5iZiI6MTcyNTc0ODY2NS43MzcyMzMsInN1YiI6IjY2ZGEyZTRiNGEwODA4ZGE3YTVkYmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2PeKja5dtLpumxsAMk3GKhvurX6SXsNNh0oRQjrsgAk',
    },
  });
}

// запит повної інформації про фільм для сторінки кінофільму

export async function getMovieDetails(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDhkNzk5MjkwMDQ5OWM1ZDFmYzgxYjBmOTUyMDU3NyIsIm5iZiI6MTcyNTc0ODY2NS43MzcyMzMsInN1YiI6IjY2ZGEyZTRiNGEwODA4ZGE3YTVkYmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2PeKja5dtLpumxsAMk3GKhvurX6SXsNNh0oRQjrsgAk',
      },
    },
  );
  return response.data;
}

// запит інформації про акторський склад для сторінки кінофільму

export async function geyMovieCredits(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDhkNzk5MjkwMDQ5OWM1ZDFmYzgxYjBmOTUyMDU3NyIsIm5iZiI6MTcyNTc0ODY2NS43MzcyMzMsInN1YiI6IjY2ZGEyZTRiNGEwODA4ZGE3YTVkYmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2PeKja5dtLpumxsAMk3GKhvurX6SXsNNh0oRQjrsgAk',
      },
    },
  );
  return response.data;
}

// запит оглядів для сторінки кінофільму

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDhkNzk5MjkwMDQ5OWM1ZDFmYzgxYjBmOTUyMDU3NyIsIm5iZiI6MTcyNTc0ODY2NS43MzcyMzMsInN1YiI6IjY2ZGEyZTRiNGEwODA4ZGE3YTVkYmY0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2PeKja5dtLpumxsAMk3GKhvurX6SXsNNh0oRQjrsgAk',
      },
    },
  );
  return response.data;
}
