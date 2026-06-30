import { useState, useContext } from "react";
import StudentForm from "../../components/StudentForm/StudentForm";
import StudentList from "../../components/StudentList/StudentList";
import styles from "./StudentDashboard.module.css";
import { StudentContext } from "../../context/StudentContext";

function StudentDashboard() {
  const { students, loading, error } = useContext(StudentContext);

  const [search, setSearch] = useState("");
  const [gpaFilter, setGpaFilter] = useState("");

  if (loading) {
    return <h2 className={styles.loading}>Loading students...</h2>;
  }

  if (error) {
    return <h2 className={styles.error}>{error}</h2>;
  }

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((student) => {
      if (gpaFilter === "") return true;

      return Number(student.gpa) >= Number(gpaFilter);
    });

  return (
    <div>
      <StudentForm />

      <div className={styles["search-filters"]}>
        <input
          type="text"
          placeholder="Search student by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles["search-input"]}
        />

        <input
          type="number"
          placeholder="Filter by GPA (e.g. 3)"
          value={gpaFilter}
          onChange={(e) => setGpaFilter(e.target.value)}
          className={styles["search-input"]}
        />
      </div>

      <div className={styles["student-content"]}>
        <StudentList students={filteredStudents} />
      </div>
    </div>
  );
}

export default StudentDashboard;
