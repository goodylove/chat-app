import { render, screen } from "@testing-library/react";

import NavBar from ".";

test("nav bar render correctly", () => {
  render(<NavBar />);
  const textEl = screen.getByText(/let's chat/i);
  const btn = screen.queryByRole("button", {
    name: /sign out/i,
  });
  const googleBtn = screen.getByRole("button", {
    name: /sign in with google/i,
  });
  expect(textEl).toBeInTheDocument();
  expect(btn).not.toBeInTheDocument();
  expect(googleBtn).toBeInTheDocument();
});
