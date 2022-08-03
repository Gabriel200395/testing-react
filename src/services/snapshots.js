import axios from "axios";

async function users() {
  const userData = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
   
  return userData.data;
}

export { users };
