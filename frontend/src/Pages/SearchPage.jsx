import React from "react";
import useGoogleSearch from "../Components/useGoogleSearch";
import { useSearchContext } from "../Components/StateProvider";
import "../Styles/SearchPage.css";
import SearchHeader from "../Components/SearchHeader";

const SearchPage = () => {
    // const gooleResponseData = GOOGLE_RESPONSE_DATA;
    const [state, dispatch] = useSearchContext();
    const { data } = useGoogleSearch(state.term);
    const gooleResponseData = data;

    return (
        <>
            <section className='search_section'>
                <SearchHeader />
                <div className='response__container'>
                    <div className='response__info'>
                        About{" "}
                        {
                            gooleResponseData?.searchInformation
                                .formattedTotalResults
                        }
                        results (
                        {
                            gooleResponseData?.searchInformation
                                .formattedSearchTime
                        }{" "}
                        seconds)
                    </div>
                    {gooleResponseData?.items.map((item, index) => {
                        return (
                            <div className='response__item' key={index}>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    {item.pagemap && item.pagemap.cse_image ? (
                                        <img
                                            style={{
                                                margin: "5px",
                                                width: "70px",
                                                height: "40px",
                                                borderRadius: "10px",
                                            }}
                                            src={`${item.pagemap.cse_image[0].src}`}
                                            alt=''
                                        />
                                    ) : (
                                        ""
                                    )}
                                    <a
                                        style={{
                                            color: "gray",
                                            textDecoration: "none",
                                            fontSize: "small",
                                        }}
                                        href={item.displayLink}
                                        rel='noreferrer'
                                        target='_blank'
                                    >
                                        <h3>{item.displayLink}</h3>
                                    </a>
                                </div>

                                <a
                                    style={{
                                        textDecoration: "solid",
                                        color: "cornflowerblue",
                                    }}
                                    href={item.link}
                                    rel='noreferrer'
                                    target='_blank'
                                >
                                    <h2>{item.title}</h2>
                                </a>
                                <p style={{ color: "gray" }}>{item.snippet}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default SearchPage;

// my Google API Key: AIzaSyD2UlJqCjVdJuLucBfGrwfHiRhpnjiQTKw
// my GOOGLE Search Engine ID : 5e5bb49be3a3bc4e8
