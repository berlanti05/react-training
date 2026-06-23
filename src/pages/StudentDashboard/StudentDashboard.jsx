import { useState, useEffect } from "react";
import StudentForm from "../../components/StudentForm/StudentForm";
import StudentList from "../../components/StudentList/StudentList";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import styles from "./StudentDashboard.module.css";
import ToastStyle from "../../components/Toast/Toast.module.css";
function StudentDashboard() {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [toast, setToast] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);

    setToast("Student added successfully ");

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));

    if (selectedStudent?.id === id) {
      setSelectedStudent(null);
    }

    setToast("Student deleted successfully");
  };

  const showDetails = (student) => {
    setSelectedStudent(student);
  };

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div className={styles["dashboard-container"]}>
      <h1 style={{ fontSize: "60px", color: "#ba8261", textAlign: "center" }}>
        Student Dashboard
      </h1>

      {toast && <div className={ToastStyle["toast"]}>{toast}</div>}

      <StudentForm addStudent={addStudent} />
      <div className={styles["student-content"]}>
        <StudentList
          students={students}
          showDetails={showDetails}
          deleteStudent={deleteStudent}
        />

        {selectedStudent && (
          <div>
            <ProfileCard student={selectedStudent} />

            <button
              className={styles.btn}
              onClick={() => setSelectedStudent(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
