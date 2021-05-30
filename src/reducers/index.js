

function PostsReducer(state = [], action) {
    switch (action.type) {
        case 'GET_MOVIE':
            return action.payload;
        case 'GET_MOVIE_LIST':
            return state.components.filter();
        case 'FILTER_MOVIE':
            return action.payload;
        default:
            return state
    }
}

export default PostsReducer;