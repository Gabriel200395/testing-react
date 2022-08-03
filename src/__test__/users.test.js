import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Users from "../components/Users";
import axios from "axios";

jest.mock("axios");

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
];

describe("Testando component users", () => {
  test("Testando Dados da Requisição do Tipo GET", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: users }));
    render(<Users />);

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: users[0].name })
      ).toBeInTheDocument()
    );

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("Removendo elementos e testando requisição do tipo delete", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: users }));
    axios.delete.mockImplementation(() => Promise.resolve({ data: users[0] }));
    render(<Users />);

    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "remover" })
      ).toBeInTheDocument()
    );

    fireEvent.click(screen.getByRole("button", { name: "remover" }));

    await waitFor(() =>
      expect(
        screen.queryByRole("heading", { name: users[0].name })
      ).not.toBeInTheDocument()
    );

    expect(axios.delete).toHaveBeenCalled();
    expect(axios.delete).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    expect(axios.delete).toHaveBeenCalledTimes(1);
  });
});
