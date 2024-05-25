import { render, screen, fireEvent } from "@testing-library/react";
import CheckItemField from "./CheckItemField";
import userEvent from "@testing-library/user-event";

describe("CheckItemField", () => {
  it("renders the label and input field with the correct attributes", () => {
    const fn = jest.fn();
    render(
      <CheckItemField
        id="test-id"
        label="Test Label"
        value="Test Value"
        onInput={fn}
      />,
    );

    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("id", "test-id");
    expect(inputElement).toHaveValue("Test Value");
  });

  it("renders without value if value prop is not provided", () => {
    render(<CheckItemField id="test-id" label="Test Label" />);

    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toHaveValue("");
  });

  it("should set onInput handler correctly", async () => {
    const fn = jest.fn();
    render(
      <CheckItemField
        id="test-id"
        label="Test Label"
        value="Test Value"
        onInput={fn}
      />,
    );

    const user = userEvent.setup();
    const inputElement = screen.getByLabelText("Test Label");
    await user.type(inputElement, "new Value");
    expect(fn).toHaveBeenCalled();
  });
});
