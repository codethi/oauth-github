import { exchangeCodeForAccessToken } from "../helpers/exchangeCode.js";
import { fetchUser } from "../helpers/fetchUser.js";

export async function signin(req, res) {
  try {
 
    const token = await exchangeCodeForAccessToken(req.body.code);
    const user = await fetchUser(token);
    res.send({ user, token });
  } catch (err) {
    res.status(400).send(err.message);
  }
}
