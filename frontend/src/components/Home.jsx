import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

import { getGithubUserService } from "../services/GetGithubUserService";

export function Home() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const code = location.state?.code;

  async function getGithubUser() {
    console.log(code);
    if (code) {
      const { user, token } = await getGithubUserService(code);
      setUser(user);
      Cookies.set("token", token, { expires: 1 / 24 });
    }
  }

  function signout() {
    Cookies.remove("token");
    navigate("/");
  }

  function verifyAuth() {
    const token = Cookies.get("token");
    if (token === "") navigate("/");
  }

  useEffect(() => {
    verifyAuth();
    getGithubUser();
  }, []);

  return (
    <div className="flex w-auto flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 h-screen">
      <h1 className="text-gray-200 text-4xl font-semibold p-10">
        Olá, {user.name}
      </h1>

      <button
        type="button"
        className="w-80 rounded-md bg-red-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={signout}
      >
        Sign out
      </button>
    </div>
  );
}
