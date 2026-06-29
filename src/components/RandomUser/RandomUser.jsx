import useFetch from "../../hooks/useFetch";
import styles from "./RandomUser.module.css";

function RandomUser() {
  const { data, loading, error, refetch } = useFetch(
    "https://randomuser.me/api/",
  );

  let user;

  if (data) {
    user = data.results[0];
  } else {
    user = undefined;
  }

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles.userError}>
        <h2>{error}</h2>

        <button className={styles.btn} onClick={refetch}>
          Try Again
        </button>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className={styles.randomUserCard}>
      <div className={styles.randomUserTop}></div>

      <div className={styles.randomUserImage}>
        <img src={user.picture.large} alt="User Avatar" />
      </div>

      <h2>
        {user.name.first} {user.name.last}
      </h2>

      <p>{user.email}</p>

      <p>
        {user.location.city}, {user.location.country}
      </p>

      <button className={styles.btn} onClick={refetch}>
        Next User
      </button>
    </div>
  );
}

export default RandomUser;
