import axios from "axios";

const ACCESS_KEY = "ZlD1F3AJ97nB_sBGQ4ZfH54j9x_keWKjzvh6hJ0-Uxk";
const PER_PAGE = 12;

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getFotos = async (query, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: PER_PAGE,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return data;
};
