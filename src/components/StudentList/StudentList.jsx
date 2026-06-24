import styles from "./StudentList.module.css";

function StudentList({ students, showDetails, deleteStudent }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Major</th>
            <th>GPA</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5">No students yet</td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.major}</td>
                <td>{student.gpa}</td>

                <td className={styles.actions}>
                  <button
                    className={styles.btn}
                    onClick={() => showDetails(student)}
                  >
                    View
                  </button>

                  <button
                    className={`${styles.btn} ${styles.deleteBtn}`}
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
