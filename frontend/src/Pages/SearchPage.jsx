import React from "react";
import Search from "../Components/Search";
import { useSearchValue } from "../Components/StateProvider";
import useGoogleSearch from "../Components/useGoogleSearch";

const SearchPage = () => {
    const [{ term, found }, dispatch] = useSearchValue();
    const { data } = useGoogleSearch(term);
    console.log(data);
    return (
        <>
            <section>
                <Search />
                term : {term}
                <br />
                is Founded : {found.toString()}
            </section>
        </>
    );
};

export default SearchPage;

// my Google API Key: AIzaSyD2UlJqCjVdJuLucBfGrwfHiRhpnjiQTKw
// my GOOGLE Search Engine ID : 5e5bb49be3a3bc4e8
