import { render, screen } from "@testing-library/react";
import { CheckboxItem } from "./CheckboxItem";
import userEvent from "@testing-library/user-event";

describe("CheckboxItem", () => {
  it("チェックボックスの初期値がfalseの場合、チェックなしのチェックボックスが表示されること", () => {
    const fn = jest.fn();
    render(
      <CheckboxItem
        itemId="test-id"
        label="Test Label"
        isChecked={false}
        onChangeFn={fn}
      />,
    );
    const checkbox = screen.getByLabelText("Test Label");
    expect(checkbox).toHaveAttribute("id", "test-id");
    expect(checkbox).not.toBeChecked();
  });

  it("チェックボックスの初期値がtrueの場合、チェックありのチェックボックスが表示されること", () => {
    const fn = jest.fn();
    render(
      <CheckboxItem
        itemId="test-id"
        label="Test Label"
        isChecked={true}
        onChangeFn={fn}
      />,
    );

    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("チェックボックスの状態が変わった時、onChangeFnが呼び出されること", async () => {
    const fn = jest.fn();
    render(
      <CheckboxItem
        itemId="test-id"
        label="Test Label"
        isChecked={false}
        onChangeFn={fn}
      />,
    );

    const user = userEvent.setup();
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    expect(fn).toHaveBeenCalled();
  });

  it("ラベルが正しく表示されること", () => {
    const fn = jest.fn();
    render(
      <CheckboxItem
        itemId="test-id"
        label="Test Label"
        isChecked={true}
        onChangeFn={fn}
      />,
    );

    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("ラベルとチェックボックスが正しく関連づけられていること", () => {
    const fn = jest.fn();
    render(
      <CheckboxItem
        itemId="test-id"
        label="Test Label"
        isChecked={true}
        onChangeFn={fn}
      />,
    );

    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("Test Label");
    expect(label).toHaveAttribute("for", "test-id");
    expect(checkbox).toHaveAttribute("id", "test-id");
  });
});
