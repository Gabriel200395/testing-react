import { screen, render, fireEvent } from "@testing-library/react";
import Toogle from "../components/Toogle";

describe("Testando o component Toogle", () => {
  test("inicio do Toogle", () => {
    render(<Toogle />);
    const { getByRole } = screen;
    const button = getByRole("button", { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test("click do button open", () => {
    render(<Toogle />);
    const { getByRole } = screen;
    const button = getByRole("button", { name: /close/i });

    fireEvent.click(button);
    expect(button).toHaveTextContent("Open");

    expect(getByRole("heading", { name: /open/i })).toBeInTheDocument();
  });

  test("click do button close", () => {
    render(<Toogle />);
    const { getByRole, queryByRole } = screen;
    const button = getByRole("button", { name: /close/i });

    fireEvent.doubleClick(button);
    expect(button).toHaveTextContent("Close");

    expect(queryByRole("heading", { name: /open/i })).not.toBeInTheDocument();
  });
});
