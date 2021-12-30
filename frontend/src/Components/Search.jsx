import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import "../Styles/Search.css";
import { useSearchValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Search = ({ hideButtons = false }) => {
    // use Reduce to memorise searsh  input value
    const [{}, dispatch] = useSearchValue();
    // get The Search input value
    const searchInput = useRef(null);

    // navigate to an other page
    const navigate = useNavigate();

    // handle Search Form whin submited
    const search = (e) => {
        e.preventDefault();
        if (searchInput.current.value) {
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: searchInput.current.value,
                found: true,
            });
            navigate("/search", { replace: false });
        } else {
            console.log("you put nothing to search");
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: null,
                found: false,
            });
        }
    };

    return (
        <>
            <form className='google__search__form'>
                <div className='google__search__input'>
                    <SearchIcon style={{ color: "gray", padding: "10px" }} />
                    <input
                        ref={searchInput}
                        className='search__input'
                        type='text'
                        name=''
                        id=''
                    />
                    <MicIcon style={{ padding: "10px" }} />
                </div>
                {!hideButtons ? (
                    <div className='google__search__btn'>
                        <button type='submit' onClick={search}>
                            Google Search
                        </button>
                        <button>I'm Feeling Lucky</button>
                    </div>
                ) : (
                    <div className='google__search__btn hidden__buttons'>
                        <button type='submit' onClick={search}>
                            Google Search
                        </button>
                        <button>I'm Feeling Lucky</button>
                    </div>
                )}
            </form>
        </>
    );
};

export default Search;
