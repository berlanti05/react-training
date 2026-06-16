function ProfileCard({ student }) {
  return (
    <div className="profile-card">
      <div className="card-top"></div>

      <div className="profile-image">
        <img src={student.image} alt="Profile" />
      </div>

      <h2>{student.name}</h2>

      <p>
        <strong>Major:</strong> {student.major}
      </p>

      <p>
        <strong>University:</strong> {student.university}
      </p>
    </div>
  );
}

export default ProfileCard;
