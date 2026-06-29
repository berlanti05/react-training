import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { test, expect } from "vitest";
import StudentDashboard from "./StudentDashboard";

test("full dashboard flow: add, search, delete student", async () => {
  render(<StudentDashboard />);

  // add student
  fireEvent.change(screen.getByPlaceholderText("Name"), {
    target: { value: "Berlanti" },
  });
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "berlantemasalha@gmail.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Major"), {
    target: { value: "CS" },
  });
  fireEvent.change(screen.getByPlaceholderText("GPA"), {
    target: { value: "3.89" },
  });
  fireEvent.click(screen.getByText("Register"));

  expect(await screen.findByText("Berlanti")).toBeInTheDocument();

  // Search
  fireEvent.change(screen.getByPlaceholderText("Search student by name..."), {
    target: { value: "Berlanti" },
  });

  expect(screen.getByText("Berlanti")).toBeInTheDocument();

  // Delete student
  fireEvent.click(screen.getByText("Delete"));

  await waitFor(() => {
    expect(screen.queryByText("Berlanti")).not.toBeInTheDocument();
  });
});
