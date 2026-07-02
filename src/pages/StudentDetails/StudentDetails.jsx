import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { StudentContext } from "../../context/StudentContext";

function StudentDetails() {
  const { id } = useParams();

  // Fixed after review: StudentDetails was still reading from localStorage.
  // It now consumes students from StudentContext to stay synchronized
  // with the shared application state.
  const { students } = useContext(StudentContext);

  const student = students.find((student) => String(student.id) === id);

  if (!student) {
    return (
      <div>
        <h2>Student not found</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Student Details</h1>

      <ProfileCard student={student} />
    </div>
  );
}

export default StudentDetails;
