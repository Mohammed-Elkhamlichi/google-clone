import React, { createContext, useContext, useReducer } from "react";
export const searchContext = createContext();

export const SearchProvider = ({ reducer, initialState, children }) => {
    return (
        <searchContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </searchContext.Provider>
    );
};

export const useSearchValue = () => useContext(searchContext);
