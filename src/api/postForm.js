import axios from "axios";

function postForm(jsonData, apiUrl) {
  return axios
    .post(apiUrl, jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Response:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}

export default postForm;
