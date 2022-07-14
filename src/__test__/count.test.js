import { render, screen, fireEvent } from "@testing-library/react";
import Count from "../components/Count";

beforeEach(() => {
  render(<Count />);
});

describe("Testando component count", () => {
  test("Elemntos do component count dom", () => {
    const countText = screen.getByRole("heading", { name: /0/i });
    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });
    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(countText).toBeInTheDocument();
    expect(countText).toHaveClass("heading-black");
    expect(buttonDecrement).toBeInTheDocument();
    expect(buttonIncrement).toBeInTheDocument();
  });

  test("Testando funcionalidade de increment", () => {
    const countText = screen.getByRole("heading", { name: /0/i });

    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    fireEvent.click(buttonIncrement);
    expect(countText).toHaveTextContent(1);
    expect(countText).toHaveClass("heading-black");
  });

  test("Testando funcionalidade de decrement", () => {
    const countText = screen.getByRole("heading", { name: /0/i });

    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    fireEvent.click(buttonDecrement);
    expect(countText).toHaveTextContent(1);
    expect(countText).toHaveClass("heading-red");
  });
});
