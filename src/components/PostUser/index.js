import { useState } from "react";
import "./styles.css";
import axios from "axios";
function PostUser() {
  const [user, setUser] = useState({ name: "", username: "" });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.name.length > 0 && user.username.length > 0) {
      const dataUser = await axios.post(
        "https://jsonplaceholder.typicode.com/users/",
        {...user}   
      );
    } 
  };

  return (
    <div className="c-postuser">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="field-group">
            <label>name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              data-testid="name"
            />
          </div>

          <div className="field-group">
            <label>username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              data-testid="username"
            />
          </div>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default PostUser;
