import { actionTypes } from "./reducer";
import { useState, useEffect } from "react";
import axios from "axios";
import { GOOGLE_API_KEY } from "./Keys";
import { useSearchContext } from "./StateProvider";
const GOOGLE_CONTEXT_KEY = "5e5bb49be3a3bc4e8";

const useGoogleSearch = (term) => {
    const [state, dispatch] = useSearchContext();
    const [data, setData] = useState([]);
    // Fetching data from url
    const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CONTEXT_KEY}&q=${term}`;
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response);
                dispatch({ type: actionTypes.REQUEST_DATA, data: response });
            })
            .catch((error) => console.log(error));
    }, [term]);

    return data;
};

export default useGoogleSearch;
