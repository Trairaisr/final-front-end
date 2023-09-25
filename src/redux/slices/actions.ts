import axios from "axios";

export const MAIN_URL = "http://localhost:4000";

export async function login(username: string, password: string, ) {
  return await axios({
    method: "POST",
    url: `${MAIN_URL}/users/login`,
    data: { username, password },
  });
}

export async function register(
  name: string,
  lastname: string,
  username: string,
  email: string,
  password: string
) {
  return await axios({
    method: "POST",
    url: `${MAIN_URL}/users/register`,
    data: { name, lastname, username, email, password },
  });
}

export async function getVacations(
  ) {
    return await axios({
      method: "GET",
      url: `${MAIN_URL}/vacations`,
    });
  }
  
  export async function addVacation(
    destination: string,
    description: string,
    image: string,
    startDate: Date,
    endDate: Date,
    price: number,
  ) {
    return await axios({
      method: "POST",
      url: `${MAIN_URL}/addVacation`,
      data: { destination,
        description,
        image,
        startDate,
        endDate,
        price, },
    });
  }