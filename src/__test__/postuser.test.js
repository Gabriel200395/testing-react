import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PostUser from "../components/PostUser";
import axios from "axios";

jest.mock("axios");

const user = {
  name: "Gabriel",
  username: "Souza",
};

describe("Component PostUser", () => {
  test("Requisição do Tipo Post", async () => {
    axios.post.mockImplementation(() => Promise.resolve({ data: user }));
    render(<PostUser />);

    const name = screen.getByTestId("name");
    const username = screen.getByTestId("username");
    const button = screen.getByRole("button", { name: /enviar/i });

    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    fireEvent.change(name, { target: { value: "Gabriel" } });
    fireEvent.change(username, { target: { value: "Souza" } });

    expect(name.value).toEqual("Gabriel");
    expect(username.value).toEqual("Souza");

    fireEvent.click(button);

    expect(axios.post).toHaveBeenCalled();
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/",
      { ...user }
    );
  });
});
