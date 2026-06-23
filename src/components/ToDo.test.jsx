import { test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

test("adds a new task", () => {
  const setFilter = vi.fn();

  render(<Todo filter="all" setFilter={setFilter} />);

  const input = screen.getByPlaceholderText("Write a task...");
  const button = screen.getByText("Add");

  fireEvent.change(input, {
    target: { value: "Study React" },
  });

  fireEvent.click(button);

  expect(screen.getByText("Study React")).toBeInTheDocument();
});
