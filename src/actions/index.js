const getMovie = (payload) => {
  return { type: "GET_MOVIE", payload };
};

const getMovieList = () => {
  return { type: "GET_MOVIE_LIST" };
};
const addOrderSelect = (payload) => {
  return { type: "ORDER_SELECT", payload };
};

export { getMovie, getMovieList, addOrderSelect };
