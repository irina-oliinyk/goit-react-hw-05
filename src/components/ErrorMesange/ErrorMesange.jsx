import css from './ErrorMesange.module.css';

export default function ErrorMesange() {
  return (
    <div>
      <p className={css.text}>
        Sorry, there was an error and the server is not responding. Please try
        again later
      </p>
    </div>
  );
}
