import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroCard}>
        <h1>Welcome to Student Dashboard</h1>

        <p className={styles.subtitle}>
          A simple and efficient platform for managing student records, tracking
          academic information, and organizing student data with ease.
        </p>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3>Register Students</h3>
            <p>Add and manage student information quickly.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>Smart Search</h3>
            <p>Find students instantly by their names.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>GPA Filtering</h3>
            <p>Filter students according to their GPA.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>Local Storage</h3>
            <p>Your data remains saved even after refreshing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
