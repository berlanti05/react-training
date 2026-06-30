import styles from "./StudentList.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";

function StudentList({ students }) {
  const { deleteStudent } = useContext(StudentContext);
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
                  <Link className={styles.btn} to={`/students/${student.id}`}>
                    View
                  </Link>

                  <Link
                    className={styles.btn}
                    to={`/students/edit/${student.id}`}
                  >
                    Edit
                  </Link>

                  <button
                    className={`${styles.btn} ${styles.deleteBtn}`}
                    onClick={() => {
                      if (window.confirm("Delete this student?")) {
                        deleteStudent(student.id);
                      }
                    }}
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
