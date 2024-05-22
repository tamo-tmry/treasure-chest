import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders the button with the correct text", () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("sets the default type to 'button'", () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toHaveAttribute("type", "button");
  });

  it("allows type to be set to 'submit'", () => {
    render(<Button text="Submit" type="submit" />);
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  it("allows type to be set to 'reset'", () => {
    render(<Button text="Reset" type="reset" />);
    const buttonElement = screen.getByText("Reset");
    expect(buttonElement).toHaveAttribute("type", "reset");
  });
});
