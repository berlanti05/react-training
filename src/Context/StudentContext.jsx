import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
