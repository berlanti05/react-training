import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter", () => {
  render(<Counter />);

  const button = screen.getByText("+");

  fireEvent.click(button);

  expect(screen.getByText("1")).toBeInTheDocument();
});
