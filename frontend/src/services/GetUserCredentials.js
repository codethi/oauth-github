import axios from "axios";

export async function getGithubUserService(code) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/signin`,
      {
        code,
      }
    );
    return response.data;
  } catch (err) {
    alert("Credenciais incorretas!");
    console.log(err.message);
  }
}
