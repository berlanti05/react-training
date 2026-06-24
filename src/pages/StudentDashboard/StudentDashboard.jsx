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
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [gpaFilter, setGpaFilter] = useState("");
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
      <h1 style={{ fontSize: "60px", color: "#ba8261", textAlign: "center" }}>
        Student Dashboard
      </h1>

      {toast && <div className={ToastStyle["toast"]}>{toast}</div>}

      <StudentForm addStudent={addStudent} />

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
        <StudentList
          students={filteredStudents}
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
