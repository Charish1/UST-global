import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterButtons from "./FilterButtons";

test("renders filter buttons and triggers filter function on click", () => {
  const setFilter = jest.fn();
  render(<FilterButtons setFilter={setFilter} />);

  const button = screen.getByText("Acceptable");
  fireEvent.click(button);

  expect(setFilter).toHaveBeenCalledWith("acceptable");
});
