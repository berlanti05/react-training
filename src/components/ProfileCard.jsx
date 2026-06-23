function ProfileCard({ student }) {
  if (!student) return null;
  return (
    <div className="profile-card">
      <div className="card-top"></div>

      <div className="profile-image">
        <img src={student.image} alt="Profile" />
      </div>

      <h2>{student.name}</h2>

      <p>
        <i className="fa-solid fa-book-open"></i> {student.major}
      </p>

      <p>
        <i className="fa-solid fa-building-columns"></i> {student.university}
      </p>
    </div>
  );
}

export default ProfileCard;
