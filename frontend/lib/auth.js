import axios from "axios";
import { API_URL } from "../config";

export const registerUser = async (username, email, password) => {
  await axios
    .post(`${API_URL}/api/auth/local/register`, {
      username,
      email,
      password,
    })
    .then((response) => {
      console.log("POST成功");
      console.log("登録内容：", response.data.user);
      console.log("トークン：", response.data.jwt);
    })
    .catch((error) => {
      console.log("エラー発生：", error.response);
    });
};
