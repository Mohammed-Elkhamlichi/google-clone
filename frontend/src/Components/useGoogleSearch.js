import React, { useState, useEffect } from "react";
import GOOGLE_API_KEY from "./Kesy";

const GOOGLE_CONTEXT_KEY = "5e5bb49be3a3bc4e8";

const useGoogleSearch = (term) => {
    const [data, setData] = useState([]);
    const url =
        "https://www.googleapis.com/customsearch/v1?" +
        "key=" +
        GOOGLE_API_KEY +
        "&cx=" +
        GOOGLE_CONTEXT_KEY +
        "&q=" +
        term;
    console.log(url);
    useEffect(() => {
        const fetchData = async (url) => {
            fetch(
                "https://www.googleapis.com/customsearch/v1?key=AIzaSyD2UlJqCjVdJuLucBfGrwfHiRhpnjiQTKw&cx=5e5bb49be3a3bc4e8&q=rergeg"
            )
                .then((response) => response.json())
                .then((data) => setData(data))
                .catch((error) => console.log(error));
        };
        fetchData();
    }, [term]);
    return <></>;
};

export default useGoogleSearch;
