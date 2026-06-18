function PreviewCard({ student }) {
  if (!student) return null;

  return (
    <div className="preview-card">
      <h2>Student Preview</h2>

      <p>
        <strong>Name:</strong> {student.name}
      </p>

      <p>
        <strong>Email:</strong> {student.email}
      </p>

      <p>
        <strong>Major:</strong> {student.major}
      </p>

      <p>
        <strong>GPA:</strong> {student.gpa}
      </p>
    </div>
  );
}

export default PreviewCard;
