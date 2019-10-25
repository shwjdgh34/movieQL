import fetch from "node-fetch";

const API_URL = "https://yts.lt/api/v2/list_movies.json?";
export const getMovies = (limit, rating) => {
  let REQ_API = API_URL;
  if (limit > 0) {
    REQ_API += `limit=${limit}`;
  }
  if (rating > 0) {
    REQ_API += `&minimum_rating=${rating}`;
  }
  return fetch(REQ_API)
    .then(res => res.json())
    .then(json => json.data.movies);
  //.then(json => console.log(json.data.movies));
};
