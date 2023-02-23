import { useRouteError } from "react-router-dom";
import styles from '../../assets/styles/pages/ErrorPage.module.scss'

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errBox}>
      <h1 className={styles.title}>Oops!</h1>
      <p className={styles.message}>Sorry, an unexpected error has occurred.</p>
      <p className={styles.errInfo}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}