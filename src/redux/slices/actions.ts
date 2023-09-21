import axios from "axios";

export const MAIN_URL = "http://localhost:4000";

export async function login(username: string, password: string) {
  return await axios({
    method: "POST",
    url: `${MAIN_URL}/users/login`,
    data: { username, password },
  });
}
