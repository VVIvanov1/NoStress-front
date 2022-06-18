import axios from "axios";

export default async function PasswordResetFetch(obj) {
  const url = "/users/reset-password";
  const body = {
    email: obj.email,
  };

  try {
    let resp = axios.post(`http://localhost:5000${url}`, body, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return resp;
  } catch (error) {
    throw new Error(error);
  }
}
