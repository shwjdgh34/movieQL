import { movies, getById, getMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  }
};
export default resolvers;
