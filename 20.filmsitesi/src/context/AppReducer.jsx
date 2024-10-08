export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVİE_TO_WATCHLİST":
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            };
        case "REMOVE_MOVİE_FROM_WATCHLİST":
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
            };
        case "ADD_MOVİE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.id !== action.payload.id
                ),
                watched: [...state.watched, action.payload],
            };
        case "MOVE_TO_WATCHED":
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.id !== action.payload.id
                ),
                watchlist: [...state.watchlist, action.payload],
            };

        case "REMOVE_MOVİE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.id !== action.payload),
            };
        default:
            return state;
    }
};