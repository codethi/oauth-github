import qs from "query-string";

export function redirectToGitHub() {
  const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
  const params = {
    client_id: import.meta.env.VITE_CLIENT_ID,
    redirect_uri: "http://127.0.0.1:5173/",
    scope: "user public_repo",
    response_type: "code",
  };

  const queryString = qs.stringify(params);

  window.location.href = `${GITHUB_URL}?${queryString}`;
}
