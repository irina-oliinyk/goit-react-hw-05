import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

// export default function MovieList({ trendsMovie }) {
//   return (
//     <div>
//       <h2>Trending day</h2>
//       <ul>
//         {trendsMovie.map(movie => {
//           <li key={movie.id}>
//             <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//           </li>;
//         })}
//       </ul>
//     </div>
//   );
// }

export default function MovieList({ trendsMovie }) {
  const location = useLocation();
  return (
    <div>
      <h2 className={css.title}>Trending day</h2>
      <ul className={css.list}>
        {trendsMovie.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={location.state}
              className={css.link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
