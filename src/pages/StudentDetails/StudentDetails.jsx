import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

function StudentDetails() {
  const { id } = useParams();

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const student = students.find((student) => student.id === Number(id));

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
