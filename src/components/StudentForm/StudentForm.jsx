import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import styles from "./StudentForm.module.css";
import useForm from "../../hooks/useForm";

function StudentForm() {
  const { addStudent } = useContext(StudentContext);

  const { formData, error, handleChange, resetForm, validate } = useForm({
    name: "",
    email: "",
    major: "",
    gpa: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    addStudent({
      ...formData,
      id: Date.now(),
    });

    resetForm();
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
