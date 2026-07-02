import styles from "./PreviewCard.module.css";
function PreviewCard({ student }) {
  if (!student) {
    return (
      <div className={styles.previewcard}>
        <h2>Student Preview</h2>
        <p>Student data is not available.</p>
      </div>
    );
  }

  return (
    <div className={styles.previewcard}>
      <h2>Student Preview</h2>

      <p>
        <strong>Name:</strong> {student?.name}
      </p>

      <p>
        <strong> Email:</strong> {student?.email}
      </p>

      <p>
        <strong>Major:</strong> {student?.major}
      </p>

      <p>
        <strong>GPA:</strong> {student?.gpa}
      </p>
    </div>
  );
}

export default PreviewCard;
