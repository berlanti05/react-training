import profileIcon from "../../assets/profileIcon.jpeg";
import styles from "./ProfileCard.module.css";

function ProfileCard({ student }) {
  if (!student) {
    return (
      <div>
        <h2>Student data is not available</h2>
        <p>Please select a valid student.</p>
      </div>
    );
  }

  return (
    <div className={styles.profileCard}>
      <div className={styles.cardTop}></div>

      <div className={styles.profileImage}>
        <img src={student?.image || profileIcon} alt="Profile" />
      </div>

      <h1>{student?.name}</h1>

      <p style={{ fontSize: "20px" }}>
        University Email:
        {student?.email}
      </p>

      <p style={{ fontSize: "20px" }}>Major: {student?.major}</p>

      <p style={{ fontSize: "20px" }}>GPA: {student?.gpa}</p>
    </div>
  );
}

export default ProfileCard;
