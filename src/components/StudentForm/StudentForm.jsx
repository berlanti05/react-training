import { useState } from "react";
import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import styles from "./StudentForm.module.css";

function StudentForm() {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    gpa: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gpa = Number(formData.gpa);

    if (!formData.name || !formData.email || !formData.major || !formData.gpa) {
      setError("All fields are required");
      return;
    }

    if (gpa < 0 || gpa > 4) {
      setError("GPA must be between 0 and 4");
      return;
    }

    setError("");

    addStudent({
      ...formData,
      id: Date.now(),
    });

    setFormData({
      name: "",
      email: "",
      major: "",
      gpa: "",
    });
  };

  return (
    <div className={styles["student-form"]}>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="major"
          placeholder="Major"
          value={formData.major}
          onChange={handleChange}
        />

        <input
          type="number"
          name="gpa"
          placeholder="GPA"
          value={formData.gpa}
          onChange={handleChange}
        />

        <button className={styles.btn} type="submit">
          Register
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

export default StudentForm;
