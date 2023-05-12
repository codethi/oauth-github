import axios from "axios";

export async function fetchUser(token) {
  const response = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
