export function getPoints() {
    const axios = window.axios;
    return axios.get("./json/data.json").then((response) => {
      return response.data["points"];
    });
  }  