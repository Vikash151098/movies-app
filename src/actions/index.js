const getMovie = (payload) => {
    return { type: 'GET_MOVIE', payload };
}

const getMovieList = () => {
    return { type: 'GET_MOVIE_LIST' };
}
const addPost = (payload) => {
    return { type: 'ADD_POST', payload };
}

export { getMovie, getMovieList, addPost };