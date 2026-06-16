import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";
import Todo from "./components/ToDo";

function App() {
  const student = {
    name: "Berlanti Masalha",
    major: "Computer Science",
    university: "An-Najah National University",
    image: "../src/assets/profileIcon.jpeg",
  };

  return (
    <div className="container">
      <ProfileCard student={student} />

      <Counter />
      <Todo />
    </div>
  );
}

export default App;
