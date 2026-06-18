import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";
import Todo from "./components/ToDo";
import StudentForm from "./components/StudentForm";
import PreviewCard from "./components/PreviewCard";
import Toast from "./components/Toast";

function App() {
  const student = {
    name: "Berlanti Masalha",
    major: "Computer Science",
    university: "An-Najah National University",
    image: "../src/assets/profileIcon.jpeg",
  };

  const [filter, setFilter] = useState("all");
  const [registeredStudent, setRegisteredStudent] = useState(null);
  const [toast, setToast] = useState("");

  return (
    <div className="container">
      <ProfileCard student={student} />

      <Counter />

      <Todo filter={filter} setFilter={setFilter} />

      <StudentForm setStudent={setRegisteredStudent} setToast={setToast} />
      <Toast message={toast} />
      <PreviewCard student={registeredStudent} />
    </div>
  );
}

export default App;
