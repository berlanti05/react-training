import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditStudent.module.css";
import { StudentContext } from "../../context/StudentContext";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { students, updateStudent } = useContext(StudentContext);

  const student = students.find((student) => String(student.id) === id);
  const [formData, setFormData] = useState(
    student || {
      name: "",
      email: "",
      major: "",
      gpa: "",
    },
  );

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
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

    await updateStudent(student.id, formData);

    navigate("/students");
  };

  if (!student) {
    return <h2 className={styles.notFound}>Student not found</h2>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edit Student</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          className={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          className={styles.input}
          type="text"
          name="major"
          value={formData.major}
          onChange={handleChange}
          placeholder="Major"
        />

        <input
          className={styles.input}
          type="number"
          name="gpa"
          value={formData.gpa}
          onChange={handleChange}
          placeholder="GPA"
        />

        <button className={styles.button} type="submit">
          Save Changes
        </button>

        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

export default EditStudent;
