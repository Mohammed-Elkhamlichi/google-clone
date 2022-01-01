export const initialState = {
    term: null,
    found: false,
    data: [],
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
    SEARCH_NOT_FOUND: "SEARCH_NOT_FOUND",
    REQUEST_DATA: "REQUEST_DATA",
};

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
                found: action.found,
            };
        case actionTypes.REQUEST_DATA:
            return {
                ...state,
                data: action.data,
            };
        case actionTypes.SEARCH_NOT_FOUND:
            return { ...state, term: action.term, found: action.found };
        default:
            return state;
    }
};
export default reducer;
