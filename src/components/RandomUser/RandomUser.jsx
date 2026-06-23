import { useState, useEffect } from "react";
import styles from "./RandomUser.module.css";

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();

      return data.results[0];
    } catch {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    let ignore = false;

    const loadUser = async () => {
      setLoading(true);
      setError("");

      try {
        const newUser = await fetchUser();

        if (!ignore) {
          setUser(newUser);
        }
      } catch {
        if (!ignore) {
          setError("Something went wrong. Please try again.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      ignore = true;
    };
  }, []);

  const handleNextUser = async () => {
    setLoading(true);
    setError("");

    try {
      const newUser = await fetchUser();
      setUser(newUser);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return (
      <div>
        <h2>{error}</h2>

        <button onClick={handleNextUser}>Try Again</button>
      </div>
    );
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

      <p> {user.email}</p>

      <p>
        {user.location.city}, {user.location.country}
      </p>

      <button className={styles.btn} onClick={handleNextUser}>
        Next User
      </button>
    </div>
  );
}

export default RandomUser;
