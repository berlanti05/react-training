import styles from "./StudentList.module.css";
function StudentList({ students, showDetails, deleteStudent }) {
  return (
    <div className={styles["students-list"]}>
      <h2>Students List</h2>

      {students.length === 0 && <p>No students yet</p>}

      {students.map((student) => (
        <div key={student.id} className={styles["student-card"]}>
          <h3>{student.name}</h3>

          <p>{student.major}</p>

          <div className={styles["student-actions"]}>
            <button
              className={styles["btn"]}
              onClick={() => showDetails(student)}
            >
              View Details
            </button>

            <button
              className={styles["btn"]}
              onClick={() => {
                if (window.confirm("Delete this student?")) {
                  deleteStudent(student.id);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default StudentList;
