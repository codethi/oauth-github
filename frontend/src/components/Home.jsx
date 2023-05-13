import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export function Home() {
  const { user } = useContext(UserContext);
  return <h1>Seja bem vindo! {user.name}</h1>;
}
