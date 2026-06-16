import ProfileCard from "./components/ProfileCard";

function App() {
  const student = {
    name: "Berlanti Masalha",
    major: "Computer Science",
    university: "An-Najah National University",
    image: "../src/assets/profileIcon.jpeg",
  };

  return (
    <div className="container">
      <h1>Student Profiles</h1>
      <ProfileCard student={student} />
    </div>
  );
}

export default App;
