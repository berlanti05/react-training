import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./ToDo";

test("adds a new task", () => {
  render(<Todo />);

  const input = screen.getByPlaceholderText("Write a task...");
  const button = screen.getByText("Add");

  fireEvent.change(input, {
    target: { value: "Study React" },
  });

  fireEvent.click(button);

  expect(screen.getByText("Study React")).toBeInTheDocument();
});
