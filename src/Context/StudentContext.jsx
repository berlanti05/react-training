import { createContext, useState, useEffect, useCallback } from "react";
import {
  getStudents,
  createStudent,
  removeStudent,
  updateStudent,
} from "../services/studentService";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadStudents();
  }, []);

  const addStudent = useCallback(async (student) => {
    try {
      setError("");

      const newStudent = await createStudent(student);

      setStudents((prev) => [...prev, newStudent]);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const deleteStudent = useCallback(async (id) => {
    try {
      await removeStudent(id);

      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const editStudent = useCallback(async (id, student) => {
    try {
      const updatedStudent = await updateStudent(id, student);

      setStudents((prev) =>
        prev.map((item) => (item.id === id ? updatedStudent : item)),
      );
    } catch (err) {
      setError(err.message);
    }
  }, []);
  return (
    <StudentContext.Provider
      value={{
        students,
        loading,
        error,
        addStudent,
        deleteStudent,
        updateStudent: editStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
