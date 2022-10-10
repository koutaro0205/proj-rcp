import axios from "axios";

const ALL_USERS_URL = "http://localhost:3000/api/v1/users";

const getAllUsers = async () => {
  const response = await axios.get(ALL_USERS_URL);
  return response.data;
};

export default getAllUsers;
