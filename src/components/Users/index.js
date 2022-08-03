import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function Users() {
  const [usersApi, setUsersApi] = useState([]);

  useEffect(() => {
    async function req() {
      try {
        const dataUsers = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const response = await dataUsers.data;
        setUsersApi(response);
      } catch (error) {
        console.log(error);
      }
    }

    req();
  }, []);

  const handleRemove = async (id) => {
    await axios.delete("https://jsonplaceholder.typicode.com/users/" + id);
    setUsersApi((users) => users.filter((i) => i.id !== id));
  };

  return (
    <div className="users-c">
      <div>
        {usersApi.map((user) => (
          <div key={user.id} className="flex-row" data-testid="element">
            <h3>{user.name}</h3>
            <button type="button" onClick={() => handleRemove(user.id)}>
              remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
