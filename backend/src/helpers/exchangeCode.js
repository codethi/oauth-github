import "dotenv/config";
import axios from "axios";
import qs from "query-string";

export async function exchangeCodeForAccessToken(codeClient) {
  const { REDIRECT_URI, CLIENT_ID, CLIENT_SECRET, GITHUB_ACCESS_TOKEN_URL } =
    process.env;

  const params = {
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    client_secret: CLIENT_SECRET,
    code: codeClient,
    grant_type: "authorization_code",
  };

  const { data } = await axios.post(GITHUB_ACCESS_TOKEN_URL, params, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const parseData = qs.parse(data);
  console.log(parseData);
  return parseData.access_token;
}
