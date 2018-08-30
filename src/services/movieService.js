import http from "./httpService";
const apiEndpoint = "http://localhost:3001/api/movies";
export function getMovies() {
  return http.get(apiEndpoint);
}
export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}
