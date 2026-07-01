import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutCard}>
        <h1>About This Project</h1>

        <p className={styles.description}>
          Student Dashboard is a simple React application designed to manage
          student information efficiently. Users can register students, search
          for them by name, filter by GPA, and manage records through a clean
          and user-friendly interface.
        </p>

        <div className={styles.section}>
          <h2>Features</h2>
          <ul>
            <li>Register new students</li>
            <li>Search students by name</li>
            <li>Filter students by GPA</li>
            <li>Delete student records</li>
            <li>Save data using Local Storage</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Technologies Used</h2>
          <div className={styles.techList}>
            <span>React</span>
            <span>React Router</span>
            <span>JavaScript</span>
            <span>CSS Modules</span>
            <span>Local Storage</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
