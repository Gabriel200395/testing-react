import {
  render,
  screen,
  waitFor,
  afterEach,
  cleanup,
} from "@testing-library/react";
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
  test("Testando dados da requisição", async () => {
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
});
