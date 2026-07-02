const url = "http://localhost:3001/students";

export async function getStudents() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  return response.json();
}

export async function createStudent(student) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error("Failed to create student");
  }

  return response.json();
}

export async function removeStudent(id) {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete student");
  }
}

export async function updateStudent(id, student) {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error("Failed to update student");
  }

  return response.json();
}
