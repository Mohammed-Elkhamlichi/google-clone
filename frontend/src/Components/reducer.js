export const initialState = {
    term: null,
    found: false,
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    SEARCH_NOT_FOUND: "SEARCH_NOT_FOUND",
};

const reducer = (state, action) => {
    console.log(state);
    console.log("reducer action", action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
                found: action.found,
            };
        case actionTypes.SEARCH_NOT_FOUND:
            return { ...state, term: action.term, found: action.found };
        default:
            return state;
    }
};
export default reducer;
