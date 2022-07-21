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

  return (
    <div className="users-c">
      <div>
        {usersApi.map((user) => (
          <h3 key={user.id}>{user.name}</h3>
        ))}
      </div>
    </div>
  );
}

export default Users;
