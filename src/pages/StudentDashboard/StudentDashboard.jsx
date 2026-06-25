import { useState, useContext } from "react";
import StudentForm from "../../components/StudentForm/StudentForm";
import StudentList from "../../components/StudentList/StudentList";
import styles from "./StudentDashboard.module.css";
import ToastStyle from "../../components/Toast/Toast.module.css";
import { StudentContext } from "../../context/StudentContext";
function StudentDashboard() {
  const { students } = useContext(StudentContext);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [gpaFilter, setGpaFilter] = useState("");

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((student) => {
      if (gpaFilter === "") return true;
      return student.gpa >= Number(gpaFilter);
    });
  return (
    <div>
      {toast && <div className={ToastStyle["toast"]}>{toast}</div>}

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
