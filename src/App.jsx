import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import StudentDetails from "./pages/StudentDetails/StudentDetails";
import About from "./pages/About/About";
import EditStudent from "./pages/EditStudent/EditStudent";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentDashboard />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
