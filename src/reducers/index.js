

function MoviesReducer(state = [], action) {
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

function OrderSelectReducer(state = {}, action) {
    switch (action.type) {
        case 'ORDER_SELECT':
            return action.payload;
        case 'ORDER_SELECT_LIST':
            return state.components.filter();
        default:
            return state
    }
}

export { MoviesReducer, OrderSelectReducer };