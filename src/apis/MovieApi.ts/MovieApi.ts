import axios from "axios";
import { BASE_URL } from "../../constants";

const MOVIE_URL = `${BASE_URL}/movies`;

const MovieApi = {
  async getMovies() {
    try {
      const result = await axios.get(MOVIE_URL);

      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getMovieById(movieId: string) {
    try {
      const url = `${MOVIE_URL}/${movieId}`;
      const result = await axios.get(url);

      return result.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default MovieApi;
