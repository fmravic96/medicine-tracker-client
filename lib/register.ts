import axios from "axios";

export const register = async (username: string, password: string, email: string) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, {
      username: username,
      password: password,
      email: email,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};
