import axios from "axios";
import { API_URL, TOKEN_KEY } from "config";

export const post = ({ path, body }) => {
  return axios
    .post(`${API_URL}${path}`, body, {
      headers: {
        Authorization: localStorage.getItem("token") || ""
      }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
